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
  { id: "ponds",             label: "Пруды",                        group: "water",    color: "#3b82f6", kind: "fill",  endpoint: "eco-water/ponds" },
  { id: "lakes",             label: "Озёра",                        group: "water",    color: "#1d4ed8", kind: "fill",  endpoint: "eco-water/lakes" },
  { id: "reservoirs",        label: "Водохранилища",                group: "water",    color: "#1e40af", kind: "fill",  endpoint: "eco-water/reservoirs" },
  { id: "rivers",            label: "Реки",                         group: "water",    color: "#2563eb", kind: "line",  endpoint: "eco-water/rivers",        lineTiles: true as const, tileLayerName: "rivers" as const },
  { id: "channels",          label: "Каналы",                       group: "water",    color: "#0891b2", kind: "line",  endpoint: "eco-water/channels",       lineTiles: true as const, tileLayerName: "channels" as const },
  { id: "ditches",           label: "Арычная сеть",                 group: "water",    color: "#06b6d4", kind: "line",  endpoint: "eco-water/ditch-networks", lineTiles: true as const, tileLayerName: "ditches" as const },
  { id: "strips",            label: "Водоохр. полосы",              group: "water",    color: "#67e8f9", kind: "fill",  endpoint: "eco-water/protection-strips" },
  { id: "hydraulic",         label: "Гидросооружения",              group: "water",    color: "#0284c7", kind: "point", endpoint: "eco-water/hydraulic-structures" },
  { id: "fountains",         label: "Фонтаны",                      group: "fountain", color: "#06d6a0", kind: "point", endpoint: "eco-fountain/fountains" },
  { id: "waste-sites",       label: "Площадки ТКО",                 group: "waste",    color: "#f97316", kind: "point", endpoint: "eco-waste/municipal-sites" },
  { id: "kgo-zones",         label: "Зоны КГО",                     group: "waste",    color: "#ea580c", kind: "fill",  endpoint: "eco-waste/kgo-zones" },
  { id: "waste-separate",    label: "Контейнеры раздельного сбора", group: "waste",    color: "#3b82f6", kind: "point", endpoint: "eco-waste/separate-containers" },
  { id: "waste-recycle-pts", label: "Пункты приёма вторсырья",      group: "waste",    color: "#f59e0b", kind: "point", endpoint: "eco-waste/recycling-points" },
  { id: "waste-sorting",     label: "Предприятия по сортировке",    group: "waste",    color: "#8b5cf6", kind: "point", endpoint: "eco-waste/sorting-enterprises" },
  { id: "waste-processing",  label: "Предприятия по переработке",   group: "waste",    color: "#ec4899", kind: "point", endpoint: "eco-waste/processing-enterprises" },
  { id: "waste-utilization", label: "Предприятия по утилизации",    group: "waste",    color: "#dc2626", kind: "point", endpoint: "eco-waste/utilization-enterprises" },
  { id: "waste-burial",      label: "Объекты захоронения",          group: "waste",    color: "#78716c", kind: "point", endpoint: "eco-waste/burial-sites" },
  { id: "waste-containers",  label: "Мусорные контейнеры (2GIS)",   group: "waste",    color: "#6b7280", kind: "point", endpoint: "eco-waste/containers" },
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

// ── GeoJSON cache ──────────────────────────────────────────────────────────
const geoCache = new Map<string, { features: GeoJSON.Feature[]; ts: number }>()
const GEO_TTL   = 60 * 60 * 1000
const LS_PREFIX  = "eco_geo:"

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
    return { features: hit.features, kb: Math.round(JSON.stringify(hit.features).length / 1024), cached: true }
  }
  try {
    const raw = localStorage.getItem(lsKey)
    if (raw) {
      const stored = JSON.parse(raw) as { features: GeoJSON.Feature[]; ts: number }
      if (Date.now() - stored.ts < GEO_TTL) {
        geoCache.set(cacheKey, stored)
        return { features: stored.features, kb: Math.round(raw.length / 1024), cached: true }
      }
    }
  } catch { /* ignore */ }

  const results: GeoJSON.Feature[] = []
  let totalBytes = 0
  let url: string | null = `${API}/ecology/${endpoint}/?format=json&limit=500`
  while (url) {
    const pageCtrl = new AbortController()
    const pageTimer = setTimeout(() => pageCtrl.abort(), 15_000)
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(url, { headers: { Accept: "application/json" }, signal: pageCtrl.signal }).finally(() => clearTimeout(pageTimer))
    if (!response.ok) break
    // eslint-disable-next-line no-await-in-loop
    const text = await response.text()
    totalBytes += text.length
    let payload: Record<string, unknown> | unknown[]
    try { payload = JSON.parse(text) as Record<string, unknown> | unknown[] } catch { break }
    const items: unknown[] = Array.isArray(payload) ? payload : ((payload.results as unknown[]) ?? [])
    for (const item of items) {
      const obj = item as Record<string, unknown>
      const rawGeom = (kind === "point"
        ? (obj.centroid ?? obj.geometry)
        : (obj.geometry ?? obj.centroid)) as GeoJSON.Geometry | null
      if (!rawGeom) continue
      results.push({ type: "Feature", geometry: rawGeom, properties: { ...obj, geometry: undefined, centroid: undefined } })
    }
    url = Array.isArray(payload) ? null : ((payload.next as string | null) ?? null)
  }

  const entry = { features: results, ts: Date.now() }
  geoCache.set(cacheKey, entry)
  try { localStorage.setItem(lsKey, JSON.stringify(entry)) } catch { /* quota */ }
  return { features: results, kb: Math.round(totalBytes / 1024), cached: false }
}

// ── Labels ────────────────────────────────────────────────────────────────
const PLANT_TYPE_LABEL: Record<number, string> = {
  1: "Дерево", 2: "Кустарник", 3: "Куртина (Деревья)",
  4: "Куртина (Кустарники)", 5: "Живая изгородь",
  6: "Цветник", 7: "Газон", 8: "Лиана",
}

const SANITARY_LABEL: Record<number, string> = {
  1: "Здоровые (КСО-1)", 2: "Ослабленные (КСО-2)", 3: "Угнетённые (КСО-3)",
  4: "Усыхающие (КСО-4)", 5: "Сухостой (КСО-5)", 6: "Аварийное (КСО-5)", 7: "Хорошее (КСО-2)",
}
function sanitaryColor(id: number) {
  return ({ 1:"#16a34a",2:"#ca8a04",3:"#ea580c",4:"#dc2626",5:"#78716c",6:"#b91c1c",7:"#22c55e" } as Record<number,string>)[id] ?? "#6b7280"
}
function str(v: unknown, fb = "—"): string {
  if (v === null || v === undefined || v === "") return fb
  return String(v)
}

// ── Popup field labels (Russian) ──────────────────────────────────────────
const FIELD_LABEL: Record<string, string> = {
  name: "Название", number_code: "Номер", external_id: "ID (EcoAlmaty)",
  structure_type: "Тип сооружения", belonging: "Принадлежность",
  service_organization: "Обслуживающая орг.", district: "Район",
  length: "Длина, км", strengthening_type: "Тип укрепления",
  pond_type: "Тип водоёма", channel_type: "Тип канала",
  area: "Площадь", volume: "Объём", depth: "Глубина",
  address: "Адрес", description: "Описание",
}
const HIDDEN_FIELDS = new Set(["id","created_at","updated_at","centroid","geometry","centroid_id"])
function popupRows(props: Record<string, unknown>, limit = 8): string {
  return Object.entries(props)
    .filter(([k, v]) => !HIDDEN_FIELDS.has(k) && v !== null && v !== undefined && v !== "")
    .slice(0, limit)
    .map(([k, v]) => {
      const label = FIELD_LABEL[k] ?? k.replace(/_/g, " ")
      return `<tr><td style="color:#666;padding:2px 8px 2px 0;font-size:12px;white-space:nowrap">${label}</td><td style="font-weight:600;color:#111;font-size:12px">${String(v)}</td></tr>`
    }).join("") || "<tr><td style='color:#9ca3af'>—</td></tr>"
}

// ── District lookup via PostGIS ────────────────────────────────────────────
type ReverseGeo = { address: string; district: string }

async function lookupDistrict(lng: number, lat: number): Promise<string> {
  try {
    const res = await fetch(`${API}/address/districts/by-point/?lat=${lat}&lng=${lng}`)
    if (!res.ok) return ""
    const data = await res.json() as { district: string | null }
    return data.district ?? ""
  } catch {
    return ""
  }
}

async function reverseGeocode(lng: number, lat: number, token: string): Promise<ReverseGeo> {
  // Run Mapbox address lookup and PostGIS district lookup in parallel
  const [geoRes, district] = await Promise.all([
    (async () => {
      try {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${token}&language=ru&types=address&country=kz&limit=1`
        const res = await fetch(url)
        if (!res.ok) return ""
        const data = await res.json() as { features: Array<{ place_name: string }> }
        return data.features?.[0]?.place_name?.split(",")[0]?.trim() ?? ""
      } catch {
        return ""
      }
    })(),
    lookupDistrict(lng, lat),
  ])
  return { address: geoRes, district }
}

// ── UI primitives ─────────────────────────────────────────────────────────
function PassportSection({ title, rows }: {
  title: string
  rows: { label: string; value: string; accent?: string }[]
}) {
  return (
    <div style={{ padding: "14px 18px", borderBottom: "1px solid #f3f4f6" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{title}</div>
      {rows.map((row, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingTop: i > 0 ? 8 : 0 }}>
          <span style={{ fontSize: 13, color: "#6b7280", flexShrink: 0, marginRight: 8 }}>{row.label}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: row.accent ?? "#111", display: "flex", alignItems: "center", gap: 5, textAlign: "right" }}>
            {row.accent && <span style={{ width: 8, height: 8, borderRadius: "50%", background: row.accent, display: "inline-block", flexShrink: 0 }} />}
            {row.value}
          </span>
        </div>
      ))}
    </div>
  )
}

function PhotoPlaceholder() {
  return (
    <div style={{ height: 150, background: "#f3f4f6", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, color: "#9ca3af", borderBottom: "1px solid #e5e7eb" }}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity={0.45}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span style={{ fontSize: 12 }}>Фото отсутствует</span>
    </div>
  )
}

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

const inputStyle: CSSProperties = {
  width: "100%", padding: "9px 12px", border: "1px solid #e5e7eb",
  borderRadius: 8, fontSize: 13, color: "#111", boxSizing: "border-box",
  fontFamily: "Inter,sans-serif",
}

// ── Report types per group ─────────────────────────────────────────────────
const REPORT_TYPES_GREEN = [
  "Неверное местоположение", "Некорректные данные", "Изменилось состояние объекта",
]
const REPORT_TYPES_WASTE = [
  "Неверное местоположение", "Некорректные данные", "Изменилось состояние объекта",
  "Отсутствует объект на карте", "Требуется уборка", "Другое",
]

// ── Report form ────────────────────────────────────────────────────────────
function ReportForm({ extId, typeName, coords: initialCoords, kind, onClose }: {
  extId?: string; typeName?: string; coords?: [number, number]; kind?: "plant" | "waste" | "water"; onClose: () => void
}) {
  const reportTypes = kind === "waste" ? REPORT_TYPES_WASTE : REPORT_TYPES_GREEN
  const [reportType, setReportType] = useState(0)
  const [description, setDescription]   = useState("")
  const [name, setName]                 = useState("")
  const [contact, setContact]           = useState("")
  const [address, setAddress]           = useState("")
  const [pickedCoords, setPickedCoords] = useState<[number, number] | null>(null)
  const [showPicker, setShowPicker]     = useState(false)
  const [submitted, setSubmitted]       = useState(false)
  const activeCoords = pickedCoords ?? initialCoords

  if (submitted) return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, gap: 16 }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>Обращение отправлено</div>
        <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>Спасибо! Мы рассмотрим ваше обращение.</div>
      </div>
      <button onClick={onClose} style={{ padding: "9px 24px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#f9fafb", fontSize: 13, cursor: "pointer", color: "#374151", fontFamily: "Inter,sans-serif" }}>
        Закрыть
      </button>
    </div>
  )

  return (
    <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "16px 18px 80px", flex: 1 }}>
        {(extId || typeName) && (
          <div style={{ fontSize: 12, color: "#6b7280", background: "#f3f4f6", padding: "7px 12px", borderRadius: 8, marginBottom: 16 }}>
            {typeName ?? "Объект"}{extId ? ` · ID ${extId}` : ""}
          </div>
        )}
        <FormField label="Тип обращения" required>
          <select value={reportType} onChange={e => setReportType(Number(e.target.value))} style={{ ...inputStyle, background: "#fff" }}>
            {reportTypes.map((t, i) => <option key={i} value={i}>{t}</option>)}
          </select>
        </FormField>
        <FormField label="Описание">
          <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} placeholder="Опишите ситуацию…" style={{ ...inputStyle, resize: "vertical" }} />
        </FormField>
        <FormField label="Фото">
          <div style={{ border: "1.5px dashed #d1d5db", borderRadius: 8, padding: "20px 16px", textAlign: "center", color: "#9ca3af", fontSize: 13, cursor: "pointer", background: "#fafafa" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 6px", display: "block" }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Нажмите для загрузки
          </div>
        </FormField>
        <FormField label="Адрес">
          <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Введите адрес" style={inputStyle} />
        </FormField>
        <FormField label="Координаты">
          <div style={{ display: "flex", gap: 8 }}>
            <input readOnly value={activeCoords ? `${activeCoords[1].toFixed(6)}, ${activeCoords[0].toFixed(6)}` : ""} placeholder="Не указаны" style={{ ...inputStyle, flex: 1, background: "#f9fafb", color: "#6b7280" }} />
            <button type="button" onClick={() => setShowPicker(true)} style={{ padding: "9px 12px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#f9fafb", cursor: "pointer", fontSize: 12, color: "#374151", fontFamily: "Inter,sans-serif", whiteSpace: "nowrap", flexShrink: 0 }}>
              📍 На карте
            </button>
          </div>
        </FormField>
        {showPicker && (
          <LocationPickerModal
            initialCoords={activeCoords ?? [76.945, 43.238]}
            onConfirm={(c, addr) => { setPickedCoords(c); if (addr && !address) setAddress(addr.split(",")[0]); setShowPicker(false) }}
            onClose={() => setShowPicker(false)}
          />
        )}
        <FormField label="ФИО" required>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Имя и фамилия" style={inputStyle} />
        </FormField>
        <FormField label="Телефон / Email" required>
          <input value={contact} onChange={e => setContact(e.target.value)} placeholder="+7 700 000 0000 или email@mail.ru" style={inputStyle} />
        </FormField>
      </div>
      <div style={{ position: "sticky", bottom: 0, background: "#fff", borderTop: "1px solid #e5e7eb", padding: "12px 16px", display: "flex", gap: 8 }}>
        <button onClick={onClose} style={{ flex: 1, padding: "9px 0", borderRadius: 8, fontSize: 13, border: "1px solid #e5e7eb", background: "#f9fafb", color: "#6b7280", cursor: "pointer", fontWeight: 500, fontFamily: "Inter,sans-serif" }}>Отмена</button>
        <button onClick={() => setSubmitted(true)} style={{ flex: 1, padding: "9px 0", borderRadius: 8, fontSize: 13, border: "none", background: "#16a34a", color: "#fff", cursor: "pointer", fontWeight: 600, fontFamily: "Inter,sans-serif" }}>Отправить</button>
      </div>
    </div>
  )
}

// ── Plant passport ─────────────────────────────────────────────────────────
function PlantPassport({ properties, fullDetail, geo }: {
  properties: Record<string, unknown>
  fullDetail: Record<string, unknown> | null
  geo: ReverseGeo | null
}) {
  const p           = fullDetail ?? properties
  const isLoading   = fullDetail === null
  const sanitaryId  = parseInt(String(p.sanitary_id ?? ""), 10)
  const sanitaryLbl = !isNaN(sanitaryId) ? SANITARY_LABEL[sanitaryId] : null
  const sanitaryClr = !isNaN(sanitaryId) ? sanitaryColor(sanitaryId) : "#6b7280"
  const isRedbook   = p.redbook === 1 || p.redbook === true
  const isPine      = p.pine    === 1 || p.pine    === true
  const typeName    = PLANT_TYPE_LABEL[p.plant_type as number] ?? str(p.plant_type)
  const address     = str(p.address ?? geo?.address)
  const district    = str(p.district ?? p.district_name ?? geo?.district)

  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      <PhotoPlaceholder />
      {isLoading ? (
        <div style={{ display: "flex", gap: 6, alignItems: "center", padding: "16px 18px", color: "#9ca3af", fontSize: 13 }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #e5e7eb", borderTopColor: "#16a34a", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
          Загрузка…
        </div>
      ) : (
        <>
          <PassportSection title="Основная информация" rows={[
            { label: "Тип объекта", value: typeName },
            { label: "Адрес", value: address },
            { label: "Район", value: district },
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
            { label: "Санитарное состояние", value: sanitaryLbl ?? "—", accent: sanitaryLbl ? sanitaryClr : undefined },
          ]} />
          <PassportSection title="Дополнительная информация" rows={[
            { label: "Комментарий", value: str(p.comment) },
          ]} />
        </>
      )}
    </div>
  )
}

// ── Water passport ─────────────────────────────────────────────────────────
function WaterPassport({ label, properties, geo }: {
  label: string
  properties: Record<string, unknown>
  geo: ReverseGeo | null
}) {
  const p = properties
  const name        = str(p.name)
  const extId       = str(p.external_id ?? p.id)
  const district    = str(p.district ?? p.district_name ?? geo?.district)
  const address     = str(p.address ?? geo?.address)
  const numberCode  = str(p.number_code)

  // per-object-type fields
  const structureType    = str(p.structure_type)
  const belonging        = str(p.belonging)
  const serviceOrg       = str(p.service_organization)
  const landscaping      = str(p.landscaping)
  const pondType         = str(p.pond_type)
  const channelType      = str(p.channel_type)
  const strengtheningType = str(p.strengthening_type)

  const area        = p.area   != null ? `${p.area} га`   : "—"
  const volume      = p.volume != null ? `${p.volume} м³` : "—"
  const depthAvg    = p.depth_avg  != null ? `${p.depth_avg} м` : p.depth != null ? `${p.depth} м` : "—"
  const depthMax    = p.depth_max  != null ? `${p.depth_max} м` : null
  const shoreline   = p.shoreline_length != null ? `${p.shoreline_length} км` : null
  const totalLength = p.total_length != null ? `${p.total_length} км` : null
  const cityLength  = p.length_in_city != null ? `${p.length_in_city} км` : null
  const width       = p.width != null ? `${p.width} м` : null
  const riverCat    = str(p.river_category)
  const inflowCat   = str(p.inflow_category)
  const riverMouth  = str(p.river_mouth)
  const waterObjName = str(p.water_object_name)
  const stripWidth  = p.width != null ? `${p.width} м` : null

  // which sections to show
  const hasArea    = p.area   != null || p.volume != null || p.depth != null || p.depth_avg != null
  const hasHydro   = structureType !== "—" || belonging !== "—" || serviceOrg !== "—"
  const hasSizes   = totalLength != null || cityLength != null || width != null || stripWidth != null || shoreline != null

  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      <PhotoPlaceholder />
      <PassportSection title="Основная информация" rows={[
        { label: "Тип объекта", value: label },
        ...(pondType !== "—"    ? [{ label: "Тип водоёма",   value: pondType }]    : []),
        ...(channelType !== "—" ? [{ label: "Тип канала",     value: channelType }] : []),
        ...(structureType !== "—" ? [{ label: "Тип сооружения", value: structureType }] : []),
        ...(waterObjName !== "—"  ? [{ label: "Водный объект",  value: waterObjName }] : []),
        { label: "Название", value: name },
        { label: "Номер",    value: numberCode },
        { label: "Адрес",    value: address },
        { label: "Район",    value: district },
      ]} />
      <PassportSection title="Идентификация" rows={[
        { label: "ID объекта", value: extId },
      ]} />
      {hasArea && (
        <PassportSection title="Параметры" rows={[
          { label: "Площадь",     value: area },
          { label: "Объём",       value: volume },
          { label: "Глубина",     value: depthAvg },
          ...(depthMax ? [{ label: "Макс. глубина", value: depthMax }] : []),
          ...(shoreline ? [{ label: "Береговая линия", value: shoreline }] : []),
        ]} />
      )}
      {hasSizes && (
        <PassportSection title="Размеры" rows={[
          ...(totalLength ? [{ label: "Общая длина", value: totalLength }] : []),
          ...(cityLength  ? [{ label: "В пределах города", value: cityLength }] : []),
          ...(width       ? [{ label: "Ширина", value: width }] : []),
          ...(inflowCat   !== "—" ? [{ label: "Категория притока", value: inflowCat }] : []),
          ...(riverCat    !== "—" ? [{ label: "Категория реки",    value: riverCat }]  : []),
          ...(riverMouth  !== "—" ? [{ label: "Устье",             value: riverMouth }] : []),
          ...(strengtheningType !== "—" ? [{ label: "Тип укрепления", value: strengtheningType }] : []),
        ]} />
      )}
      {hasHydro && (
        <PassportSection title="Организация" rows={[
          { label: "Принадлежность",        value: belonging },
          { label: "Обслуживающая орг.",    value: serviceOrg },
          ...(landscaping !== "—" ? [{ label: "Благоустройство", value: landscaping }] : []),
        ]} />
      )}
    </div>
  )
}

// ── Waste passport ─────────────────────────────────────────────────────────
function WastePassport({ label, properties, geo }: {
  label: string
  properties: Record<string, unknown>
  geo: ReverseGeo | null
}) {
  const p               = properties
  const address         = str(p.address ?? geo?.address)
  const district        = str(p.district ?? p.district_name ?? geo?.district)
  const collectionType  = str(p.type_of_collection ?? p.waste_type ?? p.collection_type ?? p.type)
  const area            = p.area != null ? `${p.area} м²` : "—"
  const containerCount  = str(p.container_count ?? p.containers_count)
  const material        = str(p.container_material ?? p.material)
  const hasRoof         = p.has_roof === true || p.has_roof === 1 ? "Да" : p.has_roof === false || p.has_roof === 0 ? "Нет" : "—"
  const kgoZone         = str(p.kgo_zone)
  const comment         = str(p.comment ?? p.description)

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
        { label: "Материал контейнера", value: material },
        { label: "Навес", value: hasRoof },
        { label: "Зона для КГО", value: kgoZone },
      ]} />
      <PassportSection title="Дополнительная информация" rows={[
        { label: "Комментарий", value: comment },
      ]} />
    </div>
  )
}

// ── Map component ──────────────────────────────────────────────────────────
type SelectedObject = {
  kind: "plant" | "waste" | "water"
  label: string; color: string
  properties: Record<string, unknown>
  coords: [number, number]
}

export type DistrictInfo = { id: number; name: string }

interface Props {
  visibleLayers: Set<LayerId>
  centerCoords?: [number, number] | null
  activeGroup?: string
  showDistricts?: boolean
  selectedDistrict?: DistrictInfo | null
  onDistrictChange?: (d: DistrictInfo | null) => void
  onLayerLoad?: (id: string, count: number) => void
  onLoadingChange?: (loading: boolean) => void
}

// District colours per id for visual distinction
export const DISTRICT_COLORS: Record<number, string> = {
  1: "#6366f1", 2: "#0ea5e9", 3: "#10b981", 4: "#f59e0b",
  5: "#ec4899", 6: "#14b8a6", 7: "#8b5cf6", 8: "#f97316",
}
function districtColor(id: number): string {
  return DISTRICT_COLORS[id] ?? "#94a3b8"
}

export function EcoAlmatyMap({ visibleLayers, centerCoords, activeGroup, showDistricts = false, selectedDistrict = null, onDistrictChange, onLayerLoad, onLoadingChange }: Props) {
  const mapRef       = useRef<mapboxgl.Map | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const [loadedLayers, setLoadedLayers]   = useState<Set<string>>(new Set())
  const popupRef = useRef<mapboxgl.Popup | null>(null)
  const visibleLayersRef = useRef(visibleLayers)
  useEffect(() => { visibleLayersRef.current = visibleLayers }, [visibleLayers])
  const selectedDistrictRef = useRef(selectedDistrict)
  useEffect(() => { selectedDistrictRef.current = selectedDistrict }, [selectedDistrict])
  const onDistrictChangeRef = useRef(onDistrictChange)
  useEffect(() => { onDistrictChangeRef.current = onDistrictChange }, [onDistrictChange])

  // Close drawer when module switches
  const prevGroupRef = useRef<string | undefined>(undefined)

  const [selectedObject, setSelectedObject] = useState<SelectedObject | null>(null)
  const setSelectedObjRef = useRef(setSelectedObject)
  setSelectedObjRef.current = setSelectedObject

  const [drawerView, setDrawerView]         = useState<"passport" | "report">("passport")
  const [showStandaloneReport, setShowStandaloneReport] = useState(false)
  const [fullDetail, setFullDetail]         = useState<Record<string, unknown> | null>(null)
  const [reverseGeo, setReverseGeo]         = useState<ReverseGeo | null>(null)

  // Reset drawer on module switch
  useEffect(() => {
    if (prevGroupRef.current !== undefined && prevGroupRef.current !== activeGroup) {
      setSelectedObject(null)
      setFullDetail(null)
      setReverseGeo(null)
      popupRef.current?.remove()
      setDrawerView("passport")
    }
    prevGroupRef.current = activeGroup
  }, [activeGroup])

  // Reset drawer view when object changes
  useEffect(() => { setDrawerView("passport") }, [selectedObject])

  // Fetch plant detail from API
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

  // Reverse geocode when object is selected
  useEffect(() => {
    if (!selectedObject) { setReverseGeo(null); return }
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ""
    if (!token) return
    const [lng, lat] = selectedObject.coords
    let cancelled = false
    reverseGeocode(lng, lat, token).then(geo => { if (!cancelled) setReverseGeo(geo) }).catch(() => {})
    return () => { cancelled = true }
  }, [selectedObject])

  useEffect(() => {
    if (!centerCoords || !mapRef.current) return
    mapRef.current.flyTo({ center: centerCoords, zoom: Math.max(mapRef.current.getZoom(), 15), duration: 1200 })
  }, [centerCoords])

  type LayerStatus = { label: string; status: "pending" | "loading" | "done" | "cached" | "error"; kb: number }
  const [layerProgress, setLayerProgress] = useState<Record<string, LayerStatus>>({})
  const markLayer = useCallback((id: string, label: string, status: LayerStatus["status"], kb = 0) => {
    setLayerProgress(prev => ({ ...prev, [id]: { label, status, kb } }))
  }, [])

  const loadCountRef    = useRef(0)
  const mapIdleRef      = useRef(false)
  const [mapReady, setMapReady]                = useState(false)
  const [globalLoading, setGlobalLoadingState] = useState(true)
  const [forceSkipped, setForceSkipped]        = useState(false)
  const onLoadingChangeRef = useRef(onLoadingChange)
  useEffect(() => { onLoadingChangeRef.current = onLoadingChange }, [onLoadingChange])
  const setGlobalLoading = useCallback((v: boolean) => {
    setGlobalLoadingState(v)
    onLoadingChangeRef.current?.(v)
  }, [])
  const maybeHideLoading = useCallback(() => {
    if (mapIdleRef.current && loadCountRef.current === 0) setGlobalLoading(false)
  }, [setGlobalLoading])
  const beginLoad = useCallback(() => { loadCountRef.current++; setGlobalLoading(true) }, [setGlobalLoading])
  const endLoad   = useCallback(() => { loadCountRef.current = Math.max(0, loadCountRef.current - 1); maybeHideLoading() }, [maybeHideLoading])
  const loadingLayers = useRef<Set<string>>(new Set())
  const districtsLoadedRef = useRef(false)

  const loadDistricts = useCallback(async (map: mapboxgl.Map) => {
    if (districtsLoadedRef.current) return
    districtsLoadedRef.current = true
    try {
      const res = await fetch(`${API}/address/districts/`)
      if (!res.ok) return
      const fc = await res.json() as GeoJSON.FeatureCollection
      const EXCLUDED = new Set([0, 9, "0", "9"])
      const features = (fc.features ?? []).filter(f => {
        const fid = f.id ?? f.properties?.id
        return !EXCLUDED.has(fid as number | string)
      })

      if (!map.getSource("src-districts")) {
        map.addSource("src-districts", {
          type: "geojson",
          data: { type: "FeatureCollection", features } as unknown as GeoJSON.FeatureCollection,
        })
      }

      // Fill layer — per-district colour, very transparent
      if (!map.getLayer("districts-fill")) {
        map.addLayer({
          id: "districts-fill",
          type: "fill",
          source: "src-districts",
          layout: { visibility: "visible" },
          paint: {
            "fill-color": [
              "match", ["get", "id"],
              1, "#6366f1", 2, "#0ea5e9", 3, "#10b981", 4, "#f59e0b",
              5, "#ec4899", 6, "#14b8a6", 7, "#8b5cf6", 8, "#f97316",
              "#94a3b8",
            ],
            "fill-opacity": 0.07,
          },
        })
      }

      // Stroke layer
      if (!map.getLayer("districts-line")) {
        map.addLayer({
          id: "districts-line",
          type: "line",
          source: "src-districts",
          layout: { visibility: "visible" },
          paint: {
            "line-color": [
              "match", ["get", "id"],
              1, "#6366f1", 2, "#0ea5e9", 3, "#10b981", 4, "#f59e0b",
              5, "#ec4899", 6, "#14b8a6", 7, "#8b5cf6", 8, "#f97316",
              "#94a3b8",
            ],
            "line-width": 2,
            "line-opacity": 0.7,
            "line-dasharray": [4, 2],
          },
        })
      }

      // Label layer — district name in center
      if (!map.getLayer("districts-label")) {
        map.addLayer({
          id: "districts-label",
          type: "symbol",
          source: "src-districts",
          layout: {
            visibility: "visible",
            "text-field": ["get", "name_ru"],
            "text-size": ["interpolate", ["linear"], ["zoom"], 10, 10, 13, 13],
            "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            "text-max-width": 10,
            "text-justify": "center",
            "symbol-placement": "point",
          },
          paint: {
            "text-color": "#1e293b",
            "text-halo-color": "rgba(255,255,255,0.85)",
            "text-halo-width": 2,
            "text-opacity": ["interpolate", ["linear"], ["zoom"], 9, 0, 10, 1],
          },
        })
      }
      // Cursor + click-to-select
      map.on("mouseenter", "districts-fill", () => { map.getCanvas().style.cursor = "pointer" })
      map.on("mouseleave", "districts-fill", () => { map.getCanvas().style.cursor = "" })

      map.on("click", "districts-fill", (e) => {
        const feat = e.features?.[0]
        if (!feat) return
        const props = feat.properties as Record<string, unknown>
        const clickedId = Number(props.id)
        const name = String(props.name_ru ?? "")
        const cur = selectedDistrictRef.current
        onDistrictChangeRef.current?.(cur?.id === clickedId ? null : { id: clickedId, name })
      })
    } catch { /* non-fatal */ }
  }, [])

  const showDistrictsRef = useRef(showDistricts)
  useEffect(() => {
    showDistrictsRef.current = showDistricts
    const map = mapRef.current
    if (!map || !map.isStyleLoaded()) return
    const vis = showDistricts ? "visible" : "none"
    if (showDistricts && !districtsLoadedRef.current) {
      loadDistricts(map)
      return
    }
    for (const id of ["districts-fill", "districts-line", "districts-label"]) {
      if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", vis)
    }
  }, [showDistricts, loadDistricts])

  // District filter — highlight selected district and filter GeoJSON layers
  useEffect(() => {
    const map = mapRef.current
    if (!map || !map.isStyleLoaded()) return
    if (!map.getLayer("districts-fill")) return

    if (selectedDistrict) {
      const { id, name } = selectedDistrict

      // Highlight selected, dim others
      map.setPaintProperty("districts-fill", "fill-opacity", ["case", ["==", ["get", "id"], id], 0.22, 0.04])
      if (map.getLayer("districts-line")) {
        map.setPaintProperty("districts-line", "line-opacity", ["case", ["==", ["get", "id"], id], 1.0, 0.2])
        map.setPaintProperty("districts-line", "line-width", ["case", ["==", ["get", "id"], id], 3.5, 1])
      }

      // Apply district filter to all loaded GeoJSON layers
      LAYERS.forEach(layer => {
        if ("lineTiles" in layer && layer.lineTiles) return
        if ("plantTiles" in layer && layer.plantTiles) return
        if (!loadedLayers.has(layer.id)) return
        const distF = ["==", ["get", "district"], name] as mapboxgl.FilterSpecification
        if (layer.kind === "point") {
          if (map.getLayer(layer.id)) map.setFilter(layer.id, ["all", ["!", ["has", "point_count"]], distF] as mapboxgl.FilterSpecification)
        } else {
          if (map.getLayer(layer.id)) map.setFilter(layer.id, distF)
        }
      })
    } else {
      // Reset highlight
      map.setPaintProperty("districts-fill", "fill-opacity", 0.07)
      if (map.getLayer("districts-line")) {
        map.setPaintProperty("districts-line", "line-opacity", 0.7)
        map.setPaintProperty("districts-line", "line-width", 2)
      }

      // Remove district filter from all GeoJSON layers
      LAYERS.forEach(layer => {
        if ("lineTiles" in layer && layer.lineTiles) return
        if ("plantTiles" in layer && layer.plantTiles) return
        if (!loadedLayers.has(layer.id)) return
        if (layer.kind === "point") {
          if (map.getLayer(layer.id)) map.setFilter(layer.id, ["!", ["has", "point_count"]] as mapboxgl.FilterSpecification)
        } else {
          if (map.getLayer(layer.id)) map.setFilter(layer.id, null)
        }
      })
    }
  }, [selectedDistrict, loadedLayers])

  // Plant MVT tiles: reload source URL with district_id filter when district changes
  useEffect(() => {
    const map = mapRef.current
    if (!map) return
    const src = map.getSource("src-plants") as mapboxgl.VectorTileSource | undefined
    if (!src) return
    const base = `${API}/ecology/eco-green/plants/tiles/{z}/{x}/{y}.mvt`
    const url = selectedDistrict ? `${base}?district_id=${selectedDistrict.id}` : base
    src.setTiles([url])
  }, [selectedDistrict])

  // Auto-dismiss after 40s — prevents infinite stuck loading screen
  useEffect(() => {
    const t = setTimeout(() => {
      if (globalLoading) {
        mapIdleRef.current = true
        setGlobalLoading(false)
      }
    }, 40_000)
    return () => clearTimeout(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw-plants.js").catch(() => {})
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ""
    const map = new mapboxgl.Map({
      container: containerRef.current,
      // Task 4: streets basemap — more visually rich, standard city map look
      style: resolvedTheme === "dark"
        ? "mapbox://styles/mapbox/navigation-night-v1"
        : "mapbox://styles/mapbox/streets-v12",
      center: [76.945, 43.238],
      zoom: 11.5,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")
    map.on("idle", () => { mapIdleRef.current = true; maybeHideLoading() })
    map.on("load", () => {
      if (showDistrictsRef.current) loadDistricts(map)
      setMapReady(true)
    })
    mapRef.current = map
    return () => { map.remove(); mapRef.current = null; mapIdleRef.current = false; districtsLoadedRef.current = false; setMapReady(false) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadLayer = useCallback(async (layer: (typeof LAYERS)[number]) => {
    const map = mapRef.current
    if (!map || !map.isStyleLoaded()) return
    if (loadedLayers.has(layer.id) || loadingLayers.current.has(layer.id)) return
    loadingLayers.current.add(layer.id)

    // ── Plant tiles (MVT) ──────────────────────────────────────────────────
    if ("plantTiles" in layer && layer.plantTiles) {
      if (!map.getSource("src-plants")) {
        map.addSource("src-plants", {
          type: "vector",
          tiles: [`${API}/ecology/eco-green/plants/tiles/{z}/{x}/{y}.mvt`],
          minzoom: 8, maxzoom: 14,
        })
      }
      if (!map.getLayer("plants-combined")) {
        const PLANT_COLORS: Record<number, string> = {
          1:"#15803d",2:"#4ade80",3:"#166534",4:"#86efac",5:"#22c55e",6:"#f472b6",7:"#a3e635",8:"#84cc16",
        }
        const nonPlantAnchor = LAYERS
          .filter(l => !("plantTiles" in l))
          .flatMap(l => l.kind === "point" ? [l.id, `${l.id}-clusters`, `${l.id}-count`] : [l.id])
          .find(id => map.getLayer(id))
        const colorExpr: mapboxgl.ExpressionSpecification = [
          "match", ["get", "plant_type"],
          1,"#15803d",2,"#4ade80",3,"#166534",4,"#86efac",5,"#22c55e",6,"#f472b6",7,"#a3e635",8,"#84cc16","#6b7280",
        ]
        const initialTypes = LAYERS
          .filter(l => "plantTiles" in l && visibleLayers.has(l.id))
          .map(l => (l as { plantType: number }).plantType)

        map.addLayer({
          id: "plants-combined", type: "circle", source: "src-plants", "source-layer": "plants", minzoom: 8,
          filter: initialTypes.length > 0
            ? (["in", ["get", "plant_type"], ["literal", initialTypes]] as mapboxgl.FilterSpecification)
            : (["literal", false] as mapboxgl.FilterSpecification),
          paint: {
            "circle-color": colorExpr,
            "circle-radius": ["interpolate",["linear"],["zoom"],8,1.5,12,3,16,7],
            "circle-stroke-width": ["interpolate",["linear"],["zoom"],11,0,14,1.5],
            "circle-stroke-color": "#fff",
            "circle-opacity": ["interpolate",["linear"],["zoom"],8,0.7,12,0.95],
          },
        }, nonPlantAnchor)

        map.on("click", "plants-combined", (e) => {
          const feat = e.features?.[0]; if (!feat) return
          const props = feat.properties as Record<string, unknown>
          const pt    = typeof props.plant_type === "number" ? props.plant_type : parseInt(String(props.plant_type ?? ""), 10)
          const lm    = LAYERS.find(l => "plantTiles" in l && (l as { plantType: number }).plantType === pt)
          const label = lm?.label ?? "Насаждение"
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
              <div style="font-size:11px;color:#9ca3af;margin-bottom:${sanitaryTxt ? "4px" : "0"}">ID ${extId}</div>
              ${sanitaryTxt ? `<div style="font-size:11px;color:#6b7280">${sanitaryTxt}</div>` : ""}
            </div>`)
            .addTo(map)
          setSelectedObjRef.current({ kind: "plant", label, color, properties: props, coords })
        })
        map.on("mouseenter", "plants-combined", () => { map.getCanvas().style.cursor = "pointer" })
        map.on("mouseleave", "plants-combined", () => { map.getCanvas().style.cursor = "" })
      }
      markLayer(layer.id, layer.label, "done", 0)
      setLoadedLayers(prev => new Set([...prev, layer.id]))
      return
    }

    // ── Line tiles (MVT) — rivers, channels, ditches ──────────────────────
    if ("lineTiles" in layer && layer.lineTiles) {
      const sourceId = `src-${layer.id}`
      const tileLayerName = (layer as { tileLayerName: string }).tileLayerName
      if (!map.getSource(sourceId)) {
        map.addSource(sourceId, {
          type: "vector",
          tiles: [`${API}/ecology/${(layer as { endpoint: string }).endpoint}/tiles/{z}/{x}/{y}.mvt`],
          minzoom: 0, maxzoom: 14,
        })
      }
      const initVis = visibleLayersRef.current.has(layer.id) ? "visible" : "none"
      const highlightId = `${layer.id}-highlight`
      if (!map.getLayer(layer.id)) {
        map.addLayer({
          id: layer.id, type: "line", source: sourceId, "source-layer": tileLayerName,
          layout: { visibility: initVis },
          paint: {
            "line-color": layer.color,
            "line-width": ["interpolate", ["linear"], ["zoom"], 8, 1, 12, 2.5, 15, 4],
            "line-opacity": 0.85,
          },
        })
        // Highlight layer — shows only the selected feature in red
        map.addLayer({
          id: highlightId, type: "line", source: sourceId, "source-layer": tileLayerName,
          layout: { visibility: initVis },
          filter: ["==", ["get", "id"], -1],
          paint: {
            "line-color": "#ef4444",
            "line-width": ["interpolate", ["linear"], ["zoom"], 8, 3, 12, 5, 15, 8],
            "line-opacity": 1,
          },
        })
        map.on("click", layer.id, (e) => {
          const feat = e.features?.[0]; if (!feat) return
          const props = feat.properties as Record<string, unknown>
          const coords: [number, number] = [e.lngLat.lng, e.lngLat.lat]
          const objId = props.id
          const objName = str(props.name) || layer.label
          if (map.getLayer(highlightId)) map.setFilter(highlightId, ["==", ["get", "id"], objId as number])
          popupRef.current?.remove()
          popupRef.current = new mapboxgl.Popup({ maxWidth: "280px", closeButton: false, offset: 10 })
            .setLngLat(e.lngLat)
            .setHTML(`<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px">
              <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                <span style="width:14px;height:3px;background:#ef4444;flex-shrink:0;border-radius:2px"></span>
                <span style="font-weight:700;font-size:13px;color:#111">${objName}</span>
              </div>
              <div style="font-size:11px;color:#9ca3af">ID ${str(objId, "—")} · Загрузка…</div>
            </div>`)
            .addTo(map)
          setSelectedObjRef.current({ kind: "water", label: layer.label, color: layer.color, properties: props, coords })
          if (objId != null) {
            const endpoint = (layer as { endpoint: string }).endpoint
            fetch(`${API}/ecology/${endpoint}/${objId}/?format=json`)
              .then(r => r.ok ? r.json() : null)
              .then((full: Record<string, unknown> | null) => {
                if (full) setSelectedObjRef.current({ kind: "water", label: layer.label, color: layer.color, properties: full, coords })
              })
              .catch(() => {})
          }
        })
        map.on("mouseenter", layer.id, () => { map.getCanvas().style.cursor = "pointer" })
        map.on("mouseleave", layer.id, () => { map.getCanvas().style.cursor = "" })
      }
      markLayer(layer.id, layer.label, "done", 0)
      setLoadedLayers(prev => new Set([...prev, layer.id]))
      // Fetch count in background (non-blocking) for sidebar badge
      fetch(`${API}/ecology/${(layer as { endpoint: string }).endpoint}/?limit=1&format=json`)
        .then(r => r.ok ? r.json() : null)
        .then((d: { count?: number } | null) => { if (d?.count != null) onLayerLoad?.(layer.id, d.count) })
        .catch(() => {})
      return
    }

    if (!layer.endpoint) return
    markLayer(layer.id, layer.label, "loading")
    beginLoad()
    let features: GeoJSON.Feature[] = []; let kb = 0; let cached = false; let fetchFailed = false
    try {
      const res = await fetchAll(layer.endpoint, layer.kind as "point" | "fill" | "line")
      features = res.features; kb = res.kb; cached = res.cached
    } catch {
      fetchFailed = true
    } finally {
      endLoad()
    }
    if (fetchFailed) {
      markLayer(layer.id, layer.label, "error", 0)
      setLoadedLayers(prev => new Set([...prev, layer.id]))
      return
    }
    markLayer(layer.id, layer.label, cached ? "cached" : "done", kb)
    // Task 2: notify parent of count
    onLayerLoad?.(layer.id, features.length)

    if (!features.length) { setLoadedLayers(prev => new Set([...prev, layer.id])); return }

    const sourceId  = `src-${layer.id}`
    const isWaste   = (layer as { group?: string }).group === "waste"
    const isWater   = (layer as { group?: string }).group === "water"

    if (!map.getSource(sourceId)) {
      map.addSource(sourceId, {
        type: "geojson",
        data: { type: "FeatureCollection", features },
        // Task 6: no clustering for waste — show individual points like plants
        ...(layer.kind === "point" && !isWaste ? { cluster: true, clusterMaxZoom: 14, clusterRadius: 40 } : {}),
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
    } else if (isWaste) {
      // Task 6: individual points for waste, zoom-based radius like plants
      map.addLayer({ id: layer.id, type: "circle", source: sourceId,
        layout: { visibility: initVis },
        paint: {
          "circle-color": layer.color,
          "circle-radius": ["interpolate",["linear"],["zoom"],8,3,12,5,15,8],
          "circle-stroke-width": 1.5,
          "circle-stroke-color": "#fff",
          "circle-opacity": 0.92,
        },
      })

      map.on("click", layer.id, (e) => {
        const feat = e.features?.[0]; if (!feat) return
        const props  = feat.properties as Record<string, unknown>
        const coords = (feat.geometry as GeoJSON.Point).coordinates as [number, number]
        const extId  = str(props.external_id ?? props.id, "—")
        const addr   = str(props.address, "")
        const dist   = str(props.district ?? props.district_name, "")
        popupRef.current?.remove()
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
        setSelectedObjRef.current({ kind: "waste", label: layer.label, color: layer.color, properties: props, coords })
      })
      map.on("mouseenter", layer.id, () => { map.getCanvas().style.cursor = "pointer" })
      map.on("mouseleave", layer.id, () => { map.getCanvas().style.cursor = "" })
    } else {
      // Clustered points for non-waste (water, fountain, etc.)
      map.addLayer({ id: `${layer.id}-clusters`, type: "circle", source: sourceId,
        filter: ["has", "point_count"], layout: { visibility: initVis },
        paint: { "circle-color": layer.color, "circle-radius": ["step",["get","point_count"],16,10,22,100,28], "circle-stroke-width": 2, "circle-stroke-color": "#fff" } })
      map.addLayer({ id: `${layer.id}-count`, type: "symbol", source: sourceId,
        filter: ["has", "point_count"], layout: { visibility: initVis, "text-field": ["get","point_count_abbreviated"], "text-size": 11, "text-font": ["DIN Offc Pro Medium","Arial Unicode MS Bold"] },
        paint: { "text-color": "#fff" } })
      map.addLayer({ id: layer.id, type: "circle", source: sourceId,
        filter: ["!", ["has", "point_count"]], layout: { visibility: initVis },
        paint: { "circle-color": layer.color, "circle-radius": 6, "circle-stroke-width": 1.5, "circle-stroke-color": "#fff" } })
      map.on("click", layer.id, (e) => {
        const feat = e.features?.[0]; if (!feat) return
        const props = feat.properties as Record<string, unknown>
        const coords = (feat.geometry as GeoJSON.Point).coordinates as [number, number]
        popupRef.current?.remove()
        popupRef.current = new mapboxgl.Popup({ maxWidth: "300px", closeButton: false, offset: 10 })
          .setLngLat(coords)
          .setHTML(`<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px;min-width:160px">
            <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
              <span style="width:10px;height:10px;border-radius:50%;background:${layer.color};flex-shrink:0"></span>
              <span style="font-weight:700;font-size:13px;color:#111">${str(props.name) || layer.label}</span>
            </div>
            <div style="font-size:11px;color:#9ca3af">ID ${str(props.external_id ?? props.id, "—")}</div>
          </div>`)
          .addTo(map)
        if (isWater) setSelectedObjRef.current({ kind: "water", label: layer.label, color: layer.color, properties: props, coords })
      })
      map.on("mouseenter", layer.id, () => { map.getCanvas().style.cursor = "pointer" })
      map.on("mouseleave", layer.id, () => { map.getCanvas().style.cursor = "" })
      map.on("click", `${layer.id}-clusters`, (e) => {
        const feat = e.features?.[0]; if (!feat) return
        const src  = map.getSource(sourceId) as mapboxgl.GeoJSONSource
        src.getClusterExpansionZoom(feat.properties!.cluster_id, (err, zoom) => {
          if (err) return
          map.easeTo({ center: (feat.geometry as GeoJSON.Point).coordinates as [number, number], zoom: zoom! })
        })
      })
    }

    if (layer.kind !== "point") {
      map.on("click", layer.id, (e) => {
        const feat  = e.features?.[0]; if (!feat) return
        const props = feat.properties as Record<string, unknown>
        const coords: [number, number] = [e.lngLat.lng, e.lngLat.lat]
        popupRef.current?.remove()
        popupRef.current = new mapboxgl.Popup({ maxWidth: "300px", closeButton: isWater ? false : true, offset: isWater ? 6 : 0 })
          .setLngLat(e.lngLat)
          .setHTML(isWater
            ? `<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px;min-width:160px"><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><span style="width:10px;height:10px;border-radius:3px;background:${layer.color};flex-shrink:0"></span><span style="font-weight:700;font-size:13px;color:#111">${str(props.name) || layer.label}</span></div><div style="font-size:11px;color:#9ca3af">ID ${str(props.external_id ?? props.id, "—")}</div></div>`
            : `<div style="font-family:Inter,sans-serif;padding:4px"><div style="font-weight:700;margin-bottom:6px;color:${layer.color}">${layer.label}</div><table style="border-collapse:collapse">${popupRows(props)}</table></div>`)
          .addTo(map)
        if (isWater) setSelectedObjRef.current({ kind: "water", label: layer.label, color: layer.color, properties: props, coords })
      })
    }

    setLoadedLayers(prev => new Set([...prev, layer.id]))
  }, [loadedLayers, beginLoad, endLoad, markLayer, onLayerLoad])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    if (map.getLayer("plants-combined")) {
      const visibleTypes = LAYERS.filter(l => "plantTiles" in l && visibleLayers.has(l.id)).map(l => (l as { plantType: number }).plantType)
      map.setFilter("plants-combined",
        visibleTypes.length > 0
          ? (["in",["get","plant_type"],["literal",visibleTypes]] as mapboxgl.FilterSpecification)
          : (["literal", false] as mapboxgl.FilterSpecification))
    }

    LAYERS.forEach(layer => {
      if (("plantTiles" in layer && layer.plantTiles) || ("lineTiles" in layer && layer.lineTiles)) {
        if (!loadedLayers.has(layer.id)) {
          // Not yet loaded — add source+layer (initVis set inside loadLayer)
          if (map.isStyleLoaded()) loadLayer(layer)
          else map.once("load", () => loadLayer(layer))
        } else if ("lineTiles" in layer && layer.lineTiles) {
          // Already loaded — toggle visibility (plant tiles use setFilter above)
          const vis = visibleLayers.has(layer.id) ? "visible" : "none"
          if (map.getLayer(layer.id)) map.setLayoutProperty(layer.id, "visibility", vis)
          const hid = `${layer.id}-highlight`
          if (map.getLayer(hid)) map.setLayoutProperty(hid, "visibility", vis)
        }
        return
      }

      if (loadedLayers.has(layer.id)) {
        // Already loaded — just toggle visibility
        const vis = visibleLayers.has(layer.id) ? "visible" : "none"
        const ids = layer.kind === "point"
          ? [layer.id, `${layer.id}-clusters`, `${layer.id}-count`]
          : [layer.id]
        ids.forEach(id => { if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", vis) })
        return
      }

      // Not yet loaded — pre-load eagerly in background; initVis controls visibility
      if (map.isStyleLoaded()) loadLayer(layer)
      else map.once("load", () => loadLayer(layer))
    })
  }, [visibleLayers, loadedLayers, loadLayer, mapReady])

  const closeDrawer = () => {
    setSelectedObject(null); setFullDetail(null); setReverseGeo(null)
    popupRef.current?.remove(); setDrawerView("passport")
    const map = mapRef.current
    if (map) {
      LAYERS.forEach(l => {
        if ("lineTiles" in l && l.lineTiles) {
          const hid = `${l.id}-highlight`
          if (map.getLayer(hid)) map.setFilter(hid, ["==", ["get", "id"], -1])
        }
      })
    }
  }

  const isDrawerOpen = selectedObject !== null
  const extId = str(selectedObject?.properties?.external_id ?? selectedObject?.properties?.id, "—")
  const accentColor = selectedObject?.kind === "plant" ? "#16a34a" : selectedObject?.kind === "water" ? "#2563eb" : "#f97316"

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />

      {/* District filter chip */}
      {selectedDistrict && (
        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 40, pointerEvents: "auto", transition: "opacity 0.2s", opacity: isDrawerOpen ? 0 : 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 14px", background: "#1d4ed8", color: "#fff", borderRadius: 24, fontSize: 13, fontWeight: 600, fontFamily: "Inter,sans-serif", boxShadow: "0 4px 20px rgba(29,78,216,0.45)", whiteSpace: "nowrap" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {selectedDistrict.name}
            <button
              onClick={() => onDistrictChange?.(null)}
              style={{ background: "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", color: "#fff", fontSize: 13, lineHeight: 1, padding: "2px 5px", borderRadius: 10, marginLeft: 2, fontFamily: "Inter,sans-serif" }}
              aria-label="Сбросить фильтр по району"
            >✕</button>
          </div>
        </div>
      )}

      {/* Floating "Подать обращение" */}
      <div style={{ position: "absolute", bottom: 28, left: 16, zIndex: 40, opacity: isDrawerOpen ? 0 : 1, pointerEvents: isDrawerOpen ? "none" : "auto", transition: "opacity 0.2s" }}>
        <button
          onClick={() => setShowStandaloneReport(true)}
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 10, border: "none", background: "#16a34a", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "Inter,sans-serif", boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" /></svg>
          Подать обращение
        </button>
      </div>

      {/* Standalone report */}
      {showStandaloneReport && (
        <div style={{ position: "absolute", inset: 0, zIndex: 60, display: "flex", justifyContent: "flex-end" }}>
          <div style={{ width: 380, height: "100%", background: "#fff", display: "flex", flexDirection: "column", boxShadow: "-4px 0 32px rgba(0,0,0,0.18)", fontFamily: "Inter,sans-serif" }}>
            <div style={{ padding: "14px 18px", borderBottom: "1px solid #e5e7eb", background: "#f9fafb", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>Подать обращение</span>
                <button onClick={() => setShowStandaloneReport(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#9ca3af", lineHeight: 1 }}>✕</button>
              </div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>Сообщите о проблеме на карте</div>
            </div>
            <ReportForm onClose={() => setShowStandaloneReport(false)} />
          </div>
        </div>
      )}

      {/* Passport / report drawer */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: 380, zIndex: 50,
        transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
        background: "#fff", boxShadow: "-4px 0 32px rgba(0,0,0,0.18)",
        display: "flex", flexDirection: "column", fontFamily: "Inter,sans-serif",
        overflow: "hidden", pointerEvents: isDrawerOpen ? "auto" : "none",
      }}>
        {selectedObject && (
          <>
            <div style={{ padding: "14px 18px 0", borderBottom: "1px solid #e5e7eb", background: "#f9fafb", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  {drawerView === "report" ? (
                    <button onClick={() => setDrawerView("passport")} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 6px", borderRadius: 6, color: "#6b7280", fontSize: 13, fontFamily: "Inter,sans-serif", whiteSpace: "nowrap" }}>← Назад</button>
                  ) : (
                    <>
                      <span style={{ width: 13, height: 13, borderRadius: "50%", background: selectedObject.color, flexShrink: 0, boxShadow: "0 0 0 2px rgba(0,0,0,0.08)" }} />
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#111", lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{selectedObject.label}</div>
                        <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>ID {extId}</div>
                      </div>
                    </>
                  )}
                </div>
                <button onClick={closeDrawer} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 6px", borderRadius: 6, color: "#9ca3af", fontSize: 16, lineHeight: 1, flexShrink: 0 }} aria-label="Закрыть">✕</button>
              </div>

              {drawerView === "passport" && (
                <div style={{ paddingBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: accentColor, borderBottom: `2px solid ${accentColor}`, paddingBottom: 6, display: "inline-block" }}>Паспорт объекта</span>
                </div>
              )}
              {drawerView === "report" && (
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111", paddingBottom: 10 }}>Оставить обращение</div>
              )}
            </div>

            {drawerView === "report" && (
              <ReportForm extId={extId} typeName={selectedObject.label} coords={selectedObject.coords} kind={selectedObject.kind} onClose={() => setDrawerView("passport")} />
            )}

            {drawerView === "passport" && (
              <>
                {selectedObject.kind === "plant" ? (
                  <PlantPassport properties={selectedObject.properties} fullDetail={fullDetail} geo={reverseGeo} />
                ) : selectedObject.kind === "water" ? (
                  <WaterPassport label={selectedObject.label} properties={selectedObject.properties} geo={reverseGeo} />
                ) : (
                  <WastePassport label={selectedObject.label} properties={selectedObject.properties} geo={reverseGeo} />
                )}

                {/* Task 7: removed "Редактировать" button */}
                <div style={{ borderTop: "1px solid #e5e7eb", padding: "12px 16px", flexShrink: 0, background: "#fff" }}>
                  <button
                    onClick={() => setDrawerView("report")}
                    style={{ width: "100%", padding: "10px 0", borderRadius: 8, fontSize: 13, fontWeight: 600, border: "none", background: accentColor, color: "#fff", cursor: "pointer", fontFamily: "Inter,sans-serif" }}
                  >
                    Оставить обращение
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Loading overlay */}
      {globalLoading && !forceSkipped && (() => {
        const entries   = Object.values(layerProgress)
        const total     = entries.length
        const errors    = entries.filter(e => e.status === "error")
        const loading   = entries.filter(e => e.status === "loading")
        const done      = entries.filter(e => e.status === "done" || e.status === "cached").length
        const settled   = done + errors.length   // layers that won't change anymore
        const pct       = total > 0 ? Math.round((settled / total) * 100) : 0
        const totalKb   = entries.reduce((s, e) => s + e.kb, 0)
        const totalMb   = (totalKb / 1024).toFixed(1)
        const hasErrors = errors.length > 0
        const isStuck   = loading.length > 0 && settled > 0
        const spinColor = hasErrors ? "#ef4444" : isStuck ? "#f59e0b" : "#16a34a"
        const activeLabel = loading[0]?.label ?? (hasErrors ? `Ошибка: ${errors.map(e => e.label).join(", ")}` : "Инициализация карты…")
        const canSkip   = settled > 0

        return (
          <div style={{ position: "absolute", inset: 0, zIndex: 100, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter,sans-serif" }}>
            <div style={{ background: "rgba(17,24,39,0.92)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "28px 32px", width: 360, boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, border: "3px solid rgba(255,255,255,0.12)", borderTopColor: spinColor, animation: "spin 0.8s linear infinite" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#f9fafb" }}>Загрузка карты</div>
                  <div style={{ fontSize: 11, color: hasErrors ? "#f87171" : isStuck ? "#f59e0b" : "#9ca3af", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {isStuck ? `Загружается: ${loading.map(s => s.label).join(", ")}` : activeLabel}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 99, height: 6, overflow: "hidden", marginBottom: 8 }}>
                <div style={{ height: "100%", borderRadius: 99, background: spinColor, width: `${pct}%`, transition: "width 0.4s ease" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#6b7280", marginBottom: entries.length > 0 ? 14 : 0 }}>
                <span>{settled} / {total} слоёв{hasErrors ? ` · ${errors.length} ошиб.` : ""}</span>
                <span>{pct}%{totalKb > 0 ? ` · ${totalMb} МБ` : ""}</span>
              </div>

              {/* Layer list — loading first, then errors, then done */}
              {entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 4, maxHeight: 180, overflowY: "auto", marginBottom: canSkip ? 16 : 0 }}>
                  {[...entries].sort((a, b) => {
                    const order = { loading: 0, error: 1, pending: 2, done: 3, cached: 4 }
                    return (order[a.status] ?? 5) - (order[b.status] ?? 5)
                  }).map(e => (
                    <div key={e.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, flexShrink: 0, width: 14, textAlign: "center",
                        color: e.status === "loading" ? "#f59e0b" : e.status === "error" ? "#ef4444" : "#4b5563" }}>
                        {e.status === "loading" ? "⏳" : e.status === "cached" ? "⚡" : e.status === "done" ? "✓" : e.status === "error" ? "✕" : "○"}
                      </span>
                      <span style={{ fontSize: 12, flex: 1,
                        color: e.status === "loading" ? "#fbbf24" : e.status === "error" ? "#f87171" : "#6b7280",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.label}</span>
                      {e.kb > 0 && <span style={{ fontSize: 11, color: "#4b5563", flexShrink: 0 }}>{e.kb >= 1024 ? `${(e.kb/1024).toFixed(1)} МБ` : `${e.kb} КБ`}</span>}
                    </div>
                  ))}
                </div>
              )}

              {/* Skip button — shown when at least some layers loaded */}
              {canSkip && (
                <button
                  onClick={() => { setForceSkipped(true); setGlobalLoading(false) }}
                  style={{ width: "100%", padding: "8px 0", borderRadius: 8, fontSize: 12, fontWeight: 600, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#9ca3af", cursor: "pointer", fontFamily: "Inter,sans-serif", transition: "background 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)" }}
                >
                  {isStuck ? "Пропустить зависшие слои →" : "Пропустить →"}
                </button>
              )}
            </div>
          </div>
        )
      })()}
    </div>
  )
}
