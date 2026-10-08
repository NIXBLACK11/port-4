import type { MetadataRoute } from "next"

import { indexableRoutes, siteUrl } from "@/lib/agent-readiness"

const lastModified = new Date("2026-10-08T00:00:00.000Z")

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }))
}
