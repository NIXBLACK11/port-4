"use client"

import { MapPin } from "lucide-react"
import Image from "next/image"
import * as React from "react"
import type { IconType } from "react-icons"
import { FaGamepad } from "react-icons/fa"
import { FaGolang } from "react-icons/fa6"
import { GiMountains } from "react-icons/gi"
import { PiSoccerBall } from "react-icons/pi"
import {
  SiArduino,
  SiMeta,
  SiSolana,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si"

import {
  PortfolioShell,
  usePortfolioLanguage,
} from "@/components/portfolio/shell"
import {
  ExperienceRow,
  PageBlock,
  ProjectRow,
  RecommendationRow,
  SectionHeader,
} from "@/components/portfolio/sections"
import {
  experiences,
  principles,
  profile,
  projects,
  recommendations,
  shortcuts,
} from "@/lib/portfolio-data"

export default function Page() {
  return (
    <PortfolioShell>
      <HomeContent />
    </PortfolioShell>
  )
}

function HomeContent() {
  const { copy, language, t } = usePortfolioLanguage()

  return (
    <>
      <PageBlock className="pt-10 sm:pt-12">
        <div className="flex flex-col gap-7">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              <LocationHoverCard />
              <span className="text-border">/</span>
              <IndiaTime />
            </p>
            <h1 className="measure-text text-4xl font-medium leading-tight sm:text-5xl">
              {copy.home.heroName}
            </h1>
            <BioIntro intro={copy.home.intro} language={language} />
          </div>
          <GithubGraph />
        </div>
      </PageBlock>

      <PageBlock id="experience">
        <SectionHeader
          eyebrow={copy.home.workEyebrow}
          title={copy.home.workTitle}
        />
        <div>
          {experiences.map((experience) => (
            <ExperienceRow
              experience={experience}
              key={`${experience.company}-${experience.role}`}
            />
          ))}
        </div>
      </PageBlock>

      <PageBlock>
        <SectionHeader
          eyebrow={copy.home.selectedEyebrow}
          title={copy.home.selectedTitle}
          action={{ label: copy.home.more, href: "/projects" }}
        />
        <div>
          {projects.slice(0, 3).map((project) => (
            <ProjectRow project={project} key={project.title} />
          ))}
        </div>
      </PageBlock>

      <PageBlock>
        <SectionHeader
          eyebrow={copy.home.systemEyebrow}
          title={copy.home.systemTitle}
        />
        <div className="grid gap-3 sm:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <div
                className="line-solid rounded-lg border p-3"
                key={principle.title}
              >
                <Icon className="mb-6 size-4 text-muted-foreground" />
                <h3 className="text-sm font-medium">{t(principle.title)}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {t(principle.text)}
                </p>
              </div>
            )
          })}
        </div>
      </PageBlock>

      <PageBlock id="recommendation">
        <SectionHeader
          eyebrow={copy.home.recommendationEyebrow}
          title={copy.home.recommendationTitle}
        />
        <div>
          {recommendations.map((item) => (
            <RecommendationRow item={item} key={item.name} />
          ))}
        </div>
      </PageBlock>

      <PageBlock className="border-b-0">
        <SectionHeader
          eyebrow={copy.home.shortcutsEyebrow}
          title={copy.home.shortcutsTitle}
        />
        <div className="grid gap-2 sm:grid-cols-2">
          {shortcuts.map((shortcut) => (
            <div
              className="line-dotted flex items-center justify-between gap-3 border-b py-2 text-sm last:border-b-0 sm:last:border-b"
              key={shortcut.keys}
            >
              <span className="text-muted-foreground">
                {t(shortcut.label)}
              </span>
              <span className="kbd-mark">{shortcut.keys}</span>
            </div>
          ))}
        </div>
      </PageBlock>
    </>
  )
}

function BioIntro({
  intro,
  language,
}: {
  intro: string
  language: "en" | "hi" | "ja"
}) {
  if (language !== "en") {
    return (
      <div className="measure-text mt-5 max-w-2xl space-y-5 text-base leading-7 text-muted-foreground">
        {intro.split("\n\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    )
  }

  return (
    <div className="measure-text mt-5 max-w-2xl space-y-5 text-base leading-7 text-muted-foreground">
      <p>
        I started my development journey in 2019 by building an{" "}
        <InlineIcon icon={SiArduino}>Arduino</InlineIcon> project that sparked
        my passion for coding and led me to pursue a Bachelor&apos;s in Computer
        Science and Engineering. During my studies, I was fortunate to be
        selected by Major League Hacking, where I contributed to{" "}
        <InlineIcon icon={SiMeta}>Meta&apos;s</InlineIcon> research team on
        projects like LaserEncoder. Later, I joined Superteam India and founded
        Nixarcade, a decentralized gaming platform on{" "}
        <InlineIcon icon={SiSolana}>Solana</InlineIcon>.
      </p>

      <p>
        Currently, I&apos;m working as a Full Stack Developer, creating
        innovative, user-friendly software solutions. I love building
        applications that balance performance with great user experience, using{" "}
        <InlineIcon icon={FaGolang}>Golang</InlineIcon>,{" "}
        <InlineIcon icon={SiTypescript}>TypeScript</InlineIcon>, and{" "}
        <InlineIcon icon={SiWeb3Dotjs}>Web3</InlineIcon> to bring meaningful
        ideas to life.
      </p>

      <p>
        When I&apos;m not coding, you&apos;ll find me{" "}
        <InlineIcon icon={FaGamepad}>gaming</InlineIcon>, playing{" "}
        <InlineIcon icon={PiSoccerBall}>football</InlineIcon>, or{" "}
        <InlineIcon icon={GiMountains}>hiking</InlineIcon> outdoors.
      </p>
    </div>
  )
}

function InlineIcon({
  children,
  icon: Icon,
}: {
  children: React.ReactNode
  icon: IconType
}) {
  return (
    <span className="inline-flex translate-y-0.5 items-center gap-1 text-foreground">
      <Icon className="size-3.5 text-muted-foreground" aria-hidden="true" />
      <span>{children}</span>
    </span>
  )
}

function GithubGraph() {
  return (
    <div className="line-solid overflow-hidden rounded-lg border bg-background p-3">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-medium uppercase text-muted-foreground">
          GitHub activity
        </p>
        <a
          className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          href={profile.github}
          rel="noreferrer"
          target="_blank"
        >
          NIXBLACK11
        </a>
      </div>
      <div className="overflow-x-auto">
        {/* eslint-disable-next-line @next/next/no-img-element -- External SVG contribution chart. */}
        <img
          alt="GitHub contribution graph for NIXBLACK11"
          className="min-h-24 min-w-[620px] opacity-90 dark:invert"
          src="https://ghchart.rshah.org/NIXBLACK11"
        />
      </div>
    </div>
  )
}

function LocationHoverCard() {
  return (
    <span className="group/location relative inline-flex">
      <button
        type="button"
        className="rounded-md text-muted-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
      >
        {profile.location}
      </button>
      <span className="pointer-events-none absolute left-1/2 top-7 z-40 w-64 -translate-x-1/2 translate-y-1 rotate-[-8deg] rounded-lg border bg-popover p-2 text-popover-foreground opacity-0 shadow-xl transition-[opacity,transform] duration-200 group-hover/location:translate-y-0 group-hover/location:rotate-[-11deg] group-hover/location:opacity-100 group-focus-within/location:translate-y-0 group-focus-within/location:rotate-[-11deg] group-focus-within/location:opacity-100">
        <span className="relative block aspect-[4/3] overflow-hidden rounded-md bg-muted">
          <Image
            alt="Nainital hillside view"
            className="object-cover"
            fill
            sizes="256px"
            src="/nainital.jpg"
          />
        </span>
        <span className="mt-2 block text-xs leading-5 text-muted-foreground">
          Nainital sits at about 2,084m in the Kumaon hills. Lake air, sharp
          light, and mountain silence do most of the design work.
        </span>
      </span>
    </span>
  )
}

function IndiaTime() {
  const [time, setTime] = React.useState("")

  React.useEffect(() => {
    function updateTime() {
      setTime(
        new Intl.DateTimeFormat("en", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      )
    }

    updateTime()
    const interval = window.setInterval(updateTime, 30_000)

    return () => window.clearInterval(interval)
  }, [])

  return <span suppressHydrationWarning>{time || "IST"}</span>
}
