"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"

interface Props {
  initialCoords: [number, number]
  onConfirm: (coords: [number, number], address: string) => void
  onClose: () => void
}

type SearchResult = { place_name: string; center: [number, number] }

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ""

async function geocodeReverse(coords: [number, number]): Promise<string> {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords[0]},${coords[1]}.json?access_token=${MAPBOX_TOKEN}&language=ru&limit=1`
    )
    if (!res.ok) return ""
    const data = await res.json() as { features: { place_name: string }[] }
    return data.features[0]?.place_name ?? ""
  } catch { return "" }
}

export function LocationPickerModal({ initialCoords, onConfirm, onClose }: Props) {
  const containerRef  = useRef<HTMLDivElement>(null)
  const mapRef        = useRef<mapboxgl.Map | null>(null)
  const markerRef     = useRef<mapboxgl.Marker | null>(null)
  const [coords, setCoords]       = useState<[number, number]>(initialCoords)
  const [address, setAddress]     = useState("")
  const [loading, setLoading]     = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults]     = useState<SearchResult[]>([])
  const [dropOpen, setDropOpen]   = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // init map + marker
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return
    mapboxgl.accessToken = MAPBOX_TOKEN
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: initialCoords,
      zoom: 15,
    })
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right")

    const marker = new mapboxgl.Marker({ draggable: true, color: "#16a34a" })
      .setLngLat(initialCoords)
      .addTo(map)

    const updatePos = (c: [number, number]) => {
      setCoords(c)
      geocodeReverse(c).then(setAddress)
    }

    marker.on("dragend", () => {
      const { lng, lat } = marker.getLngLat()
      updatePos([lng, lat])
    })

    map.on("click", e => {
      const c: [number, number] = [e.lngLat.lng, e.lngLat.lat]
      marker.setLngLat(c)
      updatePos(c)
    })

    map.on("load", () => setLoading(false))

    mapRef.current  = map
    markerRef.current = marker
    updatePos(initialCoords)

    return () => { map.remove(); mapRef.current = null; markerRef.current = null }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // search debounce
  useEffect(() => {
    if (!searchQuery.trim()) { setResults([]); setDropOpen(false); return }
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(async () => {
      try {
        const enc = encodeURIComponent(searchQuery)
        const res = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${enc}.json?access_token=${MAPBOX_TOKEN}&proximity=76.945,43.238&country=kz&language=ru&limit=5`
        )
        if (!res.ok) return
        const data = await res.json() as { features: SearchResult[] }
        setResults(data.features ?? [])
        setDropOpen(true)
      } catch { /* non-fatal */ }
    }, 350)
  }, [searchQuery])

  const flyTo = (r: SearchResult) => {
    mapRef.current?.flyTo({ center: r.center, zoom: 16, duration: 700 })
    markerRef.current?.setLngLat(r.center)
    setCoords(r.center)
    setAddress(r.place_name)
    setSearchQuery(r.place_name.split(",")[0])
    setDropOpen(false)
  }

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      onClick={handleBackdrop}
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        background: "rgba(0,0,0,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Inter,sans-serif",
      }}
    >
      <div style={{
        width: 620, maxWidth: "calc(100vw - 32px)",
        height: 540,
        background: "#fff", borderRadius: 16,
        overflow: "hidden", display: "flex", flexDirection: "column",
        boxShadow: "0 24px 64px rgba(0,0,0,0.30)",
      }}>

        {/* header */}
        <div style={{
          padding: "14px 18px", borderBottom: "1px solid #e5e7eb",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>Выбрать местоположение</div>
          <button onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 18, lineHeight: 1, padding: "2px 6px" }}>
            ✕
          </button>
        </div>

        {/* search bar */}
        <div style={{ padding: "10px 16px", borderBottom: "1px solid #f3f4f6", position: "relative", flexShrink: 0 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            border: "1px solid #e5e7eb", borderRadius: 8, padding: "7px 12px",
            background: "#fff",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Поиск адреса в Алматы…"
              style={{ flex: 1, border: "none", outline: "none", fontSize: 13, color: "#111", background: "transparent", fontFamily: "Inter,sans-serif" }}
            />
            {searchQuery && (
              <button onClick={() => { setSearchQuery(""); setResults([]); setDropOpen(false) }}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: 0, display: "flex", alignItems: "center" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {dropOpen && results.length > 0 && (
            <div style={{
              position: "absolute", top: "calc(100% - 4px)", left: 16, right: 16,
              background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8,
              boxShadow: "0 8px 24px rgba(0,0,0,0.14)", zIndex: 300, overflow: "hidden",
            }}>
              {results.map((r, i) => (
                <button key={i} onClick={() => flyTo(r)}
                  style={{
                    width: "100%", textAlign: "left", padding: "8px 14px",
                    border: "none", background: "none", cursor: "pointer", fontSize: 13,
                    borderBottom: i < results.length - 1 ? "1px solid #f3f4f6" : "none",
                    fontFamily: "Inter,sans-serif",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#f9fafb" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "none" }}
                >
                  <span style={{ color: "#111", fontWeight: 500 }}>{r.place_name.split(",")[0]}</span>
                  <span style={{ color: "#9ca3af", fontSize: 11, marginLeft: 6 }}>
                    {r.place_name.split(",").slice(1, 2).join("").trim()}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* map */}
        <div style={{ position: "relative", flex: 1 }}>
          <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />
          {loading && (
            <div style={{
              position: "absolute", inset: 0, background: "#f3f4f6",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#9ca3af", fontSize: 13, zIndex: 10,
            }}>
              Загрузка карты…
            </div>
          )}
          <div style={{
            position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 11,
            padding: "5px 12px", borderRadius: 20, zIndex: 10,
            pointerEvents: "none", whiteSpace: "nowrap",
          }}>
            Нажмите на карту или перетащите маркер
          </div>
        </div>

        {/* footer */}
        <div style={{
          padding: "12px 16px", borderTop: "1px solid #e5e7eb",
          display: "flex", alignItems: "center", gap: 12, flexShrink: 0,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, color: "#374151", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {address || "Определение адреса…"}
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2, fontVariantNumeric: "tabular-nums" }}>
              {coords[1].toFixed(6)}, {coords[0].toFixed(6)}
            </div>
          </div>
          <button onClick={onClose}
            style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#f9fafb", fontSize: 13, cursor: "pointer", color: "#6b7280", fontFamily: "Inter,sans-serif", flexShrink: 0 }}>
            Отмена
          </button>
          <button onClick={() => onConfirm(coords, address)}
            style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: "#16a34a", fontSize: 13, cursor: "pointer", color: "#fff", fontWeight: 600, fontFamily: "Inter,sans-serif", flexShrink: 0 }}>
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  )
}
