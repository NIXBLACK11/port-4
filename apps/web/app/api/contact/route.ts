export const runtime = "nodejs"

const WINDOW_MS = 60_000
const MAX_REQUESTS = 3

const buckets = new Map<string, { count: number; resetAt: number }>()

type ContactPayload = {
  name?: unknown
  phone?: unknown
  email?: unknown
  message?: unknown
  company?: unknown
}

export async function POST(req: Request) {
  const ip = getClientIp(req)
  const limited = isRateLimited(ip)

  if (limited) {
    return Response.json(
      { error: "Please wait a minute before sending another message." },
      { status: 429 }
    )
  }

  let payload: ContactPayload

  try {
    payload = await req.json()
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  const name = cleanText(payload.name, 80)
  const phone = cleanText(payload.phone, 40)
  const email = cleanText(payload.email, 120)
  const message = cleanText(payload.message, 2000)
  const honeypot = cleanText(payload.company, 120)

  if (honeypot) {
    return Response.json({ ok: true })
  }

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    )
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    const missing = [
      !token ? "TELEGRAM_BOT_TOKEN" : "",
      !chatId ? "TELEGRAM_CHAT_ID" : "",
    ].filter(Boolean)

    return Response.json(
      { error: `Contact delivery is missing ${missing.join(" and ")}.` },
      { status: 500 }
    )
  }

  const text = [
    "New portfolio contact",
    "",
    `Name: ${name}`,
    phone ? `Phone: ${phone}` : "",
    `Email: ${email}`,
    `IP: ${ip}`,
    "",
    message,
  ].join("\n")

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    }
  )

  if (!response.ok) {
    return Response.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 }
    )
  }

  return Response.json({ ok: true })
}

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return ""
  }

  return value.trim().replace(/\s+\n/g, "\n").slice(0, maxLength)
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for")

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }

  return req.headers.get("x-real-ip") || "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const bucket = buckets.get(ip)

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  bucket.count += 1

  return bucket.count > MAX_REQUESTS
}
