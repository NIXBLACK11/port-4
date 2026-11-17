"use client"

import { useState } from "react"
import { PiArrowSquareOut, PiOpenAiLogo } from "react-icons/pi"
import { SiClaude, SiPerplexity } from "react-icons/si"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Shdr24 } from "@workspace/ui/components/shdr-24"

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
    name: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
    icon: SiPerplexity,
  },
] as const

export function AssistantLauncher({
  copy,
}: {
  copy: {
    ask: string
    close: string
    choose: string
  }
}) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 mx-auto flex w-full max-w-3xl justify-end px-5 sm:bottom-6 sm:px-8 lg:w-1/2 lg:min-w-[680px] lg:px-4">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className="line-solid pointer-events-auto flex size-14 cursor-pointer items-center justify-center rounded-full border bg-background text-foreground shadow-lg transition-[background-color,box-shadow,transform] hover:bg-muted hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none motion-safe:hover:scale-105"
          aria-label={open ? copy.close : copy.ask}
          onPointerEnter={() => setActive(true)}
          onPointerLeave={() => setActive(false)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        >
          <Shdr24
            size={56}
            state={open ? "speaking" : active ? "thinking" : "idle"}
            params={{ radius: 1.45, blocks: 48 }}
            maxDpr={1.5}
            pauseOffscreen
            className="pointer-events-none shrink-0"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="top"
          align="end"
          sideOffset={8}
          className="line-solid pointer-events-auto w-[min(calc(100vw-2rem),18rem)] overflow-hidden rounded-lg border bg-popover p-0 text-popover-foreground shadow-2xl"
        >
          <DropdownMenuGroup>
            <DropdownMenuLabel className="line-solid min-w-0 border-b px-3 py-2.5">
              <span className="block truncate text-sm font-medium">
                {copy.ask}
              </span>
              <span className="block truncate text-xs font-normal text-muted-foreground">
                {copy.choose}
              </span>
            </DropdownMenuLabel>
            <div className="p-1.5">
              {assistantLinks.map((assistant) => {
                const Icon = assistant.icon

                return (
                  <DropdownMenuItem
                    key={assistant.name}
                    className="flex h-10 items-center gap-2.5 rounded-md px-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none"
                    render={
                      <a
                        href={assistant.href}
                        target="_blank"
                        rel="noreferrer"
                      />
                    }
                  >
                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 flex-1 truncate">
                      {assistant.name}
                    </span>
                    <PiArrowSquareOut
                      className="size-3.5 shrink-0 opacity-65"
                      aria-hidden="true"
                    />
                  </DropdownMenuItem>
                )
              })}
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
