"use client"

import dynamic from "next/dynamic"
import { useState, useCallback, useEffect, useRef } from "react"
import { HeaderMenu } from "@/components/header-menu"
import { LAYERS, DISTRICT_COLORS } from "@/components/eco-almaty-map"
import type { DistrictInfo } from "@/components/eco-almaty-map"
import { EcoAlmatyAnalytics } from "@/components/eco-almaty-analytics"
import { clearGeoCache } from "@/components/eco-almaty-map"
import { Droplets, Waves, Trash2, TreePine, ChevronDown, ChevronRight, BarChart2, RefreshCw, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

const EcoAlmatyMap = dynamic(
  () => import("@/components/eco-almaty-map").then(m => ({ default: m.EcoAlmatyMap })),
  { ssr: false }
)

type LayerId = (typeof LAYERS)[number]["id"]

// ── Geocoding search ───────────────────────────────────────────────────────
type GeoResult = { place_name: string; center: [number, number] }

function MapSearch({ onSelect }: { onSelect: (coords: [number, number]) => void }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<GeoResult[]>([])
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!query.trim()) { setResults([]); setOpen(false); return }
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(async () => {
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ""
      const enc = encodeURIComponent(query)
      try {
        const res = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${enc}.json?access_token=${token}&proximity=76.945,43.238&country=kz&language=ru&limit=6`
        )
        if (!res.ok) return
        const data = await res.json() as { features: GeoResult[] }
        setResults(data.features ?? [])
        setOpen(true)
      } catch { /* non-fatal */ }
    }, 350)
  }, [query])

  const pick = (r: GeoResult) => {
    onSelect(r.center)
    setQuery(r.place_name.split(",")[0])
    setOpen(false)
  }

  return (
    <div style={{ position: "relative", width: 320 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "#fff", border: "1px solid #e5e7eb",
        borderRadius: 10, padding: "7px 12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
      }}>
        <Search size={15} color="#9ca3af" />
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Поиск адреса в Алматы…"
          style={{ flex: 1, border: "none", outline: "none", fontSize: 13, color: "#111", background: "transparent", fontFamily: "Inter,sans-serif" }}
        />
        {query && (
          <button onClick={() => { setQuery(""); setResults([]); setOpen(false) }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "#9ca3af", display: "flex" }}>
            <X size={14} />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0,
          background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10,
          boxShadow: "0 8px 24px rgba(0,0,0,0.14)", overflow: "hidden", zIndex: 200,
        }}>
          {results.map((r, i) => (
            <button key={i} onClick={() => pick(r)}
              style={{
                width: "100%", textAlign: "left", padding: "9px 14px", border: "none",
                background: "none", cursor: "pointer", fontSize: 13, color: "#111",
                borderBottom: i < results.length - 1 ? "1px solid #f3f4f6" : "none",
                fontFamily: "Inter,sans-serif", display: "block",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#f9fafb" }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none" }}
            >
              <div style={{ fontWeight: 500 }}>{r.place_name.split(",")[0]}</div>
              <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{r.place_name.split(",").slice(1).join(",").trim()}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const GROUP_META = {
  water:    { label: "Водные объекты",      icon: Droplets, color: "#3b82f6" },
  fountain: { label: "Фонтаны",            icon: Waves,    color: "#06d6a0" },
  waste:    { label: "Отходы",             icon: Trash2,   color: "#f97316" },
  green:    { label: "Зелёные насаждения", icon: TreePine, color: "#16a34a" },
} as const

type GroupKey = keyof typeof GROUP_META

type ModuleKey = "green" | "water" | "fountain" | "waste"
type SubTab = "map" | "analytics"

const MODULE_TABS: { key: ModuleKey; label: string; icon: React.ElementType; group?: GroupKey; hasAnalytics?: boolean }[] = [
  { key: "green",    label: "Зеленые насаждения", icon: TreePine,  group: "green",    hasAnalytics: true  },
  { key: "water",    label: "Водные объекты",     icon: Droplets,  group: "water"                        },
  { key: "fountain", label: "Фонтаны",            icon: Waves,     group: "fountain"                     },
  { key: "waste",    label: "Отходы",             icon: Trash2,    group: "waste"                        },
]

export default function EcoAlmatyPage() {
  const [activeModule, setActiveModule] = useState<ModuleKey>("green")
  const [subTab, setSubTab] = useState<SubTab>("map")
  const [centerCoords, setCenterCoords] = useState<[number, number] | null>(null)
  const [visibleLayers, setVisibleLayers] = useState<Set<LayerId>>(
    () => new Set(LAYERS.filter(l => l.group === "green").map(l => l.id) as LayerId[])
  )
  const [layerCounts, setLayerCounts] = useState<Record<string, number>>({})
  const [isMapLoading, setIsMapLoading] = useState(true)
  const [showDistricts, setShowDistricts] = useState(true)
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo | null>(null)
  const [districts, setDistricts] = useState<(DistrictInfo & {color: string})[]>([])
  const currentModule = MODULE_TABS.find(m => m.key === activeModule)!
  const activeGroup = currentModule.group
  const [openGroups, setOpenGroups] = useState<Set<GroupKey>>(new Set(["water", "fountain", "waste", "green"]))

  const toggleLayer = useCallback((id: LayerId) => {
    setVisibleLayers(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const toggleGroup = useCallback((g: GroupKey) => {
    setOpenGroups(prev => {
      const next = new Set(prev)
      next.has(g) ? next.delete(g) : next.add(g)
      return next
    })
  }, [])

  const toggleAllInGroup = useCallback((g: GroupKey) => {
    const ids = LAYERS.filter(l => l.group === g).map(l => l.id)
    const allVisible = ids.every(id => visibleLayers.has(id))
    setVisibleLayers(prev => {
      const next = new Set(prev)
      allVisible ? ids.forEach(id => next.delete(id)) : ids.forEach(id => next.add(id))
      return next
    })
  }, [visibleLayers])

  const switchModule = useCallback((key: ModuleKey) => {
    setActiveModule(key)
    setSubTab("map")
    const mod = MODULE_TABS.find(m => m.key === key)!
    const groupIds = mod.group
      ? LAYERS.filter(l => l.group === mod.group).map(l => l.id)
      : []
    setVisibleLayers(new Set(groupIds as LayerId[]))
  }, [])

  const groups = (Object.keys(GROUP_META) as GroupKey[]).map(g => ({
    key: g,
    ...GROUP_META[g],
    layers: LAYERS.filter(l => l.group === g),
  }))

  useEffect(() => {
    const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1"
    const EXCLUDED = new Set([0, 9])
    fetch(`${API}/address/districts/`)
      .then(r => r.ok ? r.json() : null)
      .then((fc: {features?: {id?: number; properties?: {id?: number; name_ru?: string}}[]} | null) => {
        if (!fc?.features) return
        const list = fc.features
          .map(f => {
            const id = Number(f.id ?? f.properties?.id ?? 0)
            const name = String(f.properties?.name_ru ?? "")
            return { id, name, color: DISTRICT_COLORS[id] ?? "#94a3b8" }
          })
          .filter(d => d.id && !EXCLUDED.has(d.id) && d.name)
          .sort((a, b) => a.id - b.id)
        setDistricts(list)
      })
      .catch(() => {})
  }, [])

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      {/* Full-page blocker — covers header, tabs, sidebar, everything while loading */}
      {isMapLoading && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, cursor: "wait", pointerEvents: "all" }} />
      )}
      <HeaderMenu />

      {/* module tab navigation — blocked while map is loading */}
      <div className="relative flex items-center gap-0 px-4 border-b border-border bg-card shrink-0 overflow-x-auto">
        {MODULE_TABS.map(({ key, label, icon: Icon }) => (
          <button key={key}
            onClick={() => !isMapLoading && switchModule(key)}
            disabled={isMapLoading}
            className={cn(
              "flex items-center gap-1.5 px-4 py-2.5 text-sm border-b-2 transition-colors whitespace-nowrap shrink-0",
              isMapLoading ? "opacity-40 cursor-not-allowed" : "",
              activeModule === key
                ? "border-green-600 text-green-700 dark:text-green-400 font-medium"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}>
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
        {isMapLoading && (
          <div className="absolute inset-0 cursor-not-allowed" />
        )}
      </div>

      {subTab === "analytics" && currentModule.hasAnalytics ? (
        <EcoAlmatyAnalytics />
      ) : (
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — blocked during loading */}
        <aside className="relative w-64 shrink-0 border-r border-border bg-card flex flex-col overflow-y-auto">
          <div className="px-4 pt-3 pb-0 border-b border-border">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-foreground">Слои</h2>
            </div>
            {/* Districts overlay toggle — always visible */}
            <label className="flex items-center gap-2 py-1.5 px-1 mb-1 rounded cursor-pointer hover:bg-muted/50 select-none"
              onClick={e => {
                e.preventDefault()
                setShowDistricts(v => {
                  if (v) setSelectedDistrict(null) // clear filter when hiding districts
                  return !v
                })
              }}>
              <span className={cn(
                "w-3.5 h-3.5 rounded border-2 shrink-0 flex items-center justify-center transition-colors",
                showDistricts ? "border-transparent bg-indigo-500" : "border-muted-foreground"
              )}>
                {showDistricts && <span className="block w-1.5 h-1 border-b-2 border-l-2 border-white -rotate-45 -mt-0.5" />}
              </span>
              <span className="w-2 h-2 rounded-full shrink-0 bg-indigo-400" />
              <span className="text-xs text-foreground">Районы города</span>
            </label>

            {/* District list — shown when districts layer is on */}
            {showDistricts && districts.length > 0 && (
              <div className="pb-1.5 space-y-0.5">
                {/* "All districts" reset button */}
                <button
                  onClick={() => setSelectedDistrict(null)}
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors text-left",
                    !selectedDistrict
                      ? "bg-indigo-50 text-indigo-700 font-medium dark:bg-indigo-950/40 dark:text-indigo-300"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  <span className="w-3.5 h-3.5 rounded border-2 shrink-0 flex items-center justify-center border-transparent bg-indigo-400">
                    {!selectedDistrict && <span className="block w-1.5 h-1 border-b-2 border-l-2 border-white -rotate-45 -mt-0.5" />}
                  </span>
                  Все районы
                </button>
                {districts.map(d => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDistrict(prev => prev?.id === d.id ? null : d)}
                    className={cn(
                      "w-full flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors text-left",
                      selectedDistrict?.id === d.id
                        ? "font-semibold"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                    style={selectedDistrict?.id === d.id ? { background: d.color + "18", color: d.color } : {}}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 ring-2 ring-transparent transition-all"
                      style={{
                        backgroundColor: d.color,
                        boxShadow: selectedDistrict?.id === d.id ? `0 0 0 2px ${d.color}55` : undefined,
                      }}
                    />
                    {d.name}
                  </button>
                ))}
              </div>
            )}

            {/* Карта / Аналитика toggle — only when module has analytics */}
            {currentModule.hasAnalytics && (
              <div className="flex gap-0 mb-0">
                {(["map", "analytics"] as SubTab[]).map(t => (
                  <button key={t} onClick={() => setSubTab(t)}
                    className={cn(
                      "flex-1 py-1.5 text-xs border-b-2 transition-colors",
                      subTab === t
                        ? "border-green-600 text-green-700 dark:text-green-400 font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    )}>
                    {t === "map" ? "Карта" : "Аналитика"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {(
          <div className="flex-1 py-2 overflow-y-auto">
            {groups.filter(g => g.key === activeGroup).map(group => {
              const Icon = group.icon
              const isOpen = openGroups.has(group.key)
              const allOn = group.layers.every(l => visibleLayers.has(l.id))
              const anyOn = group.layers.some(l => visibleLayers.has(l.id))

              return (
                <div key={group.key} className="mb-1">
                  {/* group header */}
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-muted/50 cursor-pointer select-none"
                    onClick={() => toggleGroup(group.key)}>
                    {isOpen ? <ChevronDown className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                             : <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />}
                    <Icon className="h-4 w-4 shrink-0" style={{ color: group.color }} />
                    <span className="text-sm font-medium flex-1">{group.label}</span>
                    {/* group toggle dot */}
                    <button
                      className={cn(
                        "w-3 h-3 rounded-full border-2 transition-colors shrink-0",
                        allOn ? "border-transparent" : anyOn ? "border-current" : "border-muted-foreground bg-transparent"
                      )}
                      style={{ backgroundColor: allOn ? group.color : anyOn ? group.color + "44" : undefined }}
                      onClick={e => { e.stopPropagation(); toggleAllInGroup(group.key) }}
                      title={allOn ? "Скрыть все" : "Показать все"}
                    />
                  </div>

                  {/* layers */}
                  {isOpen && (
                    <div className="pl-8 pr-3 pb-1 space-y-0.5">
                      {group.layers.map(layer => {
                        const on = visibleLayers.has(layer.id)
                        return (
                          <label key={layer.id}
                            className="flex items-center gap-2 py-1.5 px-2 rounded cursor-pointer hover:bg-muted/50 group"
                            onClick={e => { e.preventDefault(); toggleLayer(layer.id) }}>
                            <input type="checkbox" checked={on} readOnly className="sr-only" />
                            {/* custom checkbox */}
                            <span className={cn(
                              "w-3.5 h-3.5 rounded border-2 shrink-0 flex items-center justify-center transition-colors",
                              on ? "border-transparent" : "border-muted-foreground"
                            )}
                              style={{ backgroundColor: on ? layer.color : undefined }}>
                              {on && <span className="block w-1.5 h-1 border-b-2 border-l-2 border-white -rotate-45 -mt-0.5" />}
                            </span>
                            {/* color dot */}
                            <span className="w-2 h-2 rounded-full shrink-0"
                              style={{ backgroundColor: layer.color }} />
                            <span className={cn("text-xs leading-tight flex-1", on ? "text-foreground" : "text-muted-foreground")}>
                              {layer.label}
                            </span>
                            {layerCounts[layer.id] != null && (
                              <span className="text-xs text-muted-foreground ml-auto shrink-0 tabular-nums">
                                {layerCounts[layer.id].toLocaleString("ru")}
                              </span>
                            )}
                          </label>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          )}

          {/* legend + cache refresh — always visible */}
          {subTab === "map" && (
            <>
              <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-0.5 rounded" style={{ backgroundColor: "#3b82f6" }} />
                  линия — линейный объект
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded opacity-40" style={{ backgroundColor: "#3b82f6" }} />
                  полигон — площадной объект
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#06d6a0" }} />
                  точка — точечный объект
                </div>
              </div>
              <div className="px-4 py-3 border-t border-border">
                <button
                  onClick={() => { clearGeoCache(); window.location.reload() }}
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors w-full"
                >
                  <RefreshCw className="h-3 w-3" />
                  Обновить кеш карты
                </button>
              </div>
            </>
          )}

          {/* Sidebar loading block */}
          {isMapLoading && (
            <div className="absolute inset-0 z-10 bg-card/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 cursor-not-allowed select-none">
              <div className="w-5 h-5 rounded-full border-2 border-border border-t-green-500 animate-spin" />
              <span className="text-xs text-muted-foreground text-center px-4">Загрузка данных…</span>
            </div>
          )}
        </aside>

        {/* Map */}
        <main className="flex-1 relative">
          <EcoAlmatyMap
            visibleLayers={visibleLayers}
            centerCoords={centerCoords}
            activeGroup={activeGroup}
            showDistricts={showDistricts}
            selectedDistrict={selectedDistrict}
            onDistrictChange={setSelectedDistrict}
            onLayerLoad={(id, count) => setLayerCounts(prev => ({ ...prev, [id]: count }))}
            onLoadingChange={setIsMapLoading}
          />
          {/* Search bar overlay */}
          <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", zIndex: 40, pointerEvents: "auto" }}>
            <MapSearch onSelect={coords => setCenterCoords(coords)} />
          </div>
        </main>
      </div>
      )}
    </div>
  )
}
