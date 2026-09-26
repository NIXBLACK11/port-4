import {
  countryFromCode,
  type AnalyticsDimension,
  type AnalyticsPayload,
} from "@/lib/analytics-data"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type VercelAggregateRow = {
  timestamp?: string
  country?: string
  deviceType?: string
  referrerHostname?: string
  pageviews?: number
  visitors?: number
}

type VercelCountResponse = {
  data?: {
    pageviews?: number
    visitors?: number
  }
}

type VercelAggregateResponse = {
  data?: VercelAggregateRow[]
}

const apiBase = "https://api.vercel.com/v1/query/web-analytics"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const days = parseInteger(searchParams.get("days"), 30)
  const range = dateRange(days)
  const payload = await getAnalytics(range)

  if (searchParams.get("scope") === "summary") {
    return Response.json({
      configured: payload.configured,
      total: payload.totals.visitors,
      pageviews: payload.totals.pageviews,
      generatedAt: payload.generatedAt,
    })
  }

  return Response.json(payload)
}

async function getAnalytics(range: { since: string; until: string; days: number }) {
  const token = process.env.VERCEL_TOKEN
  const projectId = process.env.VERCEL_PROJECT_ID

  if (!token || !projectId) {
    return emptyAnalytics(range)
  }

  const [totals, countries, daily, devices, referrers] = await Promise.all([
    fetchCount(token, projectId, range),
    fetchAggregate(token, projectId, range, "country", "12"),
    fetchAggregate(token, projectId, range, "day", String(range.days)),
    fetchAggregate(token, projectId, range, "deviceType", "5"),
    fetchAggregate(token, projectId, range, "referrerHostname", "6"),
  ])

  return {
    configured: true,
    generatedAt: new Date().toISOString(),
    range,
    totals,
    countries: countries
      .map((row) => {
        const code = row.country ?? "Unknown"
        const meta = countryFromCode(code)

        return {
          country: code,
          name: meta.name,
          pageviews: numberValue(row.pageviews),
          visitors: numberValue(row.visitors),
          x: meta.x,
          y: meta.y,
          lng: meta.lng,
          lat: meta.lat,
        }
      })
      .sort((a, b) => b.visitors - a.visitors),
    daily: daily.map((row) => ({
      label: formatDayLabel(row.timestamp),
      pageviews: numberValue(row.pageviews),
      visitors: numberValue(row.visitors),
    })),
    devices: toDimensions(devices, "deviceType"),
    referrers: toDimensions(referrers, "referrerHostname"),
  } satisfies AnalyticsPayload
}

function emptyAnalytics(range: { since: string; until: string; days: number }) {
  return {
    configured: false,
    generatedAt: new Date().toISOString(),
    range,
    totals: {
      pageviews: 0,
      visitors: 0,
    },
    countries: [],
    daily: [],
    devices: [],
    referrers: [],
  } satisfies AnalyticsPayload
}

async function fetchCount(
  token: string,
  projectId: string,
  range: { since: string; until: string }
) {
  const data = await fetchVercel<VercelCountResponse>(token, "visits/count", {
    projectId,
    since: range.since,
    until: range.until,
  })

  return {
    pageviews: numberValue(data.data?.pageviews),
    visitors: numberValue(data.data?.visitors),
  }
}

async function fetchAggregate(
  token: string,
  projectId: string,
  range: { since: string; until: string },
  by: string,
  limit: string
) {
  const data = await fetchVercel<VercelAggregateResponse>(token, "visits/aggregate", {
    projectId,
    since: range.since,
    until: range.until,
    by,
    limit,
  })

  return data.data ?? []
}

async function fetchVercel<T>(
  token: string,
  endpoint: string,
  params: Record<string, string | undefined>
) {
  const url = new URL(`${apiBase}/${endpoint}`)

  for (const [key, value] of Object.entries(params)) {
    if (value) {
      url.searchParams.set(key, value)
    }
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Vercel analytics request failed with ${response.status}`)
  }

  return (await response.json()) as T
}

function dateRange(days: number) {
  const safeDays = Math.min(Math.max(days, 1), 30)
  const until = new Date()
  const since = new Date(until)

  since.setUTCDate(until.getUTCDate() - safeDays + 1)

  return {
    since: toDateInput(since),
    until: toDateInput(until),
    days: safeDays,
  }
}

function toDateInput(date: Date) {
  return date.toISOString().slice(0, 10)
}

function formatDayLabel(timestamp: string | undefined) {
  if (!timestamp) {
    return "Unknown"
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    timeZone: "UTC",
  }).format(new Date(timestamp))
}

function toDimensions(
  rows: VercelAggregateRow[],
  key: "deviceType" | "referrerHostname"
): AnalyticsDimension[] {
  return rows
    .map((row) => ({
      label: row[key] || "Direct",
      pageviews: numberValue(row.pageviews),
      visitors: numberValue(row.visitors),
    }))
    .sort((a, b) => b.visitors - a.visitors)
}

function numberValue(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0
}

function parseInteger(value: string | null, fallback: number) {
  if (!value) {
    return fallback
  }

  const parsed = Number.parseInt(value, 10)
  return Number.isFinite(parsed) ? parsed : fallback
}
