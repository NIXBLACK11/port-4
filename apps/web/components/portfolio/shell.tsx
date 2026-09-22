"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import * as React from "react"
import {
  Activity,
  Command,
  CornerDownLeft,
  Languages,
  Moon,
  Search,
  Sun,
  SunMoon,
  Users,
} from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { useVisitorStats } from "@/app/contact/hooks"
import { dataPhraseTranslations } from "@/lib/data-translations"
import {
  navItems,
  profile,
  searchItems,
} from "@/lib/portfolio-data"

type LanguageCode = "en" | "hi" | "ja"

type PortfolioCopy = {
  nav: Record<string, string>
  search: string
  searchShort: string
  footer: string
  noResults: string
  staticIndex: string
  result: string
  results: string
  open: string
  closeDetails: string
  pages: {
    projectsEyebrow: string
    projectsTitle: string
    projectsText: string
    projectsArchiveEyebrow: string
    projectsArchiveTitle: string
    writingEyebrow: string
    writingTitle: string
    writingText: string
    writingIndexEyebrow: string
    writingIndexTitle: string
    educationEyebrow: string
    educationTitle: string
    educationText: string
    educationListEyebrow: string
    educationListTitle: string
  }
  theme: Record<"system" | "light" | "dark", string>
  language: string
  home: {
    heroName: string
    intro: string
    seeProjects: string
    workEyebrow: string
    workTitle: string
    selectedEyebrow: string
    selectedTitle: string
    more: string
    systemEyebrow: string
    systemTitle: string
    recommendationEyebrow: string
    recommendationTitle: string
    contactEyebrow: string
    contactTitle: string
    contactText: string
    shortcutsEyebrow: string
    shortcutsTitle: string
  }
}

const portfolioCopy: Record<LanguageCode, PortfolioCopy> = {
  en: {
    nav: {
      Home: "Home",
      Projects: "Projects",
      Writing: "Writing",
      Education: "Education",
      Contact: "Contact",
    },
    search: "Search",
    searchShort: "Search Siddharth's projects, experience, and notes...",
    footer: "Built by Siddharth Singh Rana with Next.js, TypeScript, and real portfolio data.",
    noResults: "No matching portfolio entry yet.",
    staticIndex: "Portfolio index",
    result: "result",
    results: "results",
    open: "Open",
    closeDetails: "Close details",
    pages: {
      projectsEyebrow: "Projects",
      projectsTitle: "Products, research, and experiments shipped across web, AI, and Solana.",
      projectsText:
        "A collection of real work: funded Solana products, AI tools, developer utilities, and early experiments that shaped how I build.",
      projectsArchiveEyebrow: "Portfolio",
      projectsArchiveTitle: "All projects",
      writingEyebrow: "Writing",
      writingTitle: "Notes from building backend systems, interfaces, and developer tools.",
      writingText:
        "Engineering notes from the tools I use in production, including Go, TypeScript, gRPC, and distributed application patterns.",
      writingIndexEyebrow: "Index",
      writingIndexTitle: "All notes",
      educationEyebrow: "Education",
      educationTitle: "Computer science, research practice, and the base I build from.",
      educationText:
        "My academic path from St. Joseph's College in Nainital to a B.Tech in Computer Science and Engineering at Graphic Era Hill University.",
      educationListEyebrow: "Background",
      educationListTitle: "Education",
    },
    theme: {
      system: "System",
      light: "Light",
      dark: "Dark",
    },
    language: "Language",
    home: {
      heroName: profile.name,
      intro: profile.intro,
      seeProjects: "See projects",
      workEyebrow: "Work",
      workTitle: "Experience",
      selectedEyebrow: "Selected",
      selectedTitle: "Recent projects",
      more: "More",
      systemEyebrow: "Focus",
      systemTitle: "What I keep coming back to",
      recommendationEyebrow: "Recommendation",
      recommendationTitle: "A note from Meta",
      contactEyebrow: "Contact",
      contactTitle: "Have something in mind?",
      contactText:
        "If you're building software across web, AI, backend systems, or Web3, I'd love to hear what you're working on.",
      shortcutsEyebrow: "Shortcuts",
      shortcutsTitle: "Fast paths",
    },
  },
  hi: {
    nav: {
      Home: "Home",
      Projects: "Projects",
      Writing: "Writing",
      Education: "Education",
      Contact: "Contact",
    },
    search: "Search",
    searchShort: "Siddharth ke projects, experience, aur notes search karein...",
    footer: "Siddharth Singh Rana ne Next.js, TypeScript, aur real portfolio data ke saath build kiya.",
    noResults: "Abhi matching portfolio entry nahi mili.",
    staticIndex: "Portfolio index",
    result: "result",
    results: "results",
    open: "Open",
    closeDetails: "Details close karein",
    pages: {
      projectsEyebrow: "Projects",
      projectsTitle: "Web, AI, aur Solana par ship kiye gaye products, research, aur experiments.",
      projectsText:
        "Real work ka collection: funded Solana products, AI tools, developer utilities, aur early experiments jinhone meri building style shape ki.",
      projectsArchiveEyebrow: "Portfolio",
      projectsArchiveTitle: "Saare projects",
      writingEyebrow: "Writing",
      writingTitle: "Backend systems, interfaces, aur developer tools build karne se notes.",
      writingText:
        "Production mein use hone wale tools par engineering notes, including Go, TypeScript, gRPC, aur distributed application patterns.",
      writingIndexEyebrow: "Index",
      writingIndexTitle: "Saare notes",
      educationEyebrow: "Education",
      educationTitle: "Computer science, research practice, aur woh base jisse main build karta hoon.",
      educationText:
        "Mera academic path St. Joseph's College, Nainital se Graphic Era Hill University mein B.Tech Computer Science and Engineering tak.",
      educationListEyebrow: "Background",
      educationListTitle: "Education",
    },
    theme: {
      system: "System",
      light: "Light",
      dark: "Dark",
    },
    language: "Language",
    home: {
      heroName: profile.name,
      intro:
        "Maine apni development journey 2019 mein ek Arduino project se shuru ki, jisne coding ke liye meri curiosity ko serious passion bana diya. Isi interest ne mujhe Computer Science and Engineering pursue karne tak le gaya. College ke dauran mujhe Major League Hacking ke liye select hone ka chance mila, jahan maine Meta ke research team ke saath LaserEncoder jaise projects par contribute kiya. Baad mein main Superteam India se juda aur Nixarcade start kiya, Solana par ek decentralized gaming platform.\n\nAbhi main Full Stack Developer ke roop mein kaam kar raha hoon, useful aur user-friendly software solutions build karte hue. Mujhe aise applications banana pasand hai jo performance aur great user experience ka balance rakhein, Golang, TypeScript, aur Web3 ke saath meaningful ideas ko life mein laate hue.\n\nCoding ke alawa, main gaming, football, ya outdoors hiking karta milunga.",
      seeProjects: "Projects dekhein",
      workEyebrow: "Work",
      workTitle: "Experience",
      selectedEyebrow: "Selected",
      selectedTitle: "Recent projects",
      more: "More",
      systemEyebrow: "Focus",
      systemTitle: "Jin cheezon par main baar-baar aata hoon",
      recommendationEyebrow: "Recommendation",
      recommendationTitle: "Meta se ek note",
      contactEyebrow: "Contact",
      contactTitle: "Kuch build karna hai?",
      contactText:
        "Agar aap web, AI, backend systems, ya Web3 mein software build kar rahe hain, toh mujhe sunna accha lagega.",
      shortcutsEyebrow: "Shortcuts",
      shortcutsTitle: "Fast paths",
    },
  },
  ja: {
    nav: {
      Home: "Home",
      Projects: "Projects",
      Writing: "Writing",
      Education: "Education",
      Contact: "Contact",
    },
    search: "Search",
    searchShort: "Siddharth のプロジェクト、経験、ノートを検索...",
    footer: "Siddharth Singh Rana が Next.js、TypeScript、実際のポートフォリオデータで構築。",
    noResults: "一致するポートフォリオ項目はまだありません。",
    staticIndex: "Portfolio index",
    result: "result",
    results: "results",
    open: "Open",
    closeDetails: "詳細を閉じる",
    pages: {
      projectsEyebrow: "Projects",
      projectsTitle: "Web、AI、Solana で公開してきたプロダクト、研究、実験。",
      projectsText:
        "資金調達を受けた Solana プロダクト、AI ツール、開発者向けユーティリティ、初期の実験をまとめた実際の仕事の一覧です。",
      projectsArchiveEyebrow: "Portfolio",
      projectsArchiveTitle: "All projects",
      writingEyebrow: "Writing",
      writingTitle: "バックエンドシステム、インターフェース、開発者ツールを作る中でのノート。",
      writingText:
        "Go、TypeScript、gRPC、分散アプリケーションのパターンなど、実際に使っている技術についての短いメモです。",
      writingIndexEyebrow: "Index",
      writingIndexTitle: "All notes",
      educationEyebrow: "Education",
      educationTitle: "コンピューターサイエンス、研究経験、ものづくりの土台。",
      educationText:
        "Nainital の St. Joseph's College から Graphic Era Hill University の Computer Science and Engineering までの学歴です。",
      educationListEyebrow: "Background",
      educationListTitle: "Education",
    },
    theme: {
      system: "System",
      light: "Light",
      dark: "Dark",
    },
    language: "Language",
    home: {
      heroName: profile.name,
      intro:
        "開発の旅は2019年、Arduinoプロジェクトを作ったことから始まりました。その体験がコーディングへの情熱につながり、Computer Science and Engineering を学ぶきっかけになりました。学生時代には Major League Hacking に選ばれ、Meta の研究チームで LaserEncoder などのプロジェクトに貢献しました。その後 Superteam India に参加し、Solana 上の分散型ゲームプラットフォーム Nixarcade を立ち上げました。\n\n現在は Full Stack Developer として、実用的で使いやすいソフトウェアを作っています。Golang、TypeScript、Web3 を使い、性能と良いユーザー体験のバランスを大切にしたアプリケーションを作るのが好きです。\n\nコードを書いていない時は、ゲーム、フットボール、ハイキングをしています。",
      seeProjects: "Projects",
      workEyebrow: "Work",
      workTitle: "Experience",
      selectedEyebrow: "Selected",
      selectedTitle: "Recent projects",
      more: "More",
      systemEyebrow: "Focus",
      systemTitle: "繰り返し大切にしていること",
      recommendationEyebrow: "Recommendation",
      recommendationTitle: "A note from Meta",
      contactEyebrow: "Contact",
      contactTitle: "Have something in mind?",
      contactText:
        "Web、AI、バックエンド、Web3 の領域でソフトウェアを作っているなら、ぜひ話を聞かせてください。",
      shortcutsEyebrow: "Shortcuts",
      shortcutsTitle: "Fast paths",
    },
  },
}

const languageLabels: Record<LanguageCode, string> = {
  en: "EN",
  hi: "HI",
  ja: "JA",
}

const phraseTranslations: Record<Exclude<LanguageCode, "en">, Record<string, string>> = {
  hi: {
    "Full Stack Engineer & Founder": "Full Stack Engineer & Founder",
    "Remote, India": "Remote, India",
    "Full-stack ownership": "Full-stack ownership",
    "I build across product surfaces, Go and TypeScript backends, mobile apps, dashboards, and deployment workflows.":
      "Main product surfaces, Go aur TypeScript backends, mobile apps, dashboards, aur deployment workflows across build karta hoon.",
    "AI and systems": "AI aur systems",
    "I work on AI chat, data workflows, image generation, multilingual ML, and practical tools that make systems easier to use.":
      "Main AI chat, data workflows, image generation, multilingual ML, aur systems ko easy banane wale practical tools par kaam karta hoon.",
    "Web3 products": "Web3 products",
    "I have shipped Solana products including Nixarcade, CrowdVault, Chain Poll, NixPay, and NFT marketplace experiments.":
      "Maine Nixarcade, CrowdVault, Chain Poll, NixPay, aur NFT marketplace experiments jaise Solana products ship kiye hain.",
    "Toggle theme": "Theme badlein",
    "Open search": "Search kholein",
    "Go home": "Home jaayein",
    Projects: "Projects",
    Writing: "Writing",
    Education: "Education",
    Contact: "Contact",
    Email: "Email",
    GitHub: "GitHub",
    Colophon: "Colophon",
    Live: "Live",
    Draft: "Draft",
    Shipped: "Shipped",
    Note: "Note",
    Page: "Page",
    Project: "Project",
    Experience: "Experience",
    Recommendation: "Recommendation",
    Meta: "Meta",
    "A note from Meta": "Meta se ek note",
    "Schools, degree, and background.": "Schools, degree, aur background.",
    "Explore shipped products, AI tools, Solana apps, and developer utilities.":
      "Shipped products, AI tools, Solana apps, aur developer utilities explore karein.",
    "Read notes about Go, TypeScript, gRPC, and backend engineering.":
      "Go, TypeScript, gRPC, aur backend engineering par notes padhein.",
  },
  ja: {
    "Full Stack Engineer & Founder": "Full Stack Engineer & Founder",
    "Remote, India": "Remote, India",
    "Full-stack ownership": "Full-stack ownership",
    "I build across product surfaces, Go and TypeScript backends, mobile apps, dashboards, and deployment workflows.":
      "プロダクト画面、Go と TypeScript のバックエンド、モバイルアプリ、ダッシュボード、デプロイまで幅広く構築します。",
    "AI and systems": "AI and systems",
    "I work on AI chat, data workflows, image generation, multilingual ML, and practical tools that make systems easier to use.":
      "AI チャット、データワークフロー、画像生成、多言語 ML、システムを使いやすくする実用的なツールに取り組んでいます。",
    "Web3 products": "Web3 products",
    "I have shipped Solana products including Nixarcade, CrowdVault, Chain Poll, NixPay, and NFT marketplace experiments.":
      "Nixarcade、CrowdVault、Chain Poll、NixPay、NFT マーケットプレイス実験などの Solana プロダクトを公開してきました。",
    "Toggle theme": "テーマ切替",
    "Open search": "検索を開く",
    "Go home": "ホームへ",
    Projects: "Projects",
    Writing: "Writing",
    Education: "Education",
    Contact: "Contact",
    Email: "Email",
    GitHub: "GitHub",
    Colophon: "Colophon",
    Live: "Live",
    Draft: "Draft",
    Shipped: "Shipped",
    Note: "Note",
    Page: "Page",
    Project: "Project",
    Experience: "Experience",
    Recommendation: "Recommendation",
    Meta: "Meta",
    "A note from Meta": "Meta からのコメント",
    "Schools, degree, and background.": "学校、学位、背景。",
    "Explore shipped products, AI tools, Solana apps, and developer utilities.":
      "公開したプロダクト、AI ツール、Solana アプリ、開発者向けユーティリティを見る。",
    "Read notes about Go, TypeScript, gRPC, and backend engineering.":
      "Go、TypeScript、gRPC、バックエンドエンジニアリングについてのノートを読む。",
  },
}

const PortfolioLanguageContext = React.createContext<{
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  copy: PortfolioCopy
  t: (value: string) => string
} | null>(null)

export function usePortfolioLanguage() {
  const context = React.useContext(PortfolioLanguageContext)

  if (!context) {
    throw new Error("usePortfolioLanguage must be used inside PortfolioShell")
  }

  return context
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [pendingG, setPendingG] = React.useState(false)
  const [language, setLanguageState] = React.useState<LanguageCode>(() => {
    if (typeof window === "undefined") {
      return "en"
    }

    const savedLanguage = window.localStorage.getItem("portfolio-language")

    if (
      savedLanguage === "en" ||
      savedLanguage === "hi" ||
      savedLanguage === "ja"
    ) {
      return savedLanguage
    }

    return "en"
  })
  const copy = portfolioCopy[language]

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat || isTypingTarget(event.target)) {
        return
      }

      const key = event.key.toLowerCase()

      if ((event.metaKey || event.ctrlKey) && key === "k") {
        event.preventDefault()
        setSearchOpen(true)
        return
      }

      if (!event.metaKey && !event.ctrlKey && !event.altKey && key === "/") {
        event.preventDefault()
        setSearchOpen(true)
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (pendingG) {
        setPendingG(false)

        if (key === "h") {
          router.push("/")
        }

        if (key === "p") {
          router.push("/projects")
        }

        if (key === "w") {
          router.push("/writing")
        }

        if (key === "e") {
          router.push("/education")
        }

        if (key === "c") {
          router.push("/contact")
        }

        return
      }

      if (key === "g") {
        setPendingG(true)
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [pendingG, router])

  React.useEffect(() => {
    if (!pendingG) {
      return
    }

    const timeout = window.setTimeout(() => setPendingG(false), 900)

    return () => window.clearTimeout(timeout)
  }, [pendingG])

  React.useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  function setLanguage(nextLanguage: LanguageCode) {
    setLanguageState(nextLanguage)
    window.localStorage.setItem("portfolio-language", nextLanguage)
  }

  function t(value: string) {
    if (language === "en") {
    return value
  }

    return (
      phraseTranslations[language][value] ??
      dataPhraseTranslations[language][value] ??
      value
    )
  }

  return (
    <PortfolioLanguageContext.Provider value={{ language, setLanguage, copy, t }}>
    <div className="min-h-svh bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col px-0 pb-0 sm:px-6 lg:w-1/2 lg:min-w-[680px] lg:px-0">
        <header className="line-solid sticky top-0 z-30 bg-background/92 px-3 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:mx-0 lg:border-x">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex min-w-0 items-center gap-2.5">
              <span className="line-solid relative size-8 shrink-0 overflow-hidden rounded-full border bg-muted">
                <Image
                  alt=""
                  className="object-cover"
                  fill
                  sizes="32px"
                  src={profile.avatar}
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">
                  {profile.brand}
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  {profile.role}
                </span>
              </span>
            </Link>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="line-solid hidden h-8 items-center gap-1.5 rounded-lg border bg-background px-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="size-3.5" />
                {copy.search}
                <span className="kbd-mark ml-1">⌘K</span>
              </button>
              <button
                type="button"
                className="line-solid flex size-8 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:hidden"
                aria-label="Open search"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="size-3.5" />
              </button>
              <LanguageSwitch />
              <ThemeSwitch />
            </div>
          </div>
          <nav className="mt-3 flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = pathname === item.href
              const label = copy.nav[item.label] ?? item.label

              return (
                <Link
                  key={item.href}
                  className={cn(
                    "line-solid group/nav grid h-8 shrink-0 grid-cols-[2rem_0fr] items-center overflow-hidden rounded-lg border bg-background text-xs text-muted-foreground transition-[grid-template-columns,background-color,color,border-color] duration-300 ease-out hover:grid-cols-[2rem_1fr] hover:bg-muted hover:text-foreground focus-visible:grid-cols-[2rem_1fr] focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                    active
                      ? "grid-cols-[2rem_1fr] border-border bg-secondary text-foreground"
                      : ""
                  )}
                  data-active={active}
                  aria-label={label}
                  href={item.href}
                >
                  <span className="flex size-8 shrink-0 items-center justify-center">
                    <Icon className="size-3.5 transition-transform duration-300 group-hover/nav:scale-95" />
                  </span>
                  <span
                    className={cn(
                      "min-w-0 overflow-hidden whitespace-nowrap pr-0 opacity-0 transition-[opacity,transform,padding] duration-200 ease-out group-hover/nav:translate-x-0 group-hover/nav:pr-2 group-hover/nav:opacity-100 group-focus-visible/nav:translate-x-0 group-focus-visible/nav:pr-2 group-focus-visible/nav:opacity-100",
                      active
                        ? "translate-x-0 pr-2 opacity-100"
                        : "-translate-x-1"
                    )}
                  >
                    {label}
                  </span>
                </Link>
              )
            })}
          </nav>
        </header>
        <main className="line-solid lg:border-x">{children}</main>
        <footer className="line-solid lg:border-x">
          <div className="line-dotted border-t px-3 py-4 text-xs text-muted-foreground sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p>{copy.footer}</p>
              <FooterStats />
            </div>
          </div>
          <div
            className="flex h-11 justify-center overflow-hidden px-3 sm:h-16 sm:px-6"
            aria-label="Nix Black"
          >
            <p className="select-none text-center text-[4rem] font-medium leading-none text-muted-foreground/20 sm:text-[6rem]">
              nixblack
            </p>
          </div>
        </footer>
      </div>
      {searchOpen ? <SearchDialog onOpenChange={setSearchOpen} /> : null}
    </div>
    </PortfolioLanguageContext.Provider>
  )
}

function FooterStats() {
  const { data: stats } = useVisitorStats()

  return (
    <div className="flex flex-wrap items-center gap-3 text-[11px]">
      <span className="inline-flex items-center gap-1.5">
        <Users className="size-3" />
        {formatCompactStat(stats?.total)} total
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-55" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        <Activity className="size-3" />
        {formatCompactStat(stats?.live)} online
      </span>
    </div>
  )
}

function formatCompactStat(value: number | undefined) {
  if (typeof value !== "number") {
    return "--"
  }

  return new Intl.NumberFormat("en", {
    notation: value >= 10_000 ? "compact" : "standard",
  }).format(value)
}

function LanguageSwitch() {
  const { language, setLanguage, copy } = usePortfolioLanguage()
  const [open, setOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        className="line-solid flex h-8 items-center gap-1.5 rounded-lg border bg-background px-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-expanded={open}
        aria-label={copy.language}
        onClick={() => setOpen((current) => !current)}
      >
        <Languages className="size-3.5" />
        {languageLabels[language]}
      </button>
      {open ? (
        <div className="line-solid absolute right-0 top-10 z-50 min-w-28 rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg">
          {(Object.keys(languageLabels) as LanguageCode[]).map((item) => (
            <button
              className={cn(
                "flex h-8 w-full items-center justify-between rounded-md px-2 text-left text-xs transition-colors hover:bg-muted",
                language === item && "bg-muted text-foreground"
              )}
              key={item}
              type="button"
              onClick={() => {
                setLanguage(item)
                setOpen(false)
              }}
            >
              <span>{languageLabels[item]}</span>
              <span className="text-muted-foreground">
                {item.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function ThemeSwitch() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const { copy } = usePortfolioLanguage()
  const mounted = React.useSyncExternalStore(
    React.useCallback(() => () => {}, []),
    () => true,
    () => false
  )
  const selectedTheme = theme === "light" || theme === "dark" ? theme : "system"
  const displayTheme = mounted ? selectedTheme : "system"
  const dark = mounted && resolvedTheme === "dark"

  function cycleTheme() {
    if (selectedTheme === "system") {
      setTheme("light")
      return
    }

    if (selectedTheme === "light") {
      setTheme("dark")
      return
    }

    setTheme("system")
  }

  return (
    <button
      type="button"
      className="line-solid flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-lg border bg-background px-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label="Toggle theme"
      title={copy.theme[displayTheme]}
      onClick={cycleTheme}
    >
      {displayTheme === "system" ? (
        <SunMoon className="size-3.5" />
      ) : dark ? (
        <Moon className="size-3.5" />
      ) : (
        <Sun className="size-3.5" />
      )}
    </button>
  )
}

function SearchDialog({
  onOpenChange,
}: {
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()
  const { copy, t } = usePortfolioLanguage()
  const [query, setQuery] = React.useState("")
  const [activeIndex, setActiveIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const resultRefs = React.useRef<Array<HTMLButtonElement | null>>([])

  const results = React.useMemo(() => {
    const needle = query.trim().toLowerCase()

    if (!needle) {
      return searchItems
    }

    return searchItems.filter((item) =>
      [t(item.title), t(item.eyebrow), t(item.description)]
        .join(" ")
        .toLowerCase()
        .includes(needle)
    )
  }, [query, t])
  const selectedIndex =
    results.length > 0 ? Math.min(activeIndex, results.length - 1) : 0
  const selectedResult = results[selectedIndex]

  React.useEffect(() => {
    resultRefs.current[selectedIndex]?.scrollIntoView({
      block: "nearest",
    })
  }, [selectedIndex])

  React.useEffect(() => {
    const timeout = window.setTimeout(() => inputRef.current?.focus(), 0)

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [onOpenChange])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-background/70 px-4 pt-[15vh] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onMouseDown={() => onOpenChange(false)}
    >
      <div
        className="line-solid w-full max-w-xl rounded-lg border bg-popover text-popover-foreground shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="line-solid flex items-center gap-2 border-b px-3 py-2">
          <Search className="size-4 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setActiveIndex(0)
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault()
                setActiveIndex((current) =>
                  results.length > 0 ? (current + 1) % results.length : 0
                )
                return
              }

              if (event.key === "ArrowUp") {
                event.preventDefault()
                setActiveIndex((current) =>
                  results.length > 0
                    ? (current - 1 + results.length) % results.length
                    : 0
                )
                return
              }

              if (event.key === "Enter" && selectedResult) {
                event.preventDefault()
                onOpenChange(false)
                router.push(selectedResult.href)
              }
            }}
            className="h-9 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            placeholder={copy.searchShort}
          />
          <span className="kbd-mark">Esc</span>
        </div>
        <div className="max-h-[56svh] overflow-y-auto p-2">
          {results.length > 0 ? (
            results.map((item, index) => {
              const Icon = item.icon
              const active = index === selectedIndex

              return (
                <button
                  ref={(node) => {
                    resultRefs.current[index] = node
                  }}
                  className={cn(
                    "line-dotted flex w-full items-start gap-3 rounded-md border-b px-2 py-3 text-left transition-colors last:border-b-0",
                    "hover:bg-muted focus-visible:bg-muted focus-visible:outline-none",
                    active && "bg-muted"
                  )}
                  key={`${item.href}-${item.title}`}
                  type="button"
                  aria-selected={active}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => {
                    onOpenChange(false)
                    router.push(item.href)
                  }}
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border bg-background">
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="truncate text-sm font-medium">
                        {t(item.title)}
                      </span>
                      <span className="shrink-0 text-[11px] text-muted-foreground">
                        {t(item.eyebrow)}
                      </span>
                    </span>
                    <span className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">
                      {t(item.description)}
                    </span>
                  </span>
                  <CornerDownLeft className="mt-1 size-3.5 text-muted-foreground" />
                </button>
              )
            })
          ) : (
            <div className="px-3 py-10 text-center text-sm text-muted-foreground">
              {copy.noResults}
            </div>
          )}
        </div>
        <div className="line-solid flex items-center justify-between border-t px-3 py-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Command className="size-3" />
            {copy.staticIndex}
          </span>
          <span>
            {results.length} {results.length === 1 ? copy.result : copy.results}
          </span>
        </div>
      </div>
    </div>
  )
}
