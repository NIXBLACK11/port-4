import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import {
  agentKnownRoutes,
  getHomepageMarkdown,
  getNotFoundMarkdown,
} from "@/lib/agent-readiness"

function acceptsMarkdown(request: NextRequest) {
  return request.headers.get("accept")?.includes("text/markdown") ?? false
}

function markdownResponse(body: string, init: ResponseInit = {}) {
  const headers = new Headers(init.headers)
  headers.set("Content-Type", "text/markdown; charset=utf-8")
  headers.set("Vary", "Accept")

  return new Response(body, {
    ...init,
    headers,
  })
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/" && acceptsMarkdown(request)) {
    return markdownResponse(getHomepageMarkdown())
  }

  if (acceptsMarkdown(request) && !agentKnownRoutes.includes(pathname as never)) {
    return markdownResponse(getNotFoundMarkdown(pathname), { status: 404 })
  }

  const response = NextResponse.next()
  response.headers.append("Vary", "Accept")
  return response
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt)$).*)",
    "/llms.txt",
  ],
}
