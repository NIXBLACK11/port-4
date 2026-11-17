import { getFullPortfolioMarkdown } from "@/lib/portfolio-markdown"

export const dynamic = "force-static"

export function GET() {
  return new Response(getFullPortfolioMarkdown(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
