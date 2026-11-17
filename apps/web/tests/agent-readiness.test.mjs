import { describe, expect, test } from "bun:test"

import {
  fullPortfolioUrl,
  getHomepageMarkdown,
  getLlmsText,
  getNotFoundMarkdown,
  getPersonJsonLd,
  indexableRoutes,
  portfolioAssistantPrompt,
  siteUrl,
} from "../lib/agent-readiness.ts"
import { GET as getFullPortfolio } from "../app/llms-full.txt/route.ts"

describe("agent-readable content", () => {
  test("homepage Markdown is nonempty and links agent resources", () => {
    const markdown = getHomepageMarkdown()

    expect(markdown).toContain("# nixblack")
    expect(markdown).toContain(`${siteUrl}/sitemap.xml`)
    expect(markdown).toContain(`${siteUrl}/llms.txt`)
    expect(markdown).toContain(fullPortfolioUrl)
    expect(markdown.length).toBeGreaterThan(20)
  })

  test("Markdown 404 explains the error and links recovery resources", () => {
    const markdown = getNotFoundMarkdown("/missing")

    expect(markdown).toContain("# 404 Not Found")
    expect(markdown).toContain("/missing")
    expect(markdown).toContain(`${siteUrl}/sitemap.xml`)
    expect(markdown.length).toBeGreaterThan(20)
  })

  test("llms.txt includes specific when-to-use guidance", () => {
    const llmsText = getLlmsText()

    expect(llmsText).toContain("## When to use this")
    expect(llmsText).toContain("full-stack engineering")
    expect(llmsText).toContain("Solana/Web3")
    expect(llmsText).toContain(fullPortfolioUrl)
  })

  test("full portfolio is readable without special request headers", async () => {
    const response = getFullPortfolio()
    const content = await response.text()

    expect(response.status).toBe(200)
    expect(response.headers.get("content-type")).toBe(
      "text/plain; charset=utf-8"
    )
    expect(content).toContain("Founding Engineer at Stealth Startup")
    expect(content).toContain("May 2026 — Present")
    expect(content).toContain("Full Stack Engineer at Lokal")
    expect(content).toContain("Founder & Full Stack Engineer at Amatra")
    expect(content).toContain("### CrowdVault")
    expect(content).toContain("### The Feedback Loop")
    expect(content).toContain("### gRPC")
    expect(content).toContain(
      "Bachelor of Technology in Computer Science and Engineering"
    )
    expect(content).toContain("Graphic Era Hill University")
    expect(content).toContain("2021 — 2025")
    expect(content).toContain("mailto:siddharthsinghrana11@gmail.com")
    expect(content).toContain("https://github.com/NIXBLACK11")
    expect(content).toContain("### Kevin Heffernan")
  })

  test("assistant prompt directs readers to the complete source", () => {
    expect(portfolioAssistantPrompt).toContain(`Read ${fullPortfolioUrl} first`)
    expect(portfolioAssistantPrompt).toContain(
      "If you cannot access it, say so"
    )
  })

  test("JSON-LD describes the site owner as a Person", () => {
    const jsonLd = getPersonJsonLd()

    expect(jsonLd["@context"]).toBe("https://schema.org")
    expect(jsonLd["@type"]).toBe("Person")
    expect(jsonLd.name).toBe("Siddharth Singh Rana")
    expect(jsonLd.url).toBe(siteUrl)
    expect(jsonLd.sameAs).toContain("https://github.com/NIXBLACK11")
  })

  test("sitemap routes include every public page path", () => {
    expect(indexableRoutes).toEqual([
      "/",
      "/projects",
      "/writing",
      "/education",
      "/contact",
      "/analytics",
    ])
  })
})
