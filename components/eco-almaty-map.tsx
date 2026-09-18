"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useTheme } from "next-themes"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const API = process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"

// ── layer config ───────────────────────────────────────────────────────────
export const LAYERS = [
  { id: "ponds",       label: "Пруды",                  group: "water",    color: "#3b82f6", kind: "fill",  endpoint: "eco-water/ponds" },
  { id: "lakes",       label: "Озёра",                  group: "water",    color: "#1d4ed8", kind: "fill",  endpoint: "eco-water/lakes" },
  { id: "reservoirs",  label: "Водохранилища",          group: "water",    color: "#1e40af", kind: "fill",  endpoint: "eco-water/reservoirs" },
  { id: "rivers",      label: "Реки",                   group: "water",    color: "#2563eb", kind: "line",  endpoint: "eco-water/rivers" },
  { id: "channels",    label: "Каналы",                 group: "water",    color: "#0891b2", kind: "line",  endpoint: "eco-water/channels" },
  { id: "ditches",     label: "Арычная сеть",           group: "water",    color: "#06b6d4", kind: "line",  endpoint: "eco-water/ditch-networks" },
  { id: "strips",      label: "Водоохр. полосы",        group: "water",    color: "#67e8f9", kind: "fill",  endpoint: "eco-water/protection-strips" },
  { id: "hydraulic",   label: "Гидросооружения",        group: "water",    color: "#0284c7", kind: "point", endpoint: "eco-water/hydraulic-structures" },
  { id: "fountains",   label: "Фонтаны",                group: "fountain", color: "#06d6a0", kind: "point", endpoint: "eco-fountain/fountains", centroid: true },
  { id: "waste-sites", label: "Площадки ТКО",           group: "waste",    color: "#f97316", kind: "point", endpoint: "eco-waste/municipal-sites" },
  { id: "kgo-zones",   label: "Зоны КГО",               group: "waste",    color: "#ea580c", kind: "fill",  endpoint: "eco-waste/kgo-zones" },
  { id: "plants-1", label: "Деревья",             group: "green", color: "#15803d", kind: "point", endpoint: "", plantTiles: true as const, plantType: 1 },
  { id: "plants-2", label: "Кустарники",          group: "green", color: "#4ade80", kind: "point", endpoint: "", plantTiles: true as const, plantType: 2 },
  { id: "plants-3", label: "Куртина (деревья)",   group: "green", color: "#166534", kind: "point", endpoint: "", plantTiles: true as const, plantType: 3 },
  { id: "plants-4", label: "Куртина (кустарники)",group: "green", color: "#86efac", kind: "point", endpoint: "", plantTiles: true as const, plantType: 4 },
  { id: "plants-5", label: "Живая изгородь",      group: "green", color: "#22c55e", kind: "point", endpoint: "", plantTiles: true as const, plantType: 5 },
  { id: "plants-6", label: "Цветник",             group: "green", color: "#f472b6", kind: "point", endpoint: "", plantTiles: true as const, plantType: 6 },
  { id: "plants-7", label: "Газон",               group: "green", color: "#a3e635", kind: "point", endpoint: "", plantTiles: true as const, plantType: 7 },
  { id: "plants-8", label: "Лиана",               group: "green", color: "#84cc16", kind: "point", endpoint: "", plantTiles: true as const, plantType: 8 },
] as const

type LayerId = (typeof LAYERS)[number]["id"]

// ── DRF paginated fetch with module-level cache ────────────────────────────
const geoCache = new Map<string, { features: GeoJSON.Feature[]; ts: number }>()
const GEO_TTL = 60 * 60 * 1000 // 1 hour — persists across tab switches in the same session
export function clearGeoCache() { geoCache.clear() }

// kind drives geometry field priority:
//   "point" → centroid first (API often puts point geom there)
//   "fill"/"line" → geometry first (polygon/linestring is the real shape)
async function fetchAll(endpoint: string, kind: "point" | "fill" | "line" = "point"): Promise<GeoJSON.Feature[]> {
  const cacheKey = `${endpoint}:${kind}`
  const hit = geoCache.get(cacheKey)
  if (hit && Date.now() - hit.ts < GEO_TTL) return hit.features

  const results: GeoJSON.Feature[] = []
  let url: string | null = `${API}/ecology/${endpoint}/?format=json&limit=500`
  while (url) {
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(url, { headers: { Accept: "application/json" } })
    if (!response.ok) break
    // eslint-disable-next-line no-await-in-loop
    const payload = await response.json() as Record<string, unknown> | unknown[]
    const items: unknown[] = Array.isArray(payload) ? payload : ((payload.results as unknown[]) ?? [])
    for (const item of items) {
      const obj = item as Record<string, unknown>
      const rawGeom = (
        kind === "point"
          ? (obj.centroid ?? obj.geometry)   // point layers: centroid preferred
          : (obj.geometry ?? obj.centroid)    // fill/line layers: real geometry preferred
      ) as GeoJSON.Geometry | null
      if (!rawGeom) continue
      results.push({
        type: "Feature",
        geometry: rawGeom,
        properties: { ...obj, geometry: undefined, centroid: undefined },
      })
    }
    url = Array.isArray(payload) ? null : ((payload.next as string | null) ?? null)
  }
  geoCache.set(cacheKey, { features: results, ts: Date.now() })
  return results
}

// ── popup helper ───────────────────────────────────────────────────────────
const PLANT_TYPE_LABEL: Record<number, string> = {
  1: "Дерево",
  2: "Кустарник",
  3: "Куртина (Деревья)",
  4: "Куртина (Кустарники)",
  5: "Живая изгородь",
  6: "Цветник",
  7: "Газон",
  8: "Лиана",
}

const FIELD_LABELS: Record<string, string> = {
  plant_type:  "Тип",
  external_id: "ID",
  sanitary_id: "Санитарное состояние",
  redbook:     "Краснокнижный",
  pine:        "Хвойное",
}

function formatValue(key: string, val: unknown): string {
  if (key === "plant_type") return PLANT_TYPE_LABEL[val as number] ?? String(val)
  if (key === "redbook" || key === "pine") return val === 1 || val === true ? "Да" : "Нет"
  return String(val)
}

const SANITARY_LABEL: Record<number, string> = {
  1: "Здоровые (КСО-1)",
  2: "Ослабленные (КСО-2)",
  3: "Угнетённые (КСО-3)",
  4: "Усыхающие (КСО-4)",
  5: "Сухостой (КСО-5)",
  6: "Аварийное (КСО-5)",
  7: "Хорошее (КСО-2)",
}

function sanitaryColor(id: number): string {
  const m: Record<number, string> = {
    1: "#16a34a", // зелёный — здоровые
    2: "#ca8a04", // жёлтый — ослабленные
    3: "#ea580c", // оранжевый — угнетённые
    4: "#dc2626", // красный — усыхающие
    5: "#78716c", // серо-коричневый — сухостой
    6: "#b91c1c", // тёмно-красный — аварийное
    7: "#22c55e", // светло-зелёный — хорошее
  }
  return m[id] ?? "#6b7280"
}

function makePopupHtml(props: Record<string, unknown>, label: string): string {
  const skip = new Set(["geometry", "centroid", "id"])
  const rows = Object.entries(props)
    .filter(([k, v]) => !skip.has(k) && v !== null && v !== undefined && v !== "")
    .slice(0, 12)
    .map(([k, v]) => {
      const fieldLabel = FIELD_LABELS[k] ?? k
      return `<tr><td style="color:#666;padding:3px 10px 3px 0;white-space:nowrap">${fieldLabel}</td><td style="font-weight:600;color:#111">${formatValue(k, v)}</td></tr>`
    })
    .join("")
  return `<div style="font-family:Inter,sans-serif;font-size:13px;max-width:280px;background:#fff;color:#111;padding:2px">
    <div style="font-weight:700;margin-bottom:6px;color:#16a34a">${label}</div>
    <table style="border-collapse:collapse">${rows || "<tr><td style='color:#666'>—</td></tr>"}</table>
  </div>`
}

// ── component ──────────────────────────────────────────────────────────────
interface Props {
  visibleLayers: Set<LayerId>
}

export function EcoAlmatyMap({ visibleLayers }: Props) {
  const mapRef        = useRef<mapboxgl.Map | null>(null)
  const containerRef  = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const [loadedLayers, setLoadedLayers] = useState<Set<string>>(new Set())
  const popupRef = useRef<mapboxgl.Popup | null>(null)
  const [selectedPlant, setSelectedPlant] = useState<{
    label: string; color: string; properties: Record<string, unknown>
  } | null>(null)
  // keep ref in sync so mapbox click handlers (which close over stale deps) can call the setter
  const setSelectedPlantRef = useRef(setSelectedPlant)
  setSelectedPlantRef.current = setSelectedPlant

  // drawer tab
  const [drawerTab, setDrawerTab] = useState<"detail" | "analytics">("detail")

  // analytics stats — loaded once
  type PlantStats = {
    total: number; redbook: number; pine: number
    byType:     { type: number; count: number }[]
    bySanitary: { id: number;   count: number }[]
  }
  const [stats, setStats] = useState<PlantStats | null>(null)
  useEffect(() => {
    fetch(`${API}/ecology/eco-green/plants/stats/`)
      .then(r => r.ok ? r.json() : null)
      .then((d: PlantStats | null) => { if (d) setStats(d) })
      .catch(() => {})
  }, [])

  // full detail fetched from DB on click (independent of what's in the tile)
  const [fullDetail, setFullDetail] = useState<Record<string, unknown> | null>(null)
  useEffect(() => {
    const extId = selectedPlant?.properties?.external_id
    if (!extId) { setFullDetail(null); return }
    const ctrl = new AbortController()
    setFullDetail(null)
    fetch(`${API}/ecology/eco-green/plants/${extId}/detail/`, { signal: ctrl.signal })
      .then(r => r.ok ? r.json() : null)
      .then((data: Record<string, unknown> | null) => { if (data) setFullDetail(data) })
      .catch(() => {})
    return () => ctrl.abort()
  }, [selectedPlant?.properties?.external_id])

  // shared loading overlay — counts in-flight fetches across non-plant layers
  const loadCountRef = useRef(0)
  const [globalLoading, setGlobalLoading] = useState(false)
  const beginLoad = useCallback(() => {
    loadCountRef.current++
    setGlobalLoading(true)
  }, [])
  const endLoad = useCallback(() => {
    loadCountRef.current = Math.max(0, loadCountRef.current - 1)
    if (loadCountRef.current === 0) setGlobalLoading(false)
  }, [])

  // synchronous guard so concurrent loadLayer calls don't double-add layers
  const loadingLayers = useRef<Set<string>>(new Set())

  // Register service worker that caches plant tiles in browser storage (once per session)
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw-plants.js").catch(() => {/* non-fatal */})
    }
  }, [])

  // init map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ""
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: resolvedTheme === "dark"
        ? "mapbox://styles/mapbox/dark-v11"
        : "mapbox://styles/mapbox/light-v11",
      center: [76.945, 43.238],
      zoom: 11.5,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")
    mapRef.current = map
    return () => { map.remove(); mapRef.current = null }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // load & add a single layer
  const loadLayer = useCallback(async (layer: (typeof LAYERS)[number]) => {
    const map = mapRef.current
    if (!map || !map.isStyleLoaded()) return
    if (loadedLayers.has(layer.id) || loadingLayers.current.has(layer.id)) return
    loadingLayers.current.add(layer.id)

    // Plants: all 3 type-layers share one MVT vector source
    if ("plantTiles" in layer && layer.plantTiles) {
      // Add the shared source once
      if (!map.getSource("src-plants")) {
        map.addSource("src-plants", {
          type: "vector",
          tiles: [`${API}/ecology/eco-green/plants/tiles/{z}/{x}/{y}.mvt`],
          minzoom: 0,
          maxzoom: 14,
        })
      }

      const pt = (layer as { plantType: number }).plantType
      const typeFilter: mapboxgl.FilterSpecification = ["==", ["get", "plant_type"], pt]

      // Find first existing non-plant layer to anchor z-order — plants must render below water/waste/fountains
      const nonPlantAnchor = LAYERS
        .filter(l => !("plantTiles" in l))
        .flatMap(l => l.kind === "point" ? [l.id, `${l.id}-clusters`, `${l.id}-count`] : [l.id])
        .find(id => map.getLayer(id))

      if (!map.getLayer(layer.id)) {
        map.addLayer({
          id: layer.id,
          type: "circle",
          source: "src-plants",
          "source-layer": "plants",
          filter: typeFilter,
          paint: {
            "circle-color": layer.color,
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1, 12, 2.5, 16, 6],
            "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 12, 0, 15, 1.5],
            "circle-stroke-color": "#fff",
            "circle-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0.6, 13, 0.9],
          },
        }, nonPlantAnchor)

        map.on("click", layer.id, (e) => {
          const feat = e.features?.[0]; if (!feat) return
          const props = feat.properties as Record<string, unknown>
          popupRef.current?.remove()
          popupRef.current = new mapboxgl.Popup({ maxWidth: "200px", closeButton: false, offset: 8 })
            .setLngLat((feat.geometry as GeoJSON.Point).coordinates as [number, number])
            .setHTML(`<div style="font-family:Inter,sans-serif;font-size:12px;background:#fff;color:#111;padding:4px 6px;border-radius:4px;font-weight:600;color:${layer.color}">${layer.label}</div>`)
            .addTo(map)
          setSelectedPlantRef.current({ label: layer.label, color: layer.color, properties: props })
        })
        map.on("mouseenter", layer.id, () => { map.getCanvas().style.cursor = "pointer" })
        map.on("mouseleave", layer.id, () => { map.getCanvas().style.cursor = "" })
      }

      setLoadedLayers(prev => new Set([...prev, layer.id]))
      return
    }

    if (!layer.endpoint) return
    beginLoad()
    let features: GeoJSON.Feature[] = []
    try {
      features = await fetchAll(layer.endpoint, layer.kind as "point" | "fill" | "line")
    } finally {
      endLoad()
    }
    if (!features.length) return

    const sourceId = `src-${layer.id}`
    if (!map.getSource(sourceId)) {
      map.addSource(sourceId, {
        type: "geojson",
        data: { type: "FeatureCollection", features },
        ...(layer.kind === "point" ? { cluster: true, clusterMaxZoom: 14, clusterRadius: 40 } : {}),
      })
    }

    if (layer.kind === "fill") {
      map.addLayer({ id: layer.id, type: "fill", source: sourceId,
        paint: { "fill-color": layer.color, "fill-opacity": 0.4, "fill-outline-color": layer.color } })
    } else if (layer.kind === "line") {
      map.addLayer({ id: layer.id, type: "line", source: sourceId,
        paint: { "line-color": layer.color, "line-width": 1.5, "line-opacity": 0.8 } })
    } else {
      map.addLayer({ id: `${layer.id}-clusters`, type: "circle", source: sourceId,
        filter: ["has", "point_count"],
        paint: { "circle-color": layer.color,
          "circle-radius": ["step", ["get", "point_count"], 16, 10, 22, 100, 28],
          "circle-stroke-width": 2, "circle-stroke-color": "#fff" } })
      map.addLayer({ id: `${layer.id}-count`, type: "symbol", source: sourceId,
        filter: ["has", "point_count"],
        layout: { "text-field": ["get", "point_count_abbreviated"], "text-size": 11,
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"] },
        paint: { "text-color": "#fff" } })
      map.addLayer({ id: layer.id, type: "circle", source: sourceId,
        filter: ["!", ["has", "point_count"]],
        paint: { "circle-color": layer.color, "circle-radius": 6,
          "circle-stroke-width": 1.5, "circle-stroke-color": "#fff" } })

      map.on("click", layer.id, (e) => {
        const feat = e.features?.[0]; if (!feat) return
        popupRef.current?.remove()
        popupRef.current = new mapboxgl.Popup({ maxWidth: "300px" })
          .setLngLat((feat.geometry as GeoJSON.Point).coordinates as [number, number])
          .setHTML(makePopupHtml(feat.properties as Record<string, unknown>, layer.label))
          .addTo(map)
      })
      map.on("mouseenter", layer.id, () => { map.getCanvas().style.cursor = "pointer" })
      map.on("mouseleave", layer.id, () => { map.getCanvas().style.cursor = "" })
      map.on("click", `${layer.id}-clusters`, (e) => {
        const feat = e.features?.[0]; if (!feat) return
        const src = map.getSource(sourceId) as mapboxgl.GeoJSONSource
        src.getClusterExpansionZoom(feat.properties!.cluster_id, (err, zoom) => {
          if (err) return
          map.easeTo({ center: (feat.geometry as GeoJSON.Point).coordinates as [number, number], zoom: zoom! })
        })
      })
    }

    if (layer.kind !== "point") {
      map.on("click", layer.id, (e) => {
        const feat = e.features?.[0]; if (!feat) return
        popupRef.current?.remove()
        popupRef.current = new mapboxgl.Popup({ maxWidth: "300px" })
          .setLngLat(e.lngLat)
          .setHTML(makePopupHtml(feat.properties as Record<string, unknown>, layer.label))
          .addTo(map)
      })
    }

    setLoadedLayers(prev => new Set([...prev, layer.id]))
  }, [loadedLayers, beginLoad, endLoad])

  // toggle layer visibility & trigger load
  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    LAYERS.forEach(layer => {
      const isPlants = "plantTiles" in layer && layer.plantTiles
      const vis = visibleLayers.has(layer.id) ? "visible" : "none"
      const ids = isPlants
        ? [layer.id]
        : layer.kind === "point"
          ? [layer.id, `${layer.id}-clusters`, `${layer.id}-count`]
          : [layer.id]
      ids.forEach(id => { if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", vis) })
      if (visibleLayers.has(layer.id) && !loadedLayers.has(layer.id)) {
        if (map.isStyleLoaded()) loadLayer(layer)
        else map.once("load", () => loadLayer(layer))
      }
    })
  }, [visibleLayers, loadedLayers, loadLayer])

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />

      {/* Plant detail drawer */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0,
        width: 380, zIndex: 50,
        transform: selectedPlant ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
        background: "#fff",
        boxShadow: "-4px 0 32px rgba(0,0,0,0.18)",
        display: "flex", flexDirection: "column",
        fontFamily: "Inter,sans-serif",
        overflow: "hidden",
        pointerEvents: selectedPlant ? "auto" : "none",
      }}>
        {selectedPlant && (() => {
          const tileProps = selectedPlant.properties
          // prefer freshly fetched DB data; fall back to tile properties while loading
          const p: Record<string, unknown> = fullDetail ?? tileProps
          const loading = !fullDetail
          const sanitaryId = typeof p.sanitary_id === "number" ? p.sanitary_id : parseInt(String(p.sanitary_id ?? ""), 10)
          const sanitaryLabel = !isNaN(sanitaryId) ? SANITARY_LABEL[sanitaryId] : null
          const sanitaryClr  = !isNaN(sanitaryId) ? sanitaryColor(sanitaryId) : "#6b7280"
          const rows: { label: string; value: string; accent?: string }[] = [
            { label: "Тип", value: PLANT_TYPE_LABEL[p.plant_type as number] ?? String(p.plant_type ?? "—") },
            { label: "ID",  value: p.external_id != null ? String(p.external_id) : "—" },
          ]
          if (sanitaryLabel) rows.push({ label: "Сан. состояние", value: sanitaryLabel, accent: sanitaryClr })
          if (p.redbook != null) rows.push({ label: "Краснокнижный", value: (p.redbook === 1 || p.redbook === true) ? "Да" : "Нет", accent: (p.redbook === 1 || p.redbook === true) ? "#dc2626" : undefined })
          if (p.pine    != null) rows.push({ label: "Хвойное",       value: (p.pine    === 1 || p.pine    === true) ? "Да" : "Нет" })
          return (
            <>
              {/* header */}
              <div style={{
                padding: "14px 18px 0",
                borderBottom: "1px solid #e5e7eb",
                background: "#f9fafb",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{
                      width: 13, height: 13, borderRadius: "50%",
                      background: selectedPlant.color, flexShrink: 0,
                      boxShadow: "0 0 0 2px rgba(0,0,0,0.08)",
                    }} />
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#111", lineHeight: 1.2 }}>{selectedPlant.label}</div>
                      {tileProps.external_id != null && (
                        <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>ID {String(tileProps.external_id)}</div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => { setSelectedPlant(null); setFullDetail(null); popupRef.current?.remove(); setDrawerTab("detail") }}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 6px", borderRadius: 6, color: "#9ca3af", fontSize: 16, lineHeight: 1 }}
                    aria-label="Закрыть"
                  >✕</button>
                </div>
                {/* tabs */}
                <div style={{ display: "flex", gap: 0 }}>
                  {(["detail", "analytics"] as const).map(tab => (
                    <button key={tab} onClick={() => setDrawerTab(tab)} style={{
                      background: "none", border: "none", cursor: "pointer",
                      padding: "6px 14px", fontSize: 13, fontWeight: drawerTab === tab ? 600 : 400,
                      color: drawerTab === tab ? "#16a34a" : "#9ca3af",
                      borderBottom: drawerTab === tab ? "2px solid #16a34a" : "2px solid transparent",
                      marginBottom: -1, transition: "color 0.15s",
                    }}>
                      {tab === "detail" ? "Объект" : "Аналитика"}
                    </button>
                  ))}
                </div>
              </div>

              {/* tab content */}
              {drawerTab === "detail" ? (
                <div style={{ flex: 1, overflowY: "auto", padding: "16px 18px" }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
                    Зелёные насаждения
                  </div>
                  {loading ? (
                    <div style={{ display: "flex", gap: 6, alignItems: "center", padding: "8px 0", color: "#9ca3af", fontSize: 13 }}>
                      <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #e5e7eb", borderTopColor: "#16a34a", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                      Загрузка…
                    </div>
                  ) : rows.map((row, i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "8px 0",
                      borderBottom: i < rows.length - 1 ? "1px solid #f3f4f6" : "none",
                    }}>
                      <span style={{ fontSize: 13, color: "#6b7280" }}>{row.label}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: row.accent ?? "#111", display: "flex", alignItems: "center", gap: 5 }}>
                        {row.accent && <span style={{ width: 8, height: 8, borderRadius: "50%", background: row.accent, display: "inline-block" }} />}
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ flex: 1, overflowY: "auto", padding: "16px 18px" }}>
                  {!stats ? (
                    <div style={{ display: "flex", gap: 6, alignItems: "center", color: "#9ca3af", fontSize: 13 }}>
                      <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #e5e7eb", borderTopColor: "#16a34a", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                      Загрузка статистики…
                    </div>
                  ) : (() => {
                    const fmt = (n: number) => n.toLocaleString("ru-RU")
                    const typeColors: Record<number, string> = { 1:"#15803d",2:"#4ade80",3:"#166534",4:"#86efac",5:"#22c55e",6:"#f472b6",7:"#a3e635",8:"#84cc16" }
                    const maxType = Math.max(...stats.byType.map(r => r.count))
                    const maxSan  = Math.max(...stats.bySanitary.map(r => r.count))
                    return (
                      <>
                        {/* totals */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
                          {[
                            { label: "Всего",        value: fmt(stats.total),   color: "#16a34a" },
                            { label: "Краснокнижных", value: fmt(stats.redbook), color: "#dc2626" },
                            { label: "Хвойных",      value: fmt(stats.pine),    color: "#0891b2" },
                          ].map(c => (
                            <div key={c.label} style={{ background: "#f9fafb", borderRadius: 10, padding: "10px 8px", textAlign: "center" }}>
                              <div style={{ fontSize: 16, fontWeight: 700, color: c.color }}>{c.value}</div>
                              <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 2 }}>{c.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* by type */}
                        <div style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>По типу</div>
                        {stats.byType.map(r => (
                          <div key={r.type} style={{ marginBottom: 7 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 3 }}>
                              <span style={{ color: "#374151" }}>{PLANT_TYPE_LABEL[r.type] ?? `Тип ${r.type}`}</span>
                              <span style={{ color: "#6b7280", fontWeight: 600 }}>{fmt(r.count)}</span>
                            </div>
                            <div style={{ height: 5, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
                              <div style={{ height: "100%", width: `${(r.count / maxType) * 100}%`, background: typeColors[r.type] ?? "#16a34a", borderRadius: 3 }} />
                            </div>
                          </div>
                        ))}

                        {/* by sanitary */}
                        <div style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", margin: "16px 0 8px" }}>Санитарное состояние</div>
                        {stats.bySanitary.map(r => (
                          <div key={r.id} style={{ marginBottom: 7 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 3 }}>
                              <span style={{ color: "#374151", display: "flex", alignItems: "center", gap: 5 }}>
                                <span style={{ width: 7, height: 7, borderRadius: "50%", background: sanitaryColor(r.id), display: "inline-block" }} />
                                {SANITARY_LABEL[r.id] ?? `КСО-${r.id}`}
                              </span>
                              <span style={{ color: "#6b7280", fontWeight: 600 }}>{fmt(r.count)}</span>
                            </div>
                            <div style={{ height: 5, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
                              <div style={{ height: "100%", width: `${(r.count / maxSan) * 100}%`, background: sanitaryColor(r.id), borderRadius: 3 }} />
                            </div>
                          </div>
                        ))}
                      </>
                    )
                  })()}
                </div>
              )}
            </>
          )
        })()}
      </div>

      {/* Full-screen overlay — blocks interaction while non-plant layers load */}
      {globalLoading && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 100,
          backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
          background: "rgba(0,0,0,0.35)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 16, cursor: "wait",
        }}>
          <style>{`
            @keyframes spin  { to { transform: rotate(360deg) } }
            @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.4 } }
          `}</style>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            border: "4px solid rgba(255,255,255,0.15)",
            borderTopColor: "#16a34a",
            animation: "spin 0.8s linear infinite",
          }} />
          <div style={{ textAlign: "center", color: "#fff", fontFamily: "Inter,sans-serif" }}>
            <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: 0.2 }}>Загрузка данных карты</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 4, animation: "pulse 1.5s ease-in-out infinite" }}>
              Пожалуйста, подождите…
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
