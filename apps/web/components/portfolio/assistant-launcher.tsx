import {
  PiArrowSquareOut,
  PiChatTeardropText,
  PiOpenAiLogo,
  PiSparkle,
} from "react-icons/pi"
import {
  SiClaude,
  SiGooglegemini,
  SiPerplexity,
} from "react-icons/si"

const portfolioPrompt =
  "You are helping me understand Siddharth Singh Rana's portfolio. Review https://nixblack.com and answer questions about his projects, writing, education, contact information, and experience."

const encodedPrompt = encodeURIComponent(portfolioPrompt)

const assistantLinks = [
  {
    name: "ChatGPT",
    href: `https://chatgpt.com/?q=${encodedPrompt}`,
    icon: PiOpenAiLogo,
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${encodedPrompt}`,
    icon: SiClaude,
  },
  {
    name: "Gemini",
    href: `https://gemini.google.com/app?prompt=${encodedPrompt}`,
    icon: SiGooglegemini,
  },
  {
    name: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
    icon: SiPerplexity,
  },
] as const

export function AssistantLauncher() {
  return (
    <details className="group fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <summary
        className="line-solid flex size-12 cursor-pointer list-none items-center justify-center rounded-full border bg-foreground text-background shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden"
        aria-label="Ask about this portfolio"
      >
        <PiChatTeardropText className="size-6" aria-hidden="true" />
      </summary>
      <div className="line-solid absolute bottom-14 right-0 w-[min(calc(100vw-2rem),18rem)] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-2xl">
        <div className="line-solid flex items-center gap-2 border-b px-3 py-2.5">
          <span className="flex size-7 items-center justify-center rounded-md bg-muted text-foreground">
            <PiSparkle className="size-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">
              Ask about this portfolio
            </p>
            <p className="truncate text-xs text-muted-foreground">
              Choose your assistant
            </p>
          </div>
        </div>
        <div className="p-1.5">
          {assistantLinks.map((assistant) => {
            const Icon = assistant.icon

            return (
              <a
                key={assistant.name}
                className="flex h-10 items-center gap-2.5 rounded-md px-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none"
                href={assistant.href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate">
                  {assistant.name}
                </span>
                <PiArrowSquareOut
                  className="size-3.5 shrink-0 opacity-65"
                  aria-hidden="true"
                />
              </a>
            )
          })}
        </div>
      </div>
    </details>
  )
}
