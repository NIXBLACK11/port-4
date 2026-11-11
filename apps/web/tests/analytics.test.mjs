import process from "node:process"

import { afterEach, describe, expect, spyOn, test } from "bun:test"

import { GET } from "../app/api/analytics/route"
import { countryFromCode } from "../lib/analytics-data"

const originalEnv = {
  VERCEL_TOKEN: process.env.VERCEL_TOKEN,
  VERCEL_PROJECT_ID: process.env.VERCEL_PROJECT_ID,
  VERCEL_TEAM_ID: process.env.VERCEL_TEAM_ID,
}
let fetchSpy

afterEach(() => {
  fetchSpy?.mockRestore()
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key]
    else process.env[key] = value
  }
})

describe("country analytics", () => {
  test("uses readable names for countries outside the original metadata", () => {
    expect(countryFromCode(" nz ").name).toBe("New Zealand")
    expect(countryFromCode("CH").name).toBe("Switzerland")
    expect(countryFromCode("Others").name).toBe("OTHERS")
  })

  test("returns an honest empty state when analytics is unconfigured", async () => {
    delete process.env.VERCEL_TOKEN
    delete process.env.VERCEL_PROJECT_ID
    fetchSpy = spyOn(globalThis, "fetch")
    const response = await GET(
      new Request("http://localhost/api/analytics?days=7")
    )
    const payload = await response.json()
    expect(payload.configured).toBe(false)
    expect(payload.countries).toEqual([])
    expect(payload.range.days).toBe(7)
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  test("requests countries within Vercel's limit for the selected range and team, normalizes and sorts their metrics", async () => {
    process.env.VERCEL_TOKEN = "test-token"
    process.env.VERCEL_PROJECT_ID = "test-project"
    process.env.VERCEL_TEAM_ID = "test-team"
    const requests = []
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = new URL(String(input))
      requests.push(url)
      if (Number(url.searchParams.get("limit")) > 100) {
        return Response.json(
          { error: { message: "Invalid request: `limit` should be <= 100." } },
          { status: 400 }
        )
      }
      const data = url.pathname.endsWith("/count")
        ? { pageviews: 120, visitors: 90 }
        : url.searchParams.get("by") === "country"
          ? [
              { country: " nz ", pageviews: 40, visitors: 30 },
              { country: "US", pageviews: 80, visitors: 60 },
            ]
          : []
      return Response.json({ data })
    })
    const response = await GET(
      new Request("http://localhost/api/analytics?days=7")
    )
    const payload = await response.json()
    const countryRequest = requests.find(
      (url) => url.searchParams.get("by") === "country"
    )
    expect(countryRequest?.searchParams.get("limit")).toBe("100")
    expect(countryRequest?.searchParams.get("since")).toBe(payload.range.since)
    expect(countryRequest?.searchParams.get("until")).toBe(payload.range.until)
    expect(
      requests.every((url) => url.searchParams.get("teamId") === "test-team")
    ).toBe(true)
    expect(payload.countries.map(({ country }) => country)).toEqual([
      "US",
      "NZ",
    ])
    expect(payload.countries[1]).toMatchObject({
      name: "New Zealand",
      visitors: 30,
      pageviews: 40,
    })
    expect(payload.range.days).toBe(7)
  })

  test("summary only requests totals and does not depend on country queries", async () => {
    process.env.VERCEL_TOKEN = "test-token"
    process.env.VERCEL_PROJECT_ID = "test-project"
    const requests = []
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = new URL(String(input))
      requests.push(url)
      return url.pathname.endsWith("/count")
        ? Response.json({ data: { pageviews: 120, visitors: 90 } })
        : Response.json(
            { error: { message: "Aggregate query failed" } },
            { status: 400 }
          )
    })

    const response = await GET(
      new Request("http://localhost/api/analytics?scope=summary")
    )
    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({
      configured: true,
      total: 90,
      pageviews: 120,
    })
    expect(requests).toHaveLength(1)
    expect(requests[0].pathname).toEndWith("/visits/count")
  })

  test("upstream errors identify the failing dimension and Vercel's validation message", async () => {
    process.env.VERCEL_TOKEN = "test-token"
    process.env.VERCEL_PROJECT_ID = "test-project"
    fetchSpy = spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = new URL(String(input))
      return url.searchParams.get("by") === "country"
        ? Response.json(
            { error: { message: "Invalid country query" } },
            { status: 400 }
          )
        : Response.json({ data: url.pathname.endsWith("/count") ? {} : [] })
    })

    await expect(
      GET(new Request("http://localhost/api/analytics?days=30"))
    ).rejects.toThrow(
      "Vercel analytics visits/aggregate (country) failed with 400: Invalid country query"
    )
  })
})
