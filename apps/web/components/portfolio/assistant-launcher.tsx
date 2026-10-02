import {
  PiArrowSquareOut,
  PiChatTeardropText,
  PiOpenAiLogo,
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
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 mx-auto flex w-full max-w-3xl justify-end px-5 sm:bottom-6 sm:px-8 lg:w-1/2 lg:min-w-[680px] lg:px-4">
      <input
        id="portfolio-assistant-launcher"
        type="checkbox"
        className="peer sr-only"
      />
      <label
        htmlFor="portfolio-assistant-launcher"
        className="line-solid pointer-events-auto flex size-12 cursor-pointer items-center justify-center rounded-full border bg-background text-foreground shadow-lg transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        aria-label="Ask about this portfolio"
      >
        <PiChatTeardropText className="size-6" aria-hidden="true" />
      </label>
      <label
        htmlFor="portfolio-assistant-launcher"
        className="pointer-events-auto fixed inset-0 z-0 hidden cursor-default peer-checked:block"
        aria-label="Close assistant options"
      />
      <div className="line-solid pointer-events-auto absolute bottom-14 right-5 z-10 hidden w-[min(calc(100vw-2rem),18rem)] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-2xl peer-checked:block sm:right-8 lg:right-4">
        <div className="line-solid border-b px-3 py-2.5">
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
    </div>
  )
}
