"use client"

import dynamic from "next/dynamic"
import { useState, useCallback } from "react"
import { HeaderMenu } from "@/components/header-menu"
import { LAYERS } from "@/components/eco-almaty-map"
import { EcoAlmatyAnalytics } from "@/components/eco-almaty-analytics"
import { clearGeoCache } from "@/components/eco-almaty-map"
import { Droplets, Waves, Trash2, TreePine, ChevronDown, ChevronRight, Map, BarChart2, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

const EcoAlmatyMap = dynamic(
  () => import("@/components/eco-almaty-map").then(m => ({ default: m.EcoAlmatyMap })),
  { ssr: false }
)

type LayerId = (typeof LAYERS)[number]["id"]

const GROUP_META = {
  water:    { label: "Водные объекты",      icon: Droplets, color: "#3b82f6" },
  fountain: { label: "Фонтаны",            icon: Waves,    color: "#06d6a0" },
  waste:    { label: "Отходы",             icon: Trash2,   color: "#f97316" },
  green:    { label: "Зелёные насаждения", icon: TreePine, color: "#16a34a" },
} as const

type GroupKey = keyof typeof GROUP_META

type SubTab = "map" | "analytics"

export default function EcoAlmatyPage() {
  const [subTab, setSubTab] = useState<SubTab>("map")
  const [visibleLayers, setVisibleLayers] = useState<Set<LayerId>>(
    new Set(["waste-sites", "fountains", "ponds", "lakes", "rivers", "plants-1", "plants-2", "plants-3", "plants-4", "plants-5", "plants-6", "plants-7", "plants-8"])
  )
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

  const groups = (Object.keys(GROUP_META) as GroupKey[]).map(g => ({
    key: g,
    ...GROUP_META[g],
    layers: LAYERS.filter(l => l.group === g),
  }))

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <HeaderMenu />

      {/* sub-navigation */}
      <div className="flex items-center gap-1 px-4 border-b border-border bg-card shrink-0">
        {([
          { key: "map",       label: "Карта",      Icon: Map },
          { key: "analytics", label: "Аналитика",  Icon: BarChart2 },
        ] as { key: SubTab; label: string; Icon: React.ElementType }[]).map(({ key, label, Icon }) => (
          <button key={key} onClick={() => setSubTab(key)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2.5 text-sm border-b-2 transition-colors",
              subTab === key
                ? "border-green-600 text-foreground font-medium"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}>
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {subTab === "analytics" ? (
        <EcoAlmatyAnalytics />
      ) : (
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 border-r border-border bg-card flex flex-col overflow-y-auto">
          <div className="px-4 py-3 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">Слои</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Выберите данные для отображения</p>
          </div>

          <div className="flex-1 py-2">
            {groups.map(group => {
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
                            className="flex items-center gap-2 py-1.5 px-2 rounded cursor-pointer hover:bg-muted/50 group">
                            <input type="checkbox" checked={on}
                              onChange={() => toggleLayer(layer.id)}
                              className="sr-only" />
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
                            <span className={cn("text-xs leading-tight", on ? "text-foreground" : "text-muted-foreground")}>
                              {layer.label}
                            </span>
                          </label>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* legend */}
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

          {/* cache refresh */}
          <div className="px-4 py-3 border-t border-border">
            <button
              onClick={() => { clearGeoCache(); window.location.reload() }}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors w-full"
            >
              <RefreshCw className="h-3 w-3" />
              Обновить кеш карты
            </button>
          </div>
        </aside>

        {/* Map */}
        <main className="flex-1 relative">
          <EcoAlmatyMap visibleLayers={visibleLayers} />
        </main>
      </div>
      )}
    </div>
  )
}
