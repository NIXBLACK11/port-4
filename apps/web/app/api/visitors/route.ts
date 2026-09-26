export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const LIVE_WINDOW_MS = 45_000

const liveVisitors = new Map<string, number>()

export async function GET() {
  pruneLiveVisitors()

  return Response.json({
    total: 0,
    live: liveVisitors.size,
  })
}

export async function POST(req: Request) {
  let visitorId = ""

  try {
    const body = await req.json()
    visitorId = typeof body.visitorId === "string" ? body.visitorId : ""
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  if (!/^[a-zA-Z0-9-]{16,80}$/.test(visitorId)) {
    return Response.json({ error: "Invalid visitor id." }, { status: 400 })
  }

  liveVisitors.set(visitorId, Date.now())
  pruneLiveVisitors()

  return Response.json({
    total: 0,
    live: liveVisitors.size,
  })
}

function pruneLiveVisitors() {
  const staleBefore = Date.now() - LIVE_WINDOW_MS

  for (const [visitorId, lastSeenAt] of liveVisitors.entries()) {
    if (lastSeenAt < staleBefore) {
      liveVisitors.delete(visitorId)
    }
  }
}
