"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import type { CSSProperties, ReactNode } from "react"
import { useTheme } from "next-themes"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { LocationPickerModal } from "./eco-almaty-location-picker"

import { API_BASE as API } from "@/lib/api"

// ── layer config ───────────────────────────────────────────────────────────
export const LAYERS = [
  { id: "ponds",              label: "Пруды",                         group: "water",    color: "#3b82f6", kind: "fill",  endpoint: "eco-water/ponds" },
  { id: "lakes",              label: "Озёра",                         group: "water",    color: "#1d4ed8", kind: "fill",  endpoint: "eco-water/lakes" },
  { id: "reservoirs",         label: "Водохранилища",                 group: "water",    color: "#1e40af", kind: "fill",  endpoint: "eco-water/reservoirs" },
  { id: "rivers",             label: "Реки",                          group: "water",    color: "#2563eb", kind: "line",  endpoint: "eco-water/rivers" },
  { id: "channels",           label: "Каналы",                        group: "water",    color: "#0891b2", kind: "line",  endpoint: "eco-water/channels" },
  { id: "ditches",            label: "Арычная сеть",                  group: "water",    color: "#06b6d4", kind: "line",  endpoint: "eco-water/ditch-networks" },
  { id: "strips",             label: "Водоохр. полосы",               group: "water",    color: "#67e8f9", kind: "fill",  endpoint: "eco-water/protection-strips" },
  { id: "hydraulic",          label: "Гидросооружения",               group: "water",    color: "#0284c7", kind: "point", endpoint: "eco-water/hydraulic-structures" },
  { id: "fountains",          label: "Фонтаны",                       group: "fountain", color: "#06d6a0", kind: "point", endpoint: "eco-fountain/fountains", centroid: true },
  { id: "waste-sites",        label: "Площадки ТКО",                  group: "waste",    color: "#f97316", kind: "point", endpoint: "eco-waste/municipal-sites" },
  { id: "kgo-zones",          label: "Зоны КГО",                      group: "waste",    color: "#ea580c", kind: "fill",  endpoint: "eco-waste/kgo-zones" },
  { id: "waste-separate",     label: "Контейнеры раздельного сбора",  group: "waste",    color: "#3b82f6", kind: "point", endpoint: "eco-waste/separate-containers" },
  { id: "waste-recycle-pts",  label: "Пункты приёма вторсырья",       group: "waste",    color: "#f59e0b", kind: "point", endpoint: "eco-waste/recycling-points" },
  { id: "waste-sorting",      label: "Предприятия по сортировке",     group: "waste",    color: "#8b5cf6", kind: "point", endpoint: "eco-waste/sorting-enterprises" },
  { id: "waste-processing",   label: "Предприятия по переработке",    group: "waste",    color: "#ec4899", kind: "point", endpoint: "eco-waste/processing-enterprises" },
  { id: "waste-utilization",  label: "Предприятия по утилизации",     group: "waste",    color: "#dc2626", kind: "point", endpoint: "eco-waste/utilization-enterprises" },
  { id: "waste-burial",       label: "Объекты захоронения",           group: "waste",    color: "#78716c", kind: "point", endpoint: "eco-waste/burial-sites" },
  { id: "plants-1", label: "Деревья",              group: "green", color: "#15803d", kind: "point", endpoint: "", plantTiles: true as const, plantType: 1 },
  { id: "plants-2", label: "Кустарники",           group: "green", color: "#4ade80", kind: "point", endpoint: "", plantTiles: true as const, plantType: 2 },
  { id: "plants-3", label: "Куртина (деревья)",    group: "green", color: "#166534", kind: "point", endpoint: "", plantTiles: true as const, plantType: 3 },
  { id: "plants-4", label: "Куртина (кустарники)", group: "green", color: "#86efac", kind: "point", endpoint: "", plantTiles: true as const, plantType: 4 },
  { id: "plants-5", label: "Живая изгородь",       group: "green", color: "#22c55e", kind: "point", endpoint: "", plantTiles: true as const, plantType: 5 },
  { id: "plants-6", label: "Цветник",              group: "green", color: "#f472b6", kind: "point", endpoint: "", plantTiles: true as const, plantType: 6 },
  { id: "plants-7", label: "Газон",                group: "green", color: "#a3e635", kind: "point", endpoint: "", plantTiles: true as const, plantType: 7 },
  { id: "plants-8", label: "Лиана",                group: "green", color: "#84cc16", kind: "point", endpoint: "", plantTiles: true as const, plantType: 8 },
] as const

type LayerId = (typeof LAYERS)[number]["id"]

// ── DRF paginated fetch with module-level cache ────────────────────────────
const geoCache = new Map<string, { features: GeoJSON.Feature[]; ts: number }>()
const GEO_TTL = 60 * 60 * 1000
const LS_PREFIX = "eco_geo:"

export function clearGeoCache() {
  geoCache.clear()
  try {
    Object.keys(localStorage)
      .filter(k => k.startsWith(LS_PREFIX))
      .forEach(k => localStorage.removeItem(k))
  } catch { /* non-fatal */ }
}

type FetchResult = { features: GeoJSON.Feature[]; kb: number; cached: boolean }

async function fetchAll(endpoint: string, kind: "point" | "fill" | "line" = "point"): Promise<FetchResult> {
  const cacheKey = `${endpoint}:${kind}`
  const lsKey    = `${LS_PREFIX}${cacheKey}`

  const hit = geoCache.get(cacheKey)
  if (hit && Date.now() - hit.ts < GEO_TTL) {
    const kb = Math.round(JSON.stringify(hit.features).length / 1024)
    return { features: hit.features, kb, cached: true }
  }

  try {
    const raw = localStorage.getItem(lsKey)
    if (raw) {
      const stored = JSON.parse(raw) as { features: GeoJSON.Feature[]; ts: number }
      if (Date.now() - stored.ts < GEO_TTL) {
        geoCache.set(cacheKey, stored)
        const kb = Math.round(raw.length / 1024)
        return { features: stored.features, kb, cached: true }
      }
    }
  } catch { /* ignore parse / quota errors */ }

  const results: GeoJSON.Feature[] = []
  let totalBytes = 0
  let url: string | null = `${API}/ecology/${endpoint}/?format=json&limit=500`
  while (url) {
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(url, { headers: { Accept: "application/json" } })
    if (!response.ok) break
    // eslint-disable-next-line no-await-in-loop
    const text = await response.text()
    totalBytes += text.length
    let payload: Record<string, unknown> | unknown[]
    try { payload = JSON.parse(text) as Record<string, unknown> | unknown[] } catch { break }
    const items: unknown[] = Array.isArray(payload) ? payload : ((payload.results as unknown[]) ?? [])
    for (const item of items) {
      const obj = item as Record<string, unknown>
      const rawGeom = (
        kind === "point"
          ? (obj.centroid ?? obj.geometry)
          : (obj.geometry ?? obj.centroid)
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

  const entry = { features: results, ts: Date.now() }
  geoCache.set(cacheKey, entry)
  try { localStorage.setItem(lsKey, JSON.stringify(entry)) } catch { /* quota exceeded */ }
  return { features: results, kb: Math.round(totalBytes / 1024), cached: false }
}

// ── Labels / formatters ────────────────────────────────────────────────────
const PLANT_TYPE_LABEL: Record<number, string> = {
  1: "Дерево", 2: "Кустарник", 3: "Куртина (Деревья)",
  4: "Куртина (Кустарники)", 5: "Живая изгородь",
  6: "Цветник", 7: "Газон", 8: "Лиана",
}

const SANITARY_LABEL: Record<number, string> = {
  1: "Здоровые (КСО-1)", 2: "Ослабленные (КСО-2)", 3: "Угнетённые (КСО-3)",
  4: "Усыхающие (КСО-4)", 5: "Сухостой (КСО-5)", 6: "Аварийное (КСО-5)",
  7: "Хорошее (КСО-2)",
}

function sanitaryColor(id: number): string {
  const m: Record<number, string> = {
    1: "#16a34a", 2: "#ca8a04", 3: "#ea580c",
    4: "#dc2626", 5: "#78716c", 6: "#b91c1c", 7: "#22c55e",
  }
  return m[id] ?? "#6b7280"
}

function str(v: unknown, fallback = "—"): string {
  if (v === null || v === undefined || v === "") return fallback
  return String(v)
}

// ── PassportSection ────────────────────────────────────────────────────────
function PassportSection({ title, rows }: {
  title: string
  rows: { label: string; value: string; accent?: string }[]
}) {
  return (
    <div style={{ padding: "14px 18px", borderBottom: "1px solid #f3f4f6" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
        {title}
      </div>
      {rows.map((row, i) => (
        <div key={i} style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: i > 0 ? 8 : 0,
        }}>
          <span style={{ fontSize: 13, color: "#6b7280" }}>{row.label}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: row.accent ?? "#111", display: "flex", alignItems: "center", gap: 5, textAlign: "right", maxWidth: "55%" }}>
            {row.accent && <span style={{ width: 8, height: 8, borderRadius: "50%", background: row.accent, display: "inline-block", flexShrink: 0 }} />}
            {row.value}
          </span>
        </div>
      ))}
    </div>
  )
}

// ── Photo placeholder ──────────────────────────────────────────────────────
function PhotoPlaceholder({ label = "Фото отсутствует" }: { label?: string }) {
  return (
    <div style={{
      height: 150, background: "#f3f4f6", flexShrink: 0,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: 8, color: "#9ca3af", borderBottom: "1px solid #e5e7eb",
    }}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity={0.45}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span style={{ fontSize: 12 }}>{label}</span>
    </div>
  )
}

// ── FormField ──────────────────────────────────────────────────────────────
function FormField({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
        {label}{required && <span style={{ color: "#dc2626", marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

// ── Report form ────────────────────────────────────────────────────────────
const REPORT_TYPES = [
  "Неверное местоположение",
  "Некорректные данные",
  "Изменилось состояние объекта",
  "Отсутствует объект на карте",
  "Фактически объект отсутствует",
  "Другое",
]

const inputStyle: CSSProperties = {
  width: "100%", padding: "9px 12px", border: "1px solid #e5e7eb",
  borderRadius: 8, fontSize: 13, color: "#111", boxSizing: "border-box",
  fontFamily: "Inter,sans-serif",
}

function ReportForm({ extId, typeName, coords: initialCoords, onClose }: {
  extId?: string; typeName?: string; coords?: [number, number]; onClose: () => void
}) {
  const [reportType, setReportType] = useState(0)
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  const [pickedCoords, setPickedCoords] = useState<[number, number] | null>(null)
  const [showPicker, setShowPicker] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const activeCoords = pickedCoords ?? initialCoords

  if (submitted) {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, gap: 16 }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>Обращение отправлено</div>
          <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>Спасибо! Мы рассмотрим ваше обращение.</div>
        </div>
        <button onClick={onClose}
          style={{ padding: "9px 24px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#f9fafb", fontSize: 13, cursor: "pointer", color: "#374151", fontFamily: "Inter,sans-serif" }}>
          Закрыть
        </button>
      </div>
    )
  }

  return (
    <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "16px 18px 80px", flex: 1 }}>
        {(extId || typeName) && (
          <div style={{ fontSize: 12, color: "#6b7280", background: "#f3f4f6", padding: "7px 12px", borderRadius: 8, marginBottom: 16 }}>
            {typeName ?? "Объект"}{extId ? ` · ID ${extId}` : ""}
          </div>
        )}

        <FormField label="Тип обращения" required>
          <select value={reportType} onChange={e => setReportType(Number(e.target.value))}
            style={{ ...inputStyle, background: "#fff" }}>
            {REPORT_TYPES.map((t, i) => <option key={i} value={i}>{t}</option>)}
          </select>
        </FormField>

        <FormField label="Описание">
          <textarea value={description} onChange={e => setDescription(e.target.value)}
            rows={3} placeholder="Опишите ситуацию…"
            style={{ ...inputStyle, resize: "vertical" }} />
        </FormField>

        <FormField label="Фото">
          <div style={{
            border: "1.5px dashed #d1d5db", borderRadius: 8, padding: "20px 16px",
            textAlign: "center", color: "#9ca3af", fontSize: 13, cursor: "pointer", background: "#fafafa",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              style={{ margin: "0 auto 6px", display: "block" }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Нажмите для загрузки
          </div>
        </FormField>

        <FormField label="Адрес">
          <input value={address} onChange={e => setAddress(e.target.value)}
            placeholder="Введите адрес" style={inputStyle} />
        </FormField>

        <FormField label="Координаты">
          <div style={{ display: "flex", gap: 8 }}>
            <input readOnly
              value={activeCoords ? `${activeCoords[1].toFixed(6)}, ${activeCoords[0].toFixed(6)}` : ""}
              placeholder="Не указаны"
              style={{ ...inputStyle, flex: 1, background: "#f9fafb", color: "#6b7280" }} />
            <button
              type="button"
              onClick={() => setShowPicker(true)}
              style={{
                padding: "9px 12px", borderRadius: 8, border: "1px solid #e5e7eb",
                background: "#f9fafb", cursor: "pointer", fontSize: 12, color: "#374151",
                fontFamily: "Inter,sans-serif", whiteSpace: "nowrap", flexShrink: 0,
              }}
            >
              📍 На карте
            </button>
          </div>
        </FormField>

        {showPicker && (
          <LocationPickerModal
            initialCoords={activeCoords ?? [76.945, 43.238]}
            onConfirm={(c, addr) => {
              setPickedCoords(c)
              if (addr && !address) setAddress(addr.split(",")[0])
              setShowPicker(false)
            }}
            onClose={() => setShowPicker(false)}
          />
        )}

        <FormField label="ФИО" required>
          <input value={name} onChange={e => setName(e.target.value)}
            placeholder="Имя и фамилия" style={inputStyle} />
        </FormField>

        <FormField label="Телефон / Email" required>
          <input value={contact} onChange={e => setContact(e.target.value)}
            placeholder="+7 700 000 0000 или email@mail.ru" style={inputStyle} />
        </FormField>
      </div>

      <div style={{ position: "sticky", bottom: 0, background: "#fff", borderTop: "1px solid #e5e7eb", padding: "12px 16px", display: "flex", gap: 8 }}>
        <button onClick={onClose}
          style={{ flex: 1, padding: "9px 0", borderRadius: 8, fontSize: 13, border: "1px solid #e5e7eb", background: "#f9fafb", color: "#6b7280", cursor: "pointer", fontWeight: 500, fontFamily: "Inter,sans-serif" }}>
          Отмена
        </button>
        <button onClick={() => setSubmitted(true)}
          style={{ flex: 1, padding: "9px 0", borderRadius: 8, fontSize: 13, border: "none", background: "#16a34a", color: "#fff", cursor: "pointer", fontWeight: 600, fontFamily: "Inter,sans-serif" }}>
          Отправить
        </button>
      </div>
    </div>
  )
}

// ── Plant passport ─────────────────────────────────────────────────────────
function PlantPassport({ properties, fullDetail }: {
  properties: Record<string, unknown>
  fullDetail: Record<string, unknown> | null
}) {
  const p = fullDetail ?? properties
  const isLoading = fullDetail === null
  const sanitaryId = typeof p.sanitary_id === "number"
    ? p.sanitary_id
    : parseInt(String(p.sanitary_id ?? ""), 10)
  const sanitaryLabel = !isNaN(sanitaryId) ? SANITARY_LABEL[sanitaryId] : null
  const sanitaryClr   = !isNaN(sanitaryId) ? sanitaryColor(sanitaryId) : "#6b7280"
  const isRedbook = p.redbook === 1 || p.redbook === true
  const isPine    = p.pine    === 1 || p.pine    === true
  const typeName  = PLANT_TYPE_LABEL[p.plant_type as number] ?? str(p.plant_type)

  if (isLoading) {
    return (
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <PhotoPlaceholder />
        <div style={{ display: "flex", gap: 6, alignItems: "center", padding: "16px 18px", color: "#9ca3af", fontSize: 13 }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #e5e7eb", borderTopColor: "#16a34a", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
          Загрузка…
        </div>
      </div>
    )
  }

  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      <PhotoPlaceholder />
      <PassportSection title="Основная информация" rows={[
        { label: "Тип объекта", value: typeName },
        { label: "Адрес", value: str(p.address) },
        { label: "Район", value: str(p.district ?? p.district_name) },
      ]} />
      <PassportSection title="Идентификация" rows={[
        { label: "ID объекта", value: str(p.external_id ?? p.id) },
      ]} />
      <PassportSection title="Характеристики" rows={[
        { label: "Порода / вид", value: str(p.species ?? p.breed ?? p.kind_name) },
        { label: "Хвойное", value: isPine ? "Да" : "Нет", accent: isPine ? "#0891b2" : undefined },
        { label: "Краснокнижное", value: isRedbook ? "Да" : "Нет", accent: isRedbook ? "#dc2626" : undefined },
      ]} />
      <PassportSection title="Состояние" rows={[
        { label: "Санитарное состояние", value: sanitaryLabel ?? "—", accent: sanitaryLabel ? sanitaryClr : undefined },
      ]} />
      <PassportSection title="Дополнительная информация" rows={[
        { label: "Комментарий", value: str(p.comment) },
      ]} />
    </div>
  )
}

// ── Waste passport ─────────────────────────────────────────────────────────
function WastePassport({ label, properties }: {
  label: string
  properties: Record<string, unknown>
}) {
  const p = properties
  const address          = str(p.address)
  const district         = str(p.district ?? p.district_name)
  const collectionType   = str(p.type_of_collection ?? p.waste_type ?? p.collection_type ?? p.type)
  const area             = p.area != null ? `${p.area} м²` : "—"
  const containerCount   = str(p.container_count ?? p.containers_count)
  const containerMaterial = str(p.container_material ?? p.material)
  const hasRoof = p.has_roof === true || p.has_roof === 1
    ? "Да"
    : (p.has_roof === false || p.has_roof === 0 ? "Нет" : "—")
  const kgoZone = str(p.kgo_zone)
  const comment = str(p.comment ?? p.description)

  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      <PhotoPlaceholder />
      <PassportSection title="Основная информация" rows={[
        { label: "Тип объекта", value: label },
        { label: "Тип сбора", value: collectionType },
        { label: "Адрес", value: address },
        { label: "Район", value: district },
      ]} />
      <PassportSection title="Идентификация" rows={[
        { label: "ID", value: str(p.external_id ?? p.id) },
      ]} />
      <PassportSection title="Характеристики" rows={[
        { label: "Площадь площадки", value: area },
        { label: "Кол-во контейнеров", value: containerCount },
        { label: "Материал контейнера", value: containerMaterial },
        { label: "Навес", value: hasRoof },
        { label: "Зона для КГО", value: kgoZone },
      ]} />
      <PassportSection title="Дополнительная информация" rows={[
        { label: "Комментарий", value: comment },
      ]} />
    </div>
  )
}

// ── component ──────────────────────────────────────────────────────────────
type SelectedObject = {
  kind: "plant" | "waste"
  label: string
  color: string
  properties: Record<string, unknown>
  coords: [number, number]
}

interface Props {
  visibleLayers: Set<LayerId>
  centerCoords?: [number, number] | null
}

export function EcoAlmatyMap({ visibleLayers, centerCoords }: Props) {
  const mapRef        = useRef<mapboxgl.Map | null>(null)
  const containerRef  = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const [loadedLayers, setLoadedLayers] = useState<Set<string>>(new Set())
  const popupRef = useRef<mapboxgl.Popup | null>(null)
  const visibleLayersRef = useRef(visibleLayers)
  useEffect(() => { visibleLayersRef.current = visibleLayers }, [visibleLayers])

  const [selectedObject, setSelectedObject] = useState<SelectedObject | null>(null)
  const setSelectedObjectRef = useRef(setSelectedObject)
  setSelectedObjectRef.current = setSelectedObject

  const [drawerView, setDrawerView] = useState<"passport" | "report">("passport")
  useEffect(() => { setDrawerView("passport") }, [selectedObject])

  const [showStandaloneReport, setShowStandaloneReport] = useState(false)

  const [fullDetail, setFullDetail] = useState<Record<string, unknown> | null>(null)
  useEffect(() => {
    if (selectedObject?.kind !== "plant") { setFullDetail(null); return }
    const extId = selectedObject.properties?.external_id
    if (!extId) { setFullDetail(null); return }
    const ctrl = new AbortController()
    setFullDetail(null)
    fetch(`${API}/ecology/eco-green/plants/${extId}/detail/`, { signal: ctrl.signal })
      .then(r => r.ok ? r.json() : null)
      .then((data: Record<string, unknown> | null) => { if (data) setFullDetail(data) })
      .catch(() => {})
    return () => ctrl.abort()
  }, [selectedObject])

  useEffect(() => {
    if (!centerCoords || !mapRef.current) return
    mapRef.current.flyTo({ center: centerCoords, zoom: Math.max(mapRef.current.getZoom(), 15), duration: 1200 })
  }, [centerCoords])

  type LayerStatus = { label: string; status: "pending" | "loading" | "done" | "cached"; kb: number }
  const [layerProgress, setLayerProgress] = useState<Record<string, LayerStatus>>({})
  const markLayer = useCallback((id: string, label: string, status: LayerStatus["status"], kb = 0) => {
    setLayerProgress(prev => ({ ...prev, [id]: { label, status, kb } }))
  }, [])

  const loadCountRef = useRef(0)
  const mapIdleRef   = useRef(false)
  const [globalLoading, setGlobalLoading] = useState(true)

  const maybeHideLoading = useCallback(() => {
    if (mapIdleRef.current && loadCountRef.current === 0) setGlobalLoading(false)
  }, [])

  const beginLoad = useCallback(() => {
    loadCountRef.current++
    setGlobalLoading(true)
  }, [])
  const endLoad = useCallback(() => {
    loadCountRef.current = Math.max(0, loadCountRef.current - 1)
    maybeHideLoading()
  }, [maybeHideLoading])

  const loadingLayers = useRef<Set<string>>(new Set())

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw-plants.js").catch(() => {/* non-fatal */})
    }
  }, [])

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
    map.on("idle", () => { mapIdleRef.current = true; maybeHideLoading() })
    mapRef.current = map
    return () => { map.remove(); mapRef.current = null; mapIdleRef.current = false }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadLayer = useCallback(async (layer: (typeof LAYERS)[number]) => {
    const map = mapRef.current
    if (!map || !map.isStyleLoaded()) return
    if (loadedLayers.has(layer.id) || loadingLayers.current.has(layer.id)) return
    loadingLayers.current.add(layer.id)

    // ── plant tiles (MVT) ──────────────────────────────────────────────────
    if ("plantTiles" in layer && layer.plantTiles) {
      if (!map.getSource("src-plants")) {
        map.addSource("src-plants", {
          type: "vector",
          tiles: [`${API}/ecology/eco-green/plants/tiles/{z}/{x}/{y}.mvt`],
          minzoom: 8,
          maxzoom: 14,
        })
      }

      if (!map.getLayer("plants-combined")) {
        const PLANT_COLORS: Record<number, string> = {
          1: "#15803d", 2: "#4ade80", 3: "#166534", 4: "#86efac",
          5: "#22c55e", 6: "#f472b6", 7: "#a3e635", 8: "#84cc16",
        }
        const nonPlantAnchor = LAYERS
          .filter(l => !("plantTiles" in l))
          .flatMap(l => l.kind === "point" ? [l.id, `${l.id}-clusters`, `${l.id}-count`] : [l.id])
          .find(id => map.getLayer(id))

        const colorExpr: mapboxgl.ExpressionSpecification = [
          "match", ["get", "plant_type"],
          1, "#15803d", 2, "#4ade80", 3, "#166534", 4, "#86efac",
          5, "#22c55e", 6, "#f472b6", 7, "#a3e635", 8, "#84cc16",
          "#6b7280",
        ]
        const initialTypes = LAYERS
          .filter(l => "plantTiles" in l && visibleLayers.has(l.id))
          .map(l => (l as { plantType: number }).plantType)

        map.addLayer({
          id: "plants-combined",
          type: "circle",
          source: "src-plants",
          "source-layer": "plants",
          minzoom: 8,
          filter: initialTypes.length > 0
            ? (["in", ["get", "plant_type"], ["literal", initialTypes]] as mapboxgl.FilterSpecification)
            : (["literal", false] as mapboxgl.FilterSpecification),
          paint: {
            "circle-color": colorExpr,
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 1.5, 12, 3, 16, 7],
            "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 11, 0, 14, 1.5],
            "circle-stroke-color": "#fff",
            "circle-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0.7, 12, 0.95],
          },
        }, nonPlantAnchor)

        map.on("click", "plants-combined", (e) => {
          const feat = e.features?.[0]; if (!feat) return
          const props = feat.properties as Record<string, unknown>
          const pt = typeof props.plant_type === "number"
            ? props.plant_type
            : parseInt(String(props.plant_type ?? ""), 10)
          const layerMatch = LAYERS.find(l => "plantTiles" in l && (l as { plantType: number }).plantType === pt)
          const label = layerMatch?.label ?? "Насаждение"
          const color = PLANT_COLORS[pt] ?? "#16a34a"
          const coords = (feat.geometry as GeoJSON.Point).coordinates as [number, number]

          const sanitaryId = parseInt(String(props.sanitary_id ?? ""), 10)
          const sanitaryTxt = !isNaN(sanitaryId) ? SANITARY_LABEL[sanitaryId] ?? "" : ""
          const extId = str(props.external_id ?? props.id, "—")

          popupRef.current?.remove()
          popupRef.current = new mapboxgl.Popup({ maxWidth: "240px", closeButton: false, offset: 10 })
            .setLngLat(coords)
            .setHTML(`<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px;min-width:160px">
              <div style="display:flex;align-items:center;gap:7px;margin-bottom:6px">
                <span style="width:10px;height:10px;border-radius:50%;background:${color};flex-shrink:0"></span>
                <span style="font-weight:700;font-size:13px;color:#111">${label}</span>
              </div>
              <div style="font-size:11px;color:#9ca3af;margin-bottom:4px">ID ${extId}</div>
              ${sanitaryTxt ? `<div style="font-size:11px;color:#6b7280">${sanitaryTxt}</div>` : ""}
            </div>`)
            .addTo(map)

          setSelectedObjectRef.current({ kind: "plant", label, color, properties: props, coords })
        })
        map.on("mouseenter", "plants-combined", () => { map.getCanvas().style.cursor = "pointer" })
        map.on("mouseleave", "plants-combined", () => { map.getCanvas().style.cursor = "" })
      }

      markLayer(layer.id, layer.label, "done", 0)
      setLoadedLayers(prev => new Set([...prev, layer.id]))
      return
    }

    if (!layer.endpoint) return
    markLayer(layer.id, layer.label, "loading")
    beginLoad()
    let features: GeoJSON.Feature[] = []; let kb = 0; let cached = false
    try {
      const res = await fetchAll(layer.endpoint, layer.kind as "point" | "fill" | "line")
      features = res.features; kb = res.kb; cached = res.cached
    } finally {
      endLoad()
    }
    markLayer(layer.id, layer.label, cached ? "cached" : "done", kb)
    if (!features.length) {
      setLoadedLayers(prev => new Set([...prev, layer.id]))
      return
    }

    const sourceId = `src-${layer.id}`
    if (!map.getSource(sourceId)) {
      map.addSource(sourceId, {
        type: "geojson",
        data: { type: "FeatureCollection", features },
        ...(layer.kind === "point" ? { cluster: true, clusterMaxZoom: 14, clusterRadius: 40 } : {}),
      })
    }

    const initVis = visibleLayersRef.current.has(layer.id) ? "visible" : "none"
    if (layer.kind === "fill") {
      map.addLayer({ id: layer.id, type: "fill", source: sourceId,
        layout: { visibility: initVis },
        paint: { "fill-color": layer.color, "fill-opacity": 0.4, "fill-outline-color": layer.color } })
    } else if (layer.kind === "line") {
      map.addLayer({ id: layer.id, type: "line", source: sourceId,
        layout: { visibility: initVis },
        paint: { "line-color": layer.color, "line-width": 1.5, "line-opacity": 0.8 } })
    } else {
      // Point layer
      map.addLayer({ id: `${layer.id}-clusters`, type: "circle", source: sourceId,
        filter: ["has", "point_count"],
        layout: { visibility: initVis },
        paint: { "circle-color": layer.color,
          "circle-radius": ["step", ["get", "point_count"], 16, 10, 22, 100, 28],
          "circle-stroke-width": 2, "circle-stroke-color": "#fff" } })
      map.addLayer({ id: `${layer.id}-count`, type: "symbol", source: sourceId,
        filter: ["has", "point_count"],
        layout: { visibility: initVis, "text-field": ["get", "point_count_abbreviated"], "text-size": 11,
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"] },
        paint: { "text-color": "#fff" } })
      map.addLayer({ id: layer.id, type: "circle", source: sourceId,
        filter: ["!", ["has", "point_count"]],
        layout: { visibility: initVis },
        paint: { "circle-color": layer.color, "circle-radius": 6,
          "circle-stroke-width": 1.5, "circle-stroke-color": "#fff" } })

      const isWaste = (layer as { group?: string }).group === "waste"

      map.on("click", layer.id, (e) => {
        const feat = e.features?.[0]; if (!feat) return
        const props = feat.properties as Record<string, unknown>
        const coords = (feat.geometry as GeoJSON.Point).coordinates as [number, number]
        popupRef.current?.remove()

        if (isWaste) {
          const extId = str(props.external_id ?? props.id, "—")
          const addr  = str(props.address, "")
          const dist  = str(props.district ?? props.district_name, "")
          popupRef.current = new mapboxgl.Popup({ maxWidth: "240px", closeButton: false, offset: 10 })
            .setLngLat(coords)
            .setHTML(`<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px;min-width:160px">
              <div style="display:flex;align-items:center;gap:7px;margin-bottom:6px">
                <span style="width:10px;height:10px;border-radius:50%;background:${layer.color};flex-shrink:0"></span>
                <span style="font-weight:700;font-size:13px;color:#111">${layer.label}</span>
              </div>
              ${addr ? `<div style="font-size:12px;color:#6b7280">${addr}${dist ? ", " + dist : ""}</div>` : ""}
              <div style="font-size:11px;color:#9ca3af;margin-top:3px">ID ${extId}</div>
            </div>`)
            .addTo(map)
          setSelectedObjectRef.current({ kind: "waste", label: layer.label, color: layer.color, properties: props, coords })
        } else {
          const rows = Object.entries(props)
            .filter(([, v]) => v !== null && v !== undefined && v !== "")
            .slice(0, 8)
            .map(([k, v]) => `<tr><td style="color:#666;padding:2px 8px 2px 0;font-size:12px">${k}</td><td style="font-weight:600;color:#111;font-size:12px">${String(v)}</td></tr>`)
            .join("")
          popupRef.current = new mapboxgl.Popup({ maxWidth: "300px" })
            .setLngLat(coords)
            .setHTML(`<div style="font-family:Inter,sans-serif;padding:4px">
              <div style="font-weight:700;margin-bottom:6px;color:${layer.color}">${layer.label}</div>
              <table style="border-collapse:collapse">${rows || "<tr><td style='color:#9ca3af'>—</td></tr>"}</table>
            </div>`)
            .addTo(map)
        }
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
        const props = feat.properties as Record<string, unknown>
        const rows = Object.entries(props)
          .filter(([, v]) => v !== null && v !== undefined && v !== "")
          .slice(0, 8)
          .map(([k, v]) => `<tr><td style="color:#666;padding:2px 8px 2px 0;font-size:12px">${k}</td><td style="font-weight:600;color:#111;font-size:12px">${String(v)}</td></tr>`)
          .join("")
        popupRef.current?.remove()
        popupRef.current = new mapboxgl.Popup({ maxWidth: "300px" })
          .setLngLat(e.lngLat)
          .setHTML(`<div style="font-family:Inter,sans-serif;padding:4px">
            <div style="font-weight:700;margin-bottom:6px;color:${layer.color}">${layer.label}</div>
            <table style="border-collapse:collapse">${rows || "<tr><td style='color:#9ca3af'>—</td></tr>"}</table>
          </div>`)
          .addTo(map)
      })
    }

    setLoadedLayers(prev => new Set([...prev, layer.id]))
  }, [loadedLayers, beginLoad, endLoad, markLayer])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    if (map.getLayer("plants-combined")) {
      const visibleTypes = LAYERS
        .filter(l => "plantTiles" in l && visibleLayers.has(l.id))
        .map(l => (l as { plantType: number }).plantType)
      map.setFilter("plants-combined",
        visibleTypes.length > 0
          ? (["in", ["get", "plant_type"], ["literal", visibleTypes]] as mapboxgl.FilterSpecification)
          : (["literal", false] as mapboxgl.FilterSpecification)
      )
    }

    LAYERS.forEach(layer => {
      if ("plantTiles" in layer && layer.plantTiles) {
        if (!loadedLayers.has(layer.id)) {
          if (map.isStyleLoaded()) loadLayer(layer)
          else map.once("load", () => loadLayer(layer))
        }
        return
      }
      const vis = visibleLayers.has(layer.id) ? "visible" : "none"
      const ids = layer.kind === "point"
        ? [layer.id, `${layer.id}-clusters`, `${layer.id}-count`]
        : [layer.id]
      ids.forEach(id => { if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", vis) })
      if (!loadedLayers.has(layer.id)) {
        if (map.isStyleLoaded()) loadLayer(layer)
        else map.once("load", () => loadLayer(layer))
      }
    })
  }, [visibleLayers, loadedLayers, loadLayer])

  const closeDrawer = () => {
    setSelectedObject(null)
    setFullDetail(null)
    popupRef.current?.remove()
    setDrawerView("passport")
  }

  const isDrawerOpen = selectedObject !== null
  const extId = str(selectedObject?.properties?.external_id ?? selectedObject?.properties?.id, "—")

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />

      {/* Floating "Подать обращение" button */}
      <div style={{
        position: "absolute", bottom: 28, left: 16, zIndex: 40,
        transition: "opacity 0.2s",
        opacity: isDrawerOpen ? 0 : 1,
        pointerEvents: isDrawerOpen ? "none" : "auto",
      }}>
        <button
          onClick={() => setShowStandaloneReport(true)}
          style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "10px 18px", borderRadius: 10, border: "none",
            background: "#16a34a", color: "#fff", fontWeight: 600,
            fontSize: 13, cursor: "pointer", fontFamily: "Inter,sans-serif",
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
          </svg>
          Подать обращение
        </button>
      </div>

      {/* Standalone report overlay */}
      {showStandaloneReport && (
        <div style={{ position: "absolute", inset: 0, zIndex: 60, display: "flex", justifyContent: "flex-end" }}>
          <div style={{ width: 380, height: "100%", background: "#fff", display: "flex", flexDirection: "column", boxShadow: "-4px 0 32px rgba(0,0,0,0.18)", fontFamily: "Inter,sans-serif" }}>
            <div style={{ padding: "14px 18px", borderBottom: "1px solid #e5e7eb", background: "#f9fafb", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>Подать обращение</span>
                <button onClick={() => setShowStandaloneReport(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#9ca3af", lineHeight: 1 }}>✕</button>
              </div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>Сообщите о проблеме на карте</div>
            </div>
            <ReportForm onClose={() => setShowStandaloneReport(false)} />
          </div>
        </div>
      )}

      {/* Object passport / report drawer */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0,
        width: 380, zIndex: 50,
        transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
        background: "#fff",
        boxShadow: "-4px 0 32px rgba(0,0,0,0.18)",
        display: "flex", flexDirection: "column",
        fontFamily: "Inter,sans-serif",
        overflow: "hidden",
        pointerEvents: isDrawerOpen ? "auto" : "none",
      }}>
        {selectedObject && (
          <>
            {/* Drawer header */}
            <div style={{
              padding: "14px 18px 0", borderBottom: "1px solid #e5e7eb",
              background: "#f9fafb", flexShrink: 0,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  {drawerView === "report" ? (
                    <button
                      onClick={() => setDrawerView("passport")}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 6px", borderRadius: 6, color: "#6b7280", fontSize: 13, fontFamily: "Inter,sans-serif", whiteSpace: "nowrap" }}
                    >
                      ← Назад
                    </button>
                  ) : (
                    <>
                      <span style={{ width: 13, height: 13, borderRadius: "50%", background: selectedObject.color, flexShrink: 0, boxShadow: "0 0 0 2px rgba(0,0,0,0.08)" }} />
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#111", lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {selectedObject.label}
                        </div>
                        <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>ID {extId}</div>
                      </div>
                    </>
                  )}
                </div>
                <button
                  onClick={closeDrawer}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 6px", borderRadius: 6, color: "#9ca3af", fontSize: 16, lineHeight: 1, flexShrink: 0 }}
                  aria-label="Закрыть"
                >✕</button>
              </div>

              {drawerView === "passport" && (
                <div style={{ paddingBottom: 8 }}>
                  <span style={{
                    fontSize: 13, fontWeight: 600,
                    color: selectedObject.kind === "plant" ? "#16a34a" : "#f97316",
                    borderBottom: `2px solid ${selectedObject.kind === "plant" ? "#16a34a" : "#f97316"}`,
                    paddingBottom: 6, display: "inline-block",
                  }}>Паспорт объекта</span>
                </div>
              )}

              {drawerView === "report" && (
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111", paddingBottom: 10 }}>
                  Оставить обращение
                </div>
              )}
            </div>

            {/* Report view */}
            {drawerView === "report" && (
              <ReportForm
                extId={extId}
                typeName={selectedObject.label}
                coords={selectedObject.coords}
                onClose={() => setDrawerView("passport")}
              />
            )}

            {/* Passport view */}
            {drawerView === "passport" && (
              <>
                {selectedObject.kind === "plant" ? (
                  <PlantPassport properties={selectedObject.properties} fullDetail={fullDetail} />
                ) : (
                  <WastePassport label={selectedObject.label} properties={selectedObject.properties} />
                )}

                <div style={{
                  borderTop: "1px solid #e5e7eb",
                  padding: "12px 16px", display: "flex", gap: 8, flexShrink: 0,
                  background: "#fff",
                }}>
                  <button style={{
                    flex: 1, padding: "9px 0", borderRadius: 8, fontSize: 13, fontWeight: 500,
                    border: "1px solid #e5e7eb", background: "#f9fafb", color: "#9ca3af",
                    cursor: "not-allowed", fontFamily: "Inter,sans-serif",
                  }}>Редактировать</button>
                  <button
                    onClick={() => setDrawerView("report")}
                    style={{
                      flex: 1, padding: "9px 0", borderRadius: 8, fontSize: 13, fontWeight: 600,
                      border: "none",
                      background: selectedObject.kind === "plant" ? "#16a34a" : "#f97316",
                      color: "#fff",
                      cursor: "pointer", fontFamily: "Inter,sans-serif",
                    }}>Оставить обращение</button>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Full-screen loading overlay */}
      {globalLoading && (() => {
        const entries = Object.values(layerProgress)
        const total   = entries.length
        const done    = entries.filter(e => e.status === "done" || e.status === "cached").length
        const pct     = total > 0 ? Math.round((done / total) * 100) : 0
        const totalKb = entries.reduce((s, e) => s + e.kb, 0)
        const totalMb = (totalKb / 1024).toFixed(1)
        const activeLabel = entries.find(e => e.status === "loading")?.label ?? "Инициализация карты…"
        return (
          <div style={{
            position: "absolute", inset: 0, zIndex: 100,
            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
            background: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Inter,sans-serif",
          }}>
            <div style={{
              background: "rgba(17,24,39,0.92)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16, padding: "28px 32px",
              width: 340, boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                  border: "3px solid rgba(255,255,255,0.12)",
                  borderTopColor: "#16a34a",
                  animation: "spin 0.8s linear infinite",
                }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#f9fafb" }}>Загрузка карты</div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{activeLabel}</div>
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 99, height: 6, overflow: "hidden", marginBottom: 8 }}>
                <div style={{
                  height: "100%", borderRadius: 99, background: "#16a34a",
                  width: `${pct}%`, transition: "width 0.4s ease",
                }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#6b7280", marginBottom: entries.length > 0 ? 16 : 0 }}>
                <span>{done} / {total} слоёв</span>
                <span>{pct}%{totalKb > 0 ? ` · ${totalMb} МБ` : ""}</span>
              </div>
              {entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 5, maxHeight: 200, overflowY: "auto" }}>
                  {entries.map(e => (
                    <div key={e.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, flexShrink: 0, width: 14, textAlign: "center" }}>
                        {e.status === "loading" ? "⏳" : e.status === "cached" ? "⚡" : e.status === "done" ? "✓" : "○"}
                      </span>
                      <span style={{
                        fontSize: 12, flex: 1,
                        color: e.status === "loading" ? "#f9fafb" : "#6b7280",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                      }}>{e.label}</span>
                      {e.kb > 0 && (
                        <span style={{ fontSize: 11, color: "#4b5563", flexShrink: 0 }}>
                          {e.kb >= 1024 ? `${(e.kb / 1024).toFixed(1)} МБ` : `${e.kb} КБ`}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      })()}
    </div>
  )
}
