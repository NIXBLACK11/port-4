export type AnalyticsCountry = {
  country: string
  name: string
  pageviews: number
  visitors: number
  x: number
  y: number
  lng: number
  lat: number
}

export type AnalyticsPoint = {
  label: string
  pageviews: number
  visitors: number
}

export type AnalyticsDimension = {
  label: string
  pageviews: number
  visitors: number
}

export type AnalyticsPayload = {
  configured: boolean
  generatedAt: string
  range: {
    since: string
    until: string
    days: number
  }
  totals: {
    pageviews: number
    visitors: number
  }
  countries: AnalyticsCountry[]
  daily: AnalyticsPoint[]
  devices: AnalyticsDimension[]
  referrers: AnalyticsDimension[]
}

export const countryMeta: Record<
  string,
  { name: string; x: number; y: number; lng: number; lat: number }
> = {
  AR: { name: "Argentina", x: 31, y: 78, lng: -63.6, lat: -38.4 },
  AU: { name: "Australia", x: 82, y: 74, lng: 133.8, lat: -25.3 },
  BR: { name: "Brazil", x: 35, y: 66, lng: -51.9, lat: -14.2 },
  CA: { name: "Canada", x: 24, y: 25, lng: -106.3, lat: 56.1 },
  CN: { name: "China", x: 73, y: 44, lng: 104.2, lat: 35.9 },
  DE: { name: "Germany", x: 50, y: 35, lng: 10.5, lat: 51.2 },
  ES: { name: "Spain", x: 46, y: 43, lng: -3.7, lat: 40.5 },
  FR: { name: "France", x: 48, y: 39, lng: 2.2, lat: 46.2 },
  GB: { name: "United Kingdom", x: 46, y: 33, lng: -3.4, lat: 55.4 },
  ID: { name: "Indonesia", x: 75, y: 61, lng: 113.9, lat: -0.8 },
  IN: { name: "India", x: 66, y: 51, lng: 78.9, lat: 20.6 },
  IT: { name: "Italy", x: 51, y: 43, lng: 12.6, lat: 41.9 },
  JP: { name: "Japan", x: 83, y: 42, lng: 138.3, lat: 36.2 },
  KR: { name: "South Korea", x: 79, y: 43, lng: 127.8, lat: 35.9 },
  MX: { name: "Mexico", x: 21, y: 49, lng: -102.6, lat: 23.6 },
  NL: { name: "Netherlands", x: 49, y: 34, lng: 5.3, lat: 52.1 },
  RU: { name: "Russia", x: 66, y: 25, lng: 105.3, lat: 61.5 },
  SG: { name: "Singapore", x: 72, y: 59, lng: 103.8, lat: 1.35 },
  US: { name: "United States", x: 22, y: 39, lng: -95.7, lat: 37.1 },
  ZA: { name: "South Africa", x: 54, y: 76, lng: 22.9, lat: -30.6 },
}

export const sampleAnalytics: AnalyticsPayload = {
  configured: false,
  generatedAt: new Date().toISOString(),
  range: {
    since: "2026-08-28",
    until: "2026-09-26",
    days: 30,
  },
  totals: {
    pageviews: 18420,
    visitors: 6210,
  },
  countries: [
    countryRow("IN", 7420, 2440),
    countryRow("US", 3160, 1040),
    countryRow("GB", 1380, 520),
    countryRow("DE", 1120, 410),
    countryRow("SG", 860, 310),
    countryRow("JP", 720, 260),
    countryRow("AU", 610, 210),
  ],
  daily: [
    { label: "Aug 28", pageviews: 420, visitors: 136 },
    { label: "Aug 31", pageviews: 510, visitors: 164 },
    { label: "Sep 03", pageviews: 470, visitors: 151 },
    { label: "Sep 06", pageviews: 680, visitors: 222 },
    { label: "Sep 09", pageviews: 590, visitors: 188 },
    { label: "Sep 12", pageviews: 760, visitors: 248 },
    { label: "Sep 15", pageviews: 840, visitors: 274 },
    { label: "Sep 18", pageviews: 710, visitors: 230 },
    { label: "Sep 21", pageviews: 960, visitors: 316 },
    { label: "Sep 24", pageviews: 1030, visitors: 340 },
  ],
  devices: [
    { label: "Desktop", pageviews: 9820, visitors: 3180 },
    { label: "Mobile", pageviews: 7180, visitors: 2510 },
    { label: "Tablet", pageviews: 1420, visitors: 520 },
  ],
  referrers: [
    { label: "Direct", pageviews: 6820, visitors: 2380 },
    { label: "github.com", pageviews: 4160, visitors: 1390 },
    { label: "linkedin.com", pageviews: 3180, visitors: 1080 },
    { label: "x.com", pageviews: 1640, visitors: 540 },
  ],
}

export function countryFromCode(code: string) {
  const normalized = code.trim().toUpperCase()
  return countryMeta[normalized] ?? fallbackCountryMeta(normalized)
}

function fallbackCountryMeta(code: string) {
  let hash = 0

  for (const char of code) {
    hash = (hash * 31 + char.charCodeAt(0)) % 997
  }

  return {
    name: code || "Unknown",
    x: 16 + (hash % 68),
    y: 26 + ((hash * 7) % 50),
    lng: -160 + (hash % 320),
    lat: -55 + ((hash * 7) % 115),
  }
}

function countryRow(country: string, pageviews: number, visitors: number) {
  const meta = countryFromCode(country)

  return {
    country,
    name: meta.name,
    pageviews,
    visitors,
    x: meta.x,
    y: meta.y,
    lng: meta.lng,
    lat: meta.lat,
  }
}
