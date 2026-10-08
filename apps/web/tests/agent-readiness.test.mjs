import { describe, expect, test } from "bun:test"

import {
  getHomepageMarkdown,
  getLlmsText,
  getNotFoundMarkdown,
  getPersonJsonLd,
  indexableRoutes,
  siteUrl,
} from "../lib/agent-readiness.ts"

describe("agent-readable content", () => {
  test("homepage Markdown is nonempty and links agent resources", () => {
    const markdown = getHomepageMarkdown()

    expect(markdown).toContain("# nixblack")
    expect(markdown).toContain(`${siteUrl}/sitemap.xml`)
    expect(markdown).toContain(`${siteUrl}/llms.txt`)
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
