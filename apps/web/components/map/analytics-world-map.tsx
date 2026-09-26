"use client"

import { Globe2 } from "lucide-react"
import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"
import type { AnalyticsCountry } from "@/lib/analytics-data"

type AnalyticsWorldMapProps = {
  countries: AnalyticsCountry[]
  selectedCountry: string
  onSelectCountry: (country: string) => void
}

export function AnalyticsWorldMap({
  countries,
  selectedCountry,
  onSelectCountry,
}: AnalyticsWorldMapProps) {
  const maxVisitors = Math.max(...countries.map((country) => country.visitors), 1)
  const activeCountry = countries.find(
    (country) => country.country === selectedCountry
  )

  return (
    <div className="line-solid relative min-h-[460px] overflow-hidden rounded-lg border bg-background">
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 960 460"
          className="size-full text-foreground"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="World map showing analytics by country"
        >
          <defs>
            <pattern
              id="analytics-map-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.05"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="960" height="460" fill="url(#analytics-map-grid)" />
          <g opacity="0.86">
            {landMasses.map((path) => (
              <path
                d={path}
                fill="currentColor"
                fillOpacity="0.075"
                key={path}
                stroke="currentColor"
                strokeOpacity="0.16"
                strokeWidth="1.25"
              />
            ))}
          </g>
        </svg>
      </div>

      {countries.map((country) => {
        const selected = country.country === selectedCountry
        const scale = country.visitors / maxVisitors
        const size = 9 + scale * 9

        return (
          <button
            type="button"
            key={country.country}
            className={cn(
              "analytics-map-marker absolute -translate-x-1/2 -translate-y-1/2",
              selected && "analytics-map-marker-selected"
            )}
            style={
              {
                "--marker-size": `${size}px`,
                left: `${country.x}%`,
                top: `${country.y}%`,
              } as React.CSSProperties
            }
            aria-label={`${country.name}: ${country.visitors} visitors`}
            onClick={() => onSelectCountry(country.country)}
          >
            <span className="analytics-map-marker-pulse" />
            <span className="analytics-map-marker-dot" />
            <span className="analytics-map-marker-label">
              {country.country} / {formatNumber(country.visitors)}
            </span>
          </button>
        )
      })}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
      <div className="pointer-events-none absolute left-3 top-3 rounded-md border border-border/70 bg-background/90 px-3 py-2 backdrop-blur">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium">
          <Globe2 className="size-3.5 text-muted-foreground" />
          {activeCountry?.name ?? "Global traffic"}
        </p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          {activeCountry
            ? `${formatNumber(activeCountry.visitors)} visitors`
            : "Select a country"}
        </p>
      </div>
    </div>
  )
}

const landMasses = [
  "M91 153 C75 126 85 95 129 77 C184 54 255 69 286 111 C314 149 292 186 243 203 C196 219 126 208 91 153Z",
  "M230 254 C194 244 184 211 211 188 C247 158 303 170 325 209 C352 260 298 306 230 254Z",
  "M367 130 C347 101 374 72 421 75 C473 79 526 111 519 149 C511 196 424 186 367 130Z",
  "M456 236 C432 202 463 157 521 151 C594 143 658 177 673 229 C688 283 610 318 540 287 C504 271 484 257 456 236Z",
  "M612 118 C679 65 800 76 862 133 C915 182 861 225 766 209 C687 195 574 170 612 118Z",
  "M664 278 C624 251 635 208 689 199 C755 188 809 226 798 273 C786 326 707 322 664 278Z",
  "M778 344 C746 319 762 281 812 284 C866 287 896 326 870 362 C846 395 810 383 778 344Z",
  "M499 362 C474 327 502 288 549 297 C597 306 624 353 596 391 C565 431 523 402 499 362Z",
]

function formatNumber(value: number) {
  return new Intl.NumberFormat("en", {
    notation: value >= 10_000 ? "compact" : "standard",
  }).format(value)
}
