"use client"

import { useQuery } from "@tanstack/react-query"
import {
  CalendarDays,
  Eye,
  Globe2,
  MousePointer2,
  Radio,
  Users,
} from "lucide-react"
import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { AnalyticsWorldMap } from "@/components/map/analytics-world-map"
import { PortfolioShell } from "@/components/portfolio/shell"
import { PageBlock, SectionHeader } from "@/components/portfolio/sections"
import type {
  AnalyticsCountry,
  AnalyticsDimension,
  AnalyticsPayload,
  AnalyticsPoint,
} from "@/lib/analytics-data"

const rangeOptions = [
  { label: "1 day", days: 1 },
  { label: "7 days", days: 7 },
  { label: "30 days", days: 30 },
] as const

export default function AnalyticsPage() {
  return (
    <PortfolioShell>
      <AnalyticsContent />
    </PortfolioShell>
  )
}

function AnalyticsContent() {
  const [rangeDays, setRangeDays] = React.useState(30)
  const { data, isLoading, isError } = useAnalytics(rangeDays)
  const analytics = data
  const [selectedCountry, setSelectedCountry] = React.useState("IN")

  const selected =
    analytics?.countries.find((country) => country.country === selectedCountry) ??
    analytics?.countries[0]
  const activeCountry = selected?.country ?? ""

  return (
    <>
      <PageBlock className="pt-10 sm:pt-12">
        <p className="text-sm text-muted-foreground">
          Web analytics / Last {formatDays(analytics?.range.days ?? rangeDays)}
        </p>
        <h1 className="measure-text mt-3 text-4xl font-medium leading-tight sm:text-5xl">
          Portfolio traffic
        </h1>
        <p className="measure-text mt-5 text-base leading-7 text-muted-foreground">
          Page views, visitors, geography, devices, and referrers in one quiet
          dashboard.
        </p>
        <div className="mt-5">
          <RangeSelector value={rangeDays} onChange={setRangeDays} />
        </div>
        {analytics?.configured === false ? (
          <div className="line-solid mt-5 rounded-md border bg-muted/20 px-3 py-2 text-xs leading-5 text-muted-foreground">
            Vercel Analytics is not configured for this environment yet.
          </div>
        ) : null}
      </PageBlock>

      <PageBlock className="py-0">
        {isLoading ? <LoadingPanel /> : null}
        {isError ? <ErrorPanel /> : null}
        {analytics ? (
          <div className="line-solid overflow-hidden rounded-lg border bg-background">
            <div className="grid sm:grid-cols-3">
              <StatCard
                icon={Eye}
                label="Page Views"
                value={analytics.totals.pageviews}
                note={`${formatDays(analytics.range.days)} range`}
              />
              <StatCard
                icon={Users}
                label="Visitors"
                value={analytics.totals.visitors}
                note="Unique viewers"
              />
              <StatCard
                icon={Radio}
                label="Top Country"
                value={selected?.visitors ?? 0}
                note={selected?.name ?? "Waiting for data"}
              />
            </div>
            <LineChart data={analytics.daily} />
          </div>
        ) : null}
      </PageBlock>

      {/* {analytics ? (
        <>
          <PageBlock>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground">
                  Map
                </p>
                <h2 className="mt-1 text-xl font-medium tracking-normal sm:text-2xl">
                  Countries
                </h2>
              </div>
              <CountryStrip
                countries={analytics.countries}
                selectedCountry={activeCountry}
                onSelectCountry={setSelectedCountry}
              />
            </div>
            <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_280px]">
              <AnalyticsWorldMap
                countries={analytics.countries}
                selectedCountry={activeCountry}
                onSelectCountry={setSelectedCountry}
              />
              {selected ? <CountryDetail country={selected} /> : null}
            </div>
          </PageBlock>

          <PageBlock>
            <SectionHeader eyebrow="Breakdown" title="Devices and referrers" />
            <div className="grid gap-3 sm:grid-cols-2">
              <DimensionList
                icon={MousePointer2}
                title="Devices"
                items={analytics.devices}
              />
              <DimensionList
                icon={Globe2}
                title="Referrers"
                items={analytics.referrers}
              />
            </div>
          </PageBlock>
        </>
      ) : null} */}
    </>
  )
}

function useAnalytics(days: number) {
  return useQuery({
    queryKey: ["analytics-dashboard", days],
    queryFn: async () => {
      const response = await fetch(`/api/analytics?days=${days}`)

      if (!response.ok) {
        throw new Error("Could not load analytics.")
      }

      return (await response.json()) as AnalyticsPayload
    },
    refetchInterval: 60_000,
    staleTime: 45_000,
  })
}

function RangeSelector({
  value,
  onChange,
}: {
  value: number
  onChange: (days: number) => void
}) {
  return (
    <div className="line-solid flex w-fit items-center gap-1 rounded-md border bg-background p-1">
      <CalendarDays className="ml-1.5 size-3.5 text-muted-foreground" />
      {rangeOptions.map((option) => (
        <Button
          className="h-7 rounded-sm px-2 text-xs"
          key={option.days}
          size="sm"
          type="button"
          variant={value === option.days ? "default" : "ghost"}
          onClick={() => onChange(option.days)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  note,
}: {
  icon: typeof Eye
  label: string
  value: number
  note: string
}) {
  return (
    <div className="line-solid border-b p-4 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <div className="flex items-center justify-between gap-3 text-xs font-medium text-muted-foreground">
        <span>{label}</span>
        <Icon className="size-3.5" />
      </div>
      <p className="mt-6 text-4xl font-medium tracking-normal">
        {formatNumber(value)}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">{note}</p>
    </div>
  )
}

function CountryStrip({
  countries,
  selectedCountry,
  onSelectCountry,
}: {
  countries: AnalyticsCountry[]
  selectedCountry: string
  onSelectCountry: (country: string) => void
}) {
  if (countries.length === 0) {
    return (
      <p className="text-xs text-muted-foreground">
        No country data for this range.
      </p>
    )
  }

  return (
    <div className="flex max-w-full gap-1.5 overflow-x-auto pb-1">
      {countries.map((country) => (
        <Button
          className="h-8 gap-2 rounded-md px-2.5 text-xs"
          key={country.country}
          type="button"
          size="sm"
          variant={country.country === selectedCountry ? "default" : "outline"}
          onClick={() => onSelectCountry(country.country)}
        >
          <span>{country.country}</span>
          <span className="text-current/60">{formatNumber(country.visitors)}</span>
        </Button>
      ))}
    </div>
  )
}

function CountryDetail({ country }: { country: AnalyticsCountry }) {
  return (
    <div className="line-solid rounded-lg border bg-background p-4 xl:min-h-[460px]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium">{country.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {country.country} selected
          </p>
        </div>
        <Globe2 className="size-4 text-muted-foreground" />
      </div>
      <div className="mt-8 grid gap-3">
        <Metric label="Visitors" value={country.visitors} />
        <Metric label="Pageviews" value={country.pageviews} />
      </div>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="line-dotted border-t py-3">
      <p className="text-[11px] uppercase text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-medium">{formatNumber(value)}</p>
    </div>
  )
}

function LineChart({ data }: { data: AnalyticsPoint[] }) {
  if (data.length === 0) {
    return (
      <div className="line-solid border-t px-4 py-5">
        <div className="grid h-64 place-items-center text-sm text-muted-foreground">
          No page view data for this range.
        </div>
      </div>
    )
  }

  const max = Math.max(...data.map((point) => point.pageviews), 1)
  const points = data
    .map((point, index) => {
      const x = data.length === 1 ? 0 : (index / (data.length - 1)) * 100
      const y = 100 - (point.pageviews / max) * 88
      return `${x},${y}`
    })
    .join(" ")
  const areaPoints = `0,100 ${points} 100,100`

  return (
    <div className="line-solid border-t px-4 py-5">
      <div className="h-64 w-full">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="size-full">
          <g className="text-border">
            {[20, 40, 60, 80].map((y) => (
              <line
                key={y}
                x1="0"
                x2="100"
                y1={y}
                y2={y}
                stroke="currentColor"
                strokeDasharray="1 3"
                strokeWidth="0.35"
              />
            ))}
          </g>
          <polygon
            className="text-analytics-line"
            fill="currentColor"
            opacity="0.04"
            points={areaPoints}
            vectorEffect="non-scaling-stroke"
          />
          <polyline
            className="text-analytics-line"
            fill="none"
            points={points}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-muted-foreground sm:grid-cols-5">
        {data.slice(-5).map((point) => (
          <div className="line-dotted border-t pt-2" key={point.label}>
            <p>{point.label}</p>
            <p className="mt-1 text-foreground">{formatNumber(point.pageviews)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function DimensionList({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Globe2
  title: string
  items: AnalyticsDimension[]
}) {
  const max = Math.max(...items.map((item) => item.visitors), 1)

  return (
    <div className="line-solid rounded-lg border bg-background">
      <div className="line-solid flex items-center justify-between gap-3 border-b px-4 py-3">
        <h3 className="inline-flex items-center gap-2 text-sm font-medium">
          <Icon className="size-4 text-muted-foreground" />
          {title}
        </h3>
        <span className="text-[11px] uppercase text-muted-foreground">
          Visitors
        </span>
      </div>
      <div className="px-4 py-2">
        {items.length === 0 ? (
          <p className="py-6 text-sm text-muted-foreground">
            No data for this range.
          </p>
        ) : null}
        {items.map((item) => (
          <div className="line-dotted border-b py-3 last:border-b-0" key={item.label}>
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="truncate">{item.label}</span>
              <span className="text-muted-foreground">
                {formatNumber(item.visitors)}
              </span>
            </div>
            <div className="mt-2 h-px overflow-hidden bg-muted">
              <div
                className="h-full bg-foreground"
                style={{ width: `${Math.max((item.visitors / max) * 100, 4)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LoadingPanel() {
  return (
    <div className="space-y-3 py-8">
      <div className="line-solid overflow-hidden rounded-lg border bg-background">
        <div className="grid sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="line-solid border-b p-4 sm:border-b-0 sm:border-r sm:last:border-r-0"
              key={`stat-skeleton-${index}`}
            >
              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="size-4 rounded-full" />
              </div>
              <Skeleton className="mt-6 h-10 w-24" />
              <Skeleton className="mt-2 h-3 w-28" />
            </div>
          ))}
        </div>
        <div className="line-solid border-t p-4">
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  )
}

function ErrorPanel() {
  return (
    <div className="line-solid my-8 rounded-lg border p-3 text-sm text-muted-foreground">
      Analytics could not be loaded right now.
    </div>
  )
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en", {
    notation: value >= 10_000 ? "compact" : "standard",
  }).format(value)
}

function formatDays(days: number) {
  return days === 1 ? "1 day" : `${days} days`
}
