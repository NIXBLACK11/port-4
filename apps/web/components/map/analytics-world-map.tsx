"use client"

import { useQuery } from "@tanstack/react-query"
import {
  geoEqualEarth,
  geoMercator,
  geoNaturalEarth1,
  geoOrthographic,
} from "d3-geo"
import { numericToAlpha2 } from "i18n-iso-countries"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  RotateCcw,
} from "lucide-react"
import * as React from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
} from "react-simple-maps/core"
import { ZoomableGroup } from "react-simple-maps/zoom"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { usePortfolioLanguage } from "@/components/portfolio/shell"
import type { AnalyticsCountry } from "@/lib/analytics-data"

const geographyUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
const projections = {
  geoEqualEarth: "Equal Earth",
  geoMercator: "Mercator",
  geoNaturalEarth1: "Natural Earth",
  geoOrthographic: "Orthographic",
} as const

export type MapProjection = keyof typeof projections

type WorldMapProps = {
  countries: AnalyticsCountry[]
  selectedCountry?: string
  onSelectCountry?: (country: string) => void
  projection?: MapProjection
}

type HoveredCountry = {
  name: string
  code?: string
  analytics?: AnalyticsCountry
}

// Keep Antarctica out of the traffic map so the other countries can use the space.
const filterGeographies: NonNullable<
  React.ComponentProps<typeof Geographies>["parseGeographies"]
> = (features) =>
  features.filter((feature) => feature.properties?.name !== "Antarctica")

export function AnalyticsWorldMap(props: Omit<WorldMapProps, "projection">) {
  const { copy } = usePortfolioLanguage()
  const [projection, setProjection] =
    React.useState<MapProjection>("geoEqualEarth")

  return (
    <div className="w-full bg-background">
      <div className="line-solid flex flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5">
        <p className="text-xs text-muted-foreground">
          {copy.analytics.hoverCountry}
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label={`${copy.analytics.projection}: ${projections[projection]}`}
            render={
              <Button
                variant="outline"
                className="h-8 w-40 justify-between rounded-md px-2.5 text-xs"
              />
            }
          >
            {projections[projection]}
            <ChevronDown className="size-3.5 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="end"
            collisionAvoidance={{
              side: "none",
              align: "shift",
              fallbackAxisSide: "none",
            }}
            className="w-(--anchor-width)"
          >
            <DropdownMenuRadioGroup
              value={projection}
              onValueChange={(value: MapProjection) => setProjection(value)}
            >
              {Object.entries(projections).map(([value, label]) => (
                <DropdownMenuRadioItem
                  key={value}
                  value={value}
                  closeOnClick
                  className="text-xs"
                >
                  {label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <WorldMap key={projection} {...props} projection={projection} />
    </div>
  )
}

export const WorldMap = React.memo(function WorldMap({
  countries,
  selectedCountry,
  onSelectCountry,
  projection = "geoEqualEarth",
}: WorldMapProps) {
  const { copy } = usePortfolioLanguage()
  const [hovered, setHovered] = React.useState<HoveredCountry | null>(null)
  const [view, setView] = React.useState<{
    center: [number, number]
    zoom: number
  }>({ center: [0, 0], zoom: 1 })
  const [longitude, setLongitude] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const tooltipId = React.useId()
  const isGlobe = projection === "geoOrthographic"
  const {
    data: geography,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["analytics-world-geography"],
    queryFn: async ({ signal }) => {
      const response = await fetch(geographyUrl, { signal })
      if (!response.ok) throw new Error("Could not load world geography")
      const topology = await response.json()
      if (
        topology?.type !== "Topology" ||
        !topology.objects?.countries?.geometries?.length
      ) {
        throw new Error("Invalid world geography")
      }
      // Geographies accepts TopoJSON at runtime; its public type only lists GeoJSON.
      return topology as React.ComponentProps<typeof Geographies>["geography"]
    },
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 1,
  })
  const countryByCode = React.useMemo(
    () =>
      new Map(
        countries.map((country) => [country.country.toUpperCase(), country])
      ),
    [countries]
  )
  const maxVisitors = React.useMemo(
    () => Math.max(...countries.map((country) => country.visitors), 1),
    [countries]
  )
  const mapProjection = React.useMemo(() => {
    const factory = {
      geoEqualEarth,
      geoMercator,
      geoNaturalEarth1,
      geoOrthographic,
    }[projection]
    const scale = {
      geoEqualEarth: 145,
      geoMercator: 120,
      geoNaturalEarth1: 140,
      geoOrthographic: 205,
    }[projection]
    const result = factory().scale(scale).translate([400, 220])
    if (projection === "geoOrthographic")
      return result.rotate([-longitude, -15]).clipAngle(90)
    return result.center([0, 12]).clipExtent([
      [0, 0],
      [800, 440],
    ])
  }, [projection, longitude])

  function positionTooltip(event: React.MouseEvent) {
    const bounds = containerRef.current?.getBoundingClientRect()
    const tooltip = tooltipRef.current
    if (!bounds || !tooltip) return
    tooltip.style.left = `${Math.max(8, Math.min(event.clientX - bounds.left + 14, bounds.width - tooltip.offsetWidth - 8))}px`
    tooltip.style.top = `${Math.max(8, Math.min(event.clientY - bounds.top + 14, bounds.height - tooltip.offsetHeight - 8))}px`
  }

  return (
    <div
      ref={containerRef}
      className="relative isolate bg-muted/10"
      onMouseMove={positionTooltip}
      onMouseLeave={() => setHovered(null)}
      onKeyDown={(event) => {
        if (event.key === "Escape") setHovered(null)
      }}
    >
      {isPending ? (
        <Skeleton className="aspect-[800/440] w-full rounded-none" />
      ) : null}
      {isError ? (
        <div
          className="flex aspect-[800/440] flex-col items-center justify-center gap-3 px-4 text-center text-sm text-muted-foreground"
          role="alert"
        >
          <p>{copy.analytics.mapLoadError}</p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => void refetch()}
          >
            {copy.analytics.retry}
          </Button>
        </div>
      ) : null}
      {geography ? (
        <>
          <ComposableMap
            width={800}
            height={440}
            projection={mapProjection}
            className="block w-full"
            role="group"
            aria-label={copy.analytics.worldMapLabel}
          >
            <ZoomableGroup
              center={isGlobe ? [longitude, 15] : view.center}
              zoom={view.zoom}
              minZoom={1}
              maxZoom={6}
              translateExtent={[
                [-400, -220],
                [1200, 660],
              ]}
              filterZoomEvent={(event) =>
                event.type === "wheel"
                  ? (event as WheelEvent).ctrlKey ||
                    (event as WheelEvent).metaKey
                  : !isGlobe && !(event as MouseEvent).button
              }
              onMoveStart={() => setHovered(null)}
              onMoveEnd={({ coordinates, zoom }) => {
                if (coordinates && zoom) setView({ center: coordinates, zoom })
              }}
            >
              {isGlobe ? (
                <Sphere
                  fill="var(--background)"
                  stroke="var(--border)"
                  strokeWidth={0.6}
                />
              ) : null}
              <Graticule
                stroke="var(--border)"
                strokeWidth={0.4}
                strokeOpacity={0.5}
              />
              <Geographies
                geography={geography}
                parseGeographies={filterGeographies}
              >
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const code =
                      geo.id == null
                        ? undefined
                        : numericToAlpha2(String(geo.id))
                    const analytics = code ? countryByCode.get(code) : undefined
                    const name =
                      analytics?.name ??
                      String(geo.properties?.name ?? code ?? "")
                    const selected = Boolean(code && code === selectedCountry)
                    const active = hovered?.name === name
                    const fill = analytics?.visitors
                      ? `color-mix(in oklch, var(--analytics-line) ${20 + Math.sqrt(analytics.visitors / maxVisitors) * 70}%, var(--muted))`
                      : "var(--muted)"
                    const showCountry = () =>
                      setHovered({ name, code, analytics })
                    const selectCountry = () => {
                      if (code && analytics) onSelectCountry?.(code)
                    }
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        className="transition-[fill,stroke] duration-150 outline-none motion-reduce:transition-none"
                        fill={
                          active || selected ? "var(--analytics-line)" : fill
                        }
                        stroke={
                          active || selected
                            ? "var(--foreground)"
                            : "var(--background)"
                        }
                        strokeWidth={active || selected ? 1 : 0.6}
                        vectorEffect="non-scaling-stroke"
                        style={{ cursor: analytics ? "pointer" : "default" }}
                        role={analytics ? "button" : "img"}
                        tabIndex={analytics ? 0 : undefined}
                        aria-label={`${name}${analytics ? `: ${formatNumber(analytics.visitors)} ${copy.analytics.visitors}, ${formatNumber(analytics.pageviews)} ${copy.analytics.pageviews}` : `: ${copy.analytics.noCountryData}`}`}
                        aria-pressed={analytics ? selected : undefined}
                        aria-describedby={active ? tooltipId : undefined}
                        onMouseEnter={showCountry}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={showCountry}
                        onBlur={() => setHovered(null)}
                        onClick={selectCountry}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault()
                            selectCountry()
                          }
                        }}
                      />
                    )
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
          <div className="absolute right-3 bottom-3 flex gap-1 rounded-md border bg-background/95 p-1">
            {isGlobe ? (
              <>
                <MapButton
                  label={copy.analytics.rotateLeft}
                  onClick={() => setLongitude(longitude - 45)}
                >
                  <ChevronLeft />
                </MapButton>
                <MapButton
                  label={copy.analytics.rotateRight}
                  onClick={() => setLongitude(longitude + 45)}
                >
                  <ChevronRight />
                </MapButton>
              </>
            ) : null}
            <MapButton
              label={copy.analytics.zoomOut}
              disabled={view.zoom <= 1}
              onClick={() =>
                setView({ ...view, zoom: Math.max(1, view.zoom / 1.5) })
              }
            >
              <Minus />
            </MapButton>
            <MapButton
              label={copy.analytics.zoomIn}
              disabled={view.zoom >= 6}
              onClick={() =>
                setView({ ...view, zoom: Math.min(6, view.zoom * 1.5) })
              }
            >
              <Plus />
            </MapButton>
            <MapButton
              label={copy.analytics.resetMap}
              onClick={() => {
                setView({ center: [0, 0], zoom: 1 })
                setLongitude(0)
                setHovered(null)
              }}
            >
              <RotateCcw />
            </MapButton>
          </div>
        </>
      ) : null}
      {hovered ? (
        <div
          id={tooltipId}
          ref={tooltipRef}
          role="tooltip"
          className="pointer-events-none absolute top-3 left-3 z-10 w-48 rounded-md border bg-popover p-3 text-popover-foreground shadow-md"
        >
          <p className="text-sm font-medium">{hovered.name}</p>
          {hovered.analytics ? (
            <dl className="mt-2 space-y-1.5 text-xs">
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">
                  {copy.analytics.visitors}
                </dt>
                <dd className="font-medium tabular-nums">
                  {formatNumber(hovered.analytics.visitors)}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">
                  {copy.analytics.pageviews}
                </dt>
                <dd className="font-medium tabular-nums">
                  {formatNumber(hovered.analytics.pageviews)}
                </dd>
              </div>
            </dl>
          ) : (
            <p className="mt-2 text-xs text-muted-foreground">
              {copy.analytics.noCountryData}
            </p>
          )}
        </div>
      ) : null}
    </div>
  )
})

function MapButton({
  label,
  children,
  ...props
}: React.ComponentProps<typeof Button> & { label: string }) {
  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      className="size-7 [&_svg]:size-3.5"
      aria-label={label}
      title={label}
      {...props}
    >
      {children}
    </Button>
  )
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en").format(value)
}
