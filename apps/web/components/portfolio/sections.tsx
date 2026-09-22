"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { ArrowUpRight, ExternalLink, X } from "lucide-react"

import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { usePortfolioLanguage } from "@/components/portfolio/shell"
import type {
  Education,
  Experience,
  Project,
  Recommendation,
  Writing,
} from "@/lib/portfolio-data"

export function PageBlock({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      className={cn("line-solid border-b px-4 py-8 sm:px-6", className)}
      id={id}
    >
      {children}
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string
  title: string
  action?: { label: string; href: string }
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-xl font-medium tracking-normal sm:text-2xl">
          {title}
        </h2>
      </div>
      {action ? (
        <Link
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "shrink-0"
          )}
          href={action.href}
        >
          {action.label}
          <ArrowUpRight />
        </Link>
      ) : null}
    </div>
  )
}

export function ProjectRow({
  project,
  detailed = false,
}: {
  project: Project
  detailed?: boolean
}) {
  const [open, setOpen] = React.useState(false)
  const { t } = usePortfolioLanguage()

  return (
    <article
      id={slugify(project.title)}
      className="line-dotted border-b py-4 last:border-b-0"
    >
      <button
        className="group block w-full text-left"
        type="button"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h3 className="font-medium group-hover:underline">
                {t(project.title)}
              </h3>
              <span className="text-xs text-muted-foreground">
                {t(project.year)}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {t(project.summary)}
            </p>
          </div>
          <span className="line-solid shrink-0 rounded-md border px-2 py-1 text-xs text-muted-foreground">
            {t(project.status)}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span
              className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
              key={item}
            >
              {t(item)}
            </span>
          ))}
        </div>
        {detailed ? (
          <div className="mt-4 grid gap-3 text-xs leading-5 text-muted-foreground sm:grid-cols-3">
            {project.details.slice(0, 3).map((detail) => (
              <p className="line-dotted border-t pt-3" key={detail}>
                {t(detail)}
              </p>
            ))}
          </div>
        ) : null}
      </button>
      {open ? (
        <DetailModal
          details={project.details}
          eyebrow={`${t("Project")} · ${t(project.year)}`}
          externalHref={project.externalHref}
          image={project.image}
          stack={project.stack}
          title={t(project.title)}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </article>
  )
}

export function WritingRow({
  post,
  detailed = false,
}: {
  post: Writing
  detailed?: boolean
}) {
  const [open, setOpen] = React.useState(false)
  const { t } = usePortfolioLanguage()

  return (
    <article id={slugify(post.title)} className="line-dotted border-b py-4 last:border-b-0">
      <button
        className="group block w-full text-left"
        type="button"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-medium group-hover:underline">
              {t(post.title)}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {t(post.summary)}
            </p>
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">
            {t(post.date)}
          </span>
        </div>
        {detailed ? (
          <div className="mt-4 grid gap-3 text-xs leading-5 text-muted-foreground sm:grid-cols-3">
            {post.details.slice(0, 3).map((detail) => (
              <p className="line-dotted border-t pt-3" key={detail}>
                {t(detail)}
              </p>
            ))}
          </div>
        ) : null}
      </button>
      {open ? (
        <DetailModal
          details={post.details}
          eyebrow={`${t("Writing")} · ${t(post.date)}`}
          externalHref={post.externalHref}
          image={post.image}
          title={t(post.title)}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </article>
  )
}

export function ExperienceRow({
  experience,
  detailed = false,
}: {
  experience: Experience
  detailed?: boolean
}) {
  const [open, setOpen] = React.useState(false)
  const { t } = usePortfolioLanguage()

  return (
    <article
      className="line-dotted border-b py-4 last:border-b-0"
      id={slugify(`${experience.company}-${experience.role}`)}
    >
      <button
        className="group block w-full text-left"
        type="button"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="line-solid relative mt-0.5 size-10 shrink-0 overflow-hidden rounded-md border bg-muted">
            <Image
              alt=""
              className="object-cover"
              fill
              sizes="40px"
              src={experience.image}
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-medium group-hover:underline">
              {t(experience.role)}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(experience.company)} · {t(experience.location)}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {t(experience.summary)}
            </p>
          </div>
          <span className="shrink-0 text-right text-xs text-muted-foreground">
            {t(experience.period)}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {experience.stack.slice(0, detailed ? 8 : 5).map((item) => (
            <span
              className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
              key={item}
            >
              {t(item)}
            </span>
          ))}
        </div>
        {detailed ? (
          <div className="mt-4 grid gap-3 text-xs leading-5 text-muted-foreground sm:grid-cols-2">
            {experience.details.slice(1).map((detail) => (
              <p className="line-dotted border-t pt-3" key={detail}>
                {t(detail)}
              </p>
            ))}
          </div>
        ) : null}
      </button>
      {open ? (
        <DetailModal
          details={experience.details}
          eyebrow={`${t("Experience")} · ${t(experience.period)}`}
          image={experience.image}
          imageMode="icon"
          stack={experience.stack}
          title={`${t(experience.role)} at ${t(experience.company)}`}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </article>
  )
}

export function EducationRow({ item }: { item: Education }) {
  const { t } = usePortfolioLanguage()

  return (
    <article
      className="line-dotted border-b py-4 last:border-b-0"
      id={slugify(item.institution)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="line-solid relative mt-0.5 size-10 shrink-0 overflow-hidden rounded-md border bg-muted">
          <Image
            alt=""
            className="object-cover"
            fill
            sizes="40px"
            src={item.image}
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-medium">{t(item.institution)}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {t(item.degree)}
          </p>
        </div>
        <span className="shrink-0 text-right text-xs text-muted-foreground">
          {t(item.period)}
        </span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{t(item.location)}</p>
    </article>
  )
}

export function RecommendationRow({ item }: { item: Recommendation }) {
  const { t } = usePortfolioLanguage()

  return (
    <article
      className="line-dotted border-b py-4 last:border-b-0"
      id="recommendation"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-medium">{t(item.name)}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t(item.title)}</p>
        </div>
        <span className="line-solid rounded-md border px-2 py-1 text-xs text-muted-foreground">
          {t("Meta")}
        </span>
      </div>
      <p className="mt-3 line-clamp-5 text-sm leading-6 text-muted-foreground">
        {t(item.text)}
      </p>
    </article>
  )
}

export function ExternalButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const { t } = usePortfolioLanguage()

  return (
    <a className={buttonVariants({ variant: "outline", size: "sm" })} href={href}>
      {typeof children === "string" ? t(children) : children}
      <ExternalLink />
    </a>
  )
}

function DetailModal({
  details,
  eyebrow,
  externalHref,
  image,
  imageMode = "landscape",
  onClose,
  stack = [],
  title,
}: {
  details: string[]
  eyebrow: string
  externalHref?: string
  image: string
  imageMode?: "landscape" | "icon"
  onClose: () => void
  stack?: string[]
  title: string
}) {
  const { copy, t } = usePortfolioLanguage()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onMouseDown={onClose}
    >
      <div
        className="line-solid flex max-h-[80svh] w-[min(80vw,980px)] max-w-full flex-col overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-2xl max-sm:w-[92vw]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="line-solid flex items-center justify-between gap-4 border-b px-4 py-3">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">{eyebrow}</p>
            <h3 className="truncate text-base font-medium">{title}</h3>
          </div>
          <button
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            type="button"
            aria-label={copy.closeDetails}
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <div className="min-h-0 overflow-y-auto p-4 sm:p-6">
          <div
            className={cn(
              "grid gap-5 md:items-start",
              imageMode === "icon"
                ? "md:grid-cols-[10rem_1fr]"
                : "md:grid-cols-[minmax(220px,0.85fr)_1fr]"
            )}
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-md",
                imageMode === "icon"
                  ? "mx-auto size-28 md:mx-0"
                  : "line-solid aspect-video w-full self-start border bg-muted/65"
              )}
            >
              <Image
                alt=""
                className={cn(
                  imageMode === "icon" ? "object-cover" : "object-contain"
                )}
                fill
                sizes={
                  imageMode === "icon"
                    ? "112px"
                    : "(max-width: 768px) 92vw, 32vw"
                }
                src={image}
              />
            </div>
            <div className="space-y-2">
              {details.map((detail, index) => (
                <div
                  className="line-dotted grid grid-cols-[1.75rem_1fr] gap-3 border-b pb-3 last:border-b-0"
                  key={detail}
                >
                  <span className="line-solid flex size-7 items-center justify-center rounded-md border font-mono text-[11px] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-muted-foreground">
                  {t(detail)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {stack.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {stack.map((item) => (
                <span
                  className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                  key={item}
                >
                  {t(item)}
                </span>
              ))}
            </div>
          ) : null}
          {externalHref ? (
            <a
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "mt-6"
              )}
              href={externalHref}
            >
                {copy.open}
              <ExternalLink />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}
