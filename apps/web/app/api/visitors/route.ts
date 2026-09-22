import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { tmpdir } from "node:os"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const LIVE_WINDOW_MS = 45_000
const visitorFile =
  process.env.VISITOR_DATA_FILE ??
  join(tmpdir(), "nixblack-portfolio-visitors.json")

const liveVisitors = new Map<string, number>()

type VisitorStore = {
  total: number
  visitors: string[]
}

export async function GET() {
  pruneLiveVisitors()
  const store = await readStore()

  return Response.json({
    total: store.total,
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

  const store = await readStore()

  if (!store.visitors.includes(visitorId)) {
    store.visitors.push(visitorId)
    store.total += 1
    await writeStore(store)
  }

  return Response.json({
    total: store.total,
    live: liveVisitors.size,
  })
}

async function readStore(): Promise<VisitorStore> {
  try {
    const raw = await readFile(visitorFile, "utf8")
    const parsed = JSON.parse(raw) as Partial<VisitorStore>

    return {
      total: Number.isFinite(parsed.total) ? Number(parsed.total) : 0,
      visitors: Array.isArray(parsed.visitors)
        ? parsed.visitors.filter((item): item is string => typeof item === "string")
        : [],
    }
  } catch {
    return { total: 0, visitors: [] }
  }
}

async function writeStore(store: VisitorStore) {
  await mkdir(dirname(visitorFile), { recursive: true })
  await writeFile(visitorFile, JSON.stringify(store), "utf8")
}

function pruneLiveVisitors() {
  const staleBefore = Date.now() - LIVE_WINDOW_MS

  for (const [visitorId, lastSeenAt] of liveVisitors.entries()) {
    if (lastSeenAt < staleBefore) {
      liveVisitors.delete(visitorId)
    }
  }
}
