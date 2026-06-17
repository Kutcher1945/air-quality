(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SensorMapYandex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pm25.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ── Constants ──────────────────────────────────────────────────────────────────
const MAPBOX_TOKEN = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJjdGljLW5pZ2h0bWFyZSIsImEiOiJjbXFocGR5Nm4wMWU3MnhyNjl2dzJneHkyIn0.N_K1OAmPdssi3DrDnRNvSQ") ?? "";
const DEFAULT_CENTER = [
    76.889709,
    43.238949
];
const DISTRICT_COLORS = [
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#f59e0b",
    "#10b981",
    "#06b6d4",
    "#3b82f6",
    "#f97316",
    "#84cc16"
];
// ── Color helpers ──────────────────────────────────────────────────────────────
function aqiColor(aqi) {
    if (aqi == null) return "#6b7280";
    if (aqi <= 50) return "#1BA97C";
    if (aqi <= 100) return "#f59e0b";
    if (aqi <= 150) return "#f97316";
    if (aqi <= 200) return "#ef4444";
    if (aqi <= 300) return "#a855f7";
    return "#581c87";
}
// ── Marker element factories ───────────────────────────────────────────────────
function makeSensorEl(sensor, metricMode, onClick) {
    const pm25 = sensor.value;
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(pm25);
    let display;
    if (metricMode === "epa-aqi" && pm25 != null) {
        const aqi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25ToEpaAqi"])(pm25);
        display = aqi ? aqi.aqi.toString() : "?";
    } else {
        display = pm25 != null ? Math.round(pm25).toString() : "?";
    }
    const w = display.length <= 2 ? 34 : display.length === 3 ? 40 : 46;
    const el = document.createElement("div");
    el.style.cssText = "cursor:pointer";
    el.innerHTML = `<div style="background:${color};color:#fff;font-family:system-ui,sans-serif;font-weight:800;font-size:12px;line-height:1;width:${w}px;height:24px;border-radius:7px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.35);border:2px solid rgba(255,255,255,.45)">${display}</div>`;
    el.addEventListener("click", onClick);
    return el;
}
function makeEcoIqEl(s, onClick) {
    const color = aqiColor(s.aqi);
    const label = s.aqi != null ? s.aqi.toString() : "?";
    const fontSize = label.length >= 3 ? 8 : 9;
    const el = document.createElement("div");
    el.style.cssText = "cursor:pointer;line-height:0";
    el.innerHTML = `<svg width="38" height="38" viewBox="0 0 38 38" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,.4))"><polygon points="19,2 36,34 2,34" fill="${color}" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/><text x="19" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="${fontSize}" fill="white">${label}</text></svg>`;
    el.addEventListener("click", onClick);
    return el;
}
// ── District loader ────────────────────────────────────────────────────────────
async function loadDistricts(map) {
    try {
        const res = await fetch("https://admin.smartalmaty.kz/api/v1/address/districts/");
        const geojson = await res.json();
        let colorIdx = 0;
        const features = (geojson.features ?? []).filter((f)=>f.geometry && String(f?.properties?.name_ru ?? "").includes("район")).map((f)=>({
                ...f,
                properties: {
                    ...f.properties,
                    _color: DISTRICT_COLORS[colorIdx++ % DISTRICT_COLORS.length]
                }
            }));
        map.addSource("districts", {
            type: "geojson",
            data: {
                type: "FeatureCollection",
                features
            }
        });
        map.addLayer({
            id: "districts-fill",
            type: "fill",
            source: "districts",
            paint: {
                "fill-color": [
                    "get",
                    "_color"
                ],
                "fill-opacity": 0.07
            }
        });
        map.addLayer({
            id: "districts-line",
            type: "line",
            source: "districts",
            paint: {
                "line-color": [
                    "get",
                    "_color"
                ],
                "line-width": 1.5,
                "line-opacity": 0.8
            }
        });
        // District name tooltip
        const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
            closeButton: false,
            closeOnClick: false
        });
        map.on("mousemove", "districts-fill", (e)=>{
            const name = e.features?.[0]?.properties?.name_ru;
            if (!name) return;
            popup.setLngLat(e.lngLat).setHTML(`<span style="font-family:system-ui;font-size:12px;font-weight:600;color:#111">${name}</span>`).addTo(map);
        });
        map.on("mouseleave", "districts-fill", ()=>popup.remove());
    } catch  {}
}
function SensorMapYandex({ sensors, ecoIqSensors = [], onSensorSelect, onEcoIqSelect, focusedSensor, metricMode = "pm25", sourceFilter = "all" }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const ecoIqMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const fittedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onSensorSelect);
    const onEcoSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onEcoIqSelect);
    const [mapReady, setMapReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trafficVisible, setTrafficVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windVisible, setWindVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windData, setWindData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            onSelectRef.current = onSensorSelect;
        }
    }["SensorMapYandex.useEffect"], [
        onSensorSelect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            onEcoSelectRef.current = onEcoIqSelect;
        }
    }["SensorMapYandex.useEffect"], [
        onEcoIqSelect
    ]);
    // Fetch current wind from Open-Meteo (free, no auth, works globally)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            fetch("https://api.open-meteo.com/v1/forecast?latitude=43.238949&longitude=76.889709&current=wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&timezone=Asia/Almaty").then({
                "SensorMapYandex.useEffect": (r)=>r.json()
            }["SensorMapYandex.useEffect"]).then({
                "SensorMapYandex.useEffect": (d)=>{
                    const speed = d?.current?.wind_speed_10m;
                    const direction = d?.current?.wind_direction_10m;
                    if (speed != null && direction != null) {
                        setWindData({
                            speed,
                            direction
                        });
                    }
                }
            }["SensorMapYandex.useEffect"]).catch({
                "SensorMapYandex.useEffect": ()=>{}
            }["SensorMapYandex.useEffect"]);
        }
    }["SensorMapYandex.useEffect"], []);
    const valid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SensorMapYandex.useMemo[valid]": ()=>sensors.filter({
                "SensorMapYandex.useMemo[valid]": (s)=>s.latitude != null && s.longitude != null
            }["SensorMapYandex.useMemo[valid]"])
    }["SensorMapYandex.useMemo[valid]"], [
        sensors
    ]);
    // ── Init map ──────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (!containerRef.current || mapRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = MAPBOX_TOKEN;
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: containerRef.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: DEFAULT_CENTER,
                zoom: 11
            });
            map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl({
                showCompass: false
            }), "bottom-right");
            map.on("load", {
                "SensorMapYandex.useEffect": ()=>{
                    // Traffic source + layer (hidden by default)
                    map.addSource("mapbox-traffic", {
                        type: "vector",
                        url: "mapbox://mapbox.mapbox-traffic-v1"
                    });
                    map.addLayer({
                        id: "traffic-layer",
                        type: "line",
                        source: "mapbox-traffic",
                        "source-layer": "traffic",
                        layout: {
                            visibility: "none"
                        },
                        paint: {
                            "line-width": [
                                "interpolate",
                                [
                                    "linear"
                                ],
                                [
                                    "zoom"
                                ],
                                8,
                                1,
                                16,
                                5
                            ],
                            "line-color": [
                                "match",
                                [
                                    "get",
                                    "congestion"
                                ],
                                "low",
                                "#4ade80",
                                "moderate",
                                "#facc15",
                                "heavy",
                                "#fb923c",
                                "severe",
                                "#f87171",
                                "#4ade80"
                            ]
                        }
                    });
                    loadDistricts(map);
                    setMapReady(true);
                }
            }["SensorMapYandex.useEffect"]);
            mapRef.current = map;
            return ({
                "SensorMapYandex.useEffect": ()=>{
                    map.remove();
                    mapRef.current = null;
                    fittedRef.current = false;
                    markersRef.current = [];
                    ecoIqMarkersRef.current = [];
                }
            })["SensorMapYandex.useEffect"];
        }
    }["SensorMapYandex.useEffect"], []);
    // ── Fly to focused sensor ─────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (!mapReady || !mapRef.current || !focusedSensor?.latitude || !focusedSensor?.longitude) return;
            mapRef.current.flyTo({
                center: [
                    focusedSensor.longitude,
                    focusedSensor.latitude
                ],
                zoom: 16,
                duration: 1200
            });
        }
    }["SensorMapYandex.useEffect"], [
        focusedSensor,
        mapReady
    ]);
    // ── Sensor markers ────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (!mapReady || !mapRef.current) return;
            for (const m of markersRef.current)m.remove();
            markersRef.current = [];
            const bounds = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LngLatBounds();
            let hasPoints = false;
            for (const sensor of valid){
                const el = makeSensorEl(sensor, metricMode, {
                    "SensorMapYandex.useEffect.el": ()=>onSelectRef.current?.(sensor)
                }["SensorMapYandex.useEffect.el"]);
                const pm25 = sensor.value;
                const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(pm25);
                const time = sensor.measured_at ? new Date(sensor.measured_at).toLocaleString("ru-RU") : "—";
                const aqiResult = pm25 != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25ToEpaAqi"])(pm25) : null;
                const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                    offset: 16
                }).setHTML(`
        <div style="min-width:200px;font-family:system-ui">
          <p style="font-size:13px;font-weight:700;margin:0 0 8px;color:#111">${sensor.sensor_name ?? "Сенсор"}</p>
          ${sensor.source ? `<p style="font-size:11px;color:#6b7280;margin:0 0 8px">${sensor.source}</p>` : ""}
          ${pm25 != null ? `
            <div style="margin:0 0 8px;padding:8px 10px;background:${color}18;border-left:3px solid ${color};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">PM<sub>2.5</sub> · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Label"])(pm25)}</p>
              <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:${color}">${pm25.toFixed(1)} <span style="font-size:11px;font-weight:500">µg/m³</span></p>
              ${aqiResult ? `<p style="margin:4px 0 0;font-size:11px;color:#6b7280">US EPA AQI ≈ <strong style="color:${color}">${aqiResult.aqi}</strong></p>` : ""}
            </div>
          ` : `<p style="color:#9ca3af;font-size:12px;margin:0 0 8px">Нет данных PM₂.₅</p>`}
          <p style="margin:0;font-size:10px;color:#9ca3af">Обновлено: ${time}</p>
        </div>`);
                const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                    element: el,
                    anchor: "center"
                }).setLngLat([
                    sensor.longitude,
                    sensor.latitude
                ]).setPopup(popup).addTo(mapRef.current);
                markersRef.current.push(marker);
                bounds.extend([
                    sensor.longitude,
                    sensor.latitude
                ]);
                hasPoints = true;
            }
            if (hasPoints && !fittedRef.current) {
                mapRef.current.fitBounds(bounds, {
                    padding: 60,
                    maxZoom: 13
                });
                fittedRef.current = true;
            }
        }
    }["SensorMapYandex.useEffect"], [
        valid,
        metricMode,
        mapReady
    ]);
    // ── EcoIQ markers ─────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (!mapReady || !mapRef.current) return;
            for (const m of ecoIqMarkersRef.current)m.remove();
            ecoIqMarkersRef.current = [];
            if (sourceFilter !== "all" && sourceFilter !== "EcoIQ") return;
            for (const s of ecoIqSensors){
                if (!s.latitude || !s.longitude) continue;
                const el = makeEcoIqEl(s, {
                    "SensorMapYandex.useEffect.el": ()=>onEcoSelectRef.current?.(s)
                }["SensorMapYandex.useEffect.el"]);
                const color = aqiColor(s.aqi);
                const time = s.measured_at ? new Date(s.measured_at).toLocaleString("ru-RU") : "—";
                const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                    offset: [
                        0,
                        -38
                    ]
                }).setHTML(`
        <div style="min-width:200px;font-family:system-ui">
          <div style="display:flex;align-items:center;gap:6px;margin:0 0 6px">
            <svg width="12" height="12" viewBox="0 0 32 32"><polygon points="16,2 30,28 2,28" fill="${color}"/></svg>
            <p style="font-size:13px;font-weight:700;margin:0;color:#111">${s.name ?? "EcoIQ станция"}</p>
          </div>
          <p style="font-size:10px;color:#6b7280;margin:0 0 8px">EcoIQ · ${s.is_high_precision ? "высокоточная" : "стандартная"} станция</p>
          ${s.aqi != null ? `
            <div style="margin:0 0 8px;padding:8px 10px;background:${color}18;border-left:3px solid ${color};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">AQI</p>
              <p style="margin:4px 0 0;font-size:22px;font-weight:800;color:${color}">${s.aqi}</p>
              ${s.pm25_concentration != null ? `<p style="margin:4px 0 0;font-size:11px;color:#6b7280">PM<sub>2.5</sub>: <strong style="color:${color}">${s.pm25_concentration} µg/m³</strong></p>` : ""}
            </div>
          ` : ""}
          <p style="margin:0;font-size:10px;color:#9ca3af">Обновлено: ${time}</p>
        </div>`);
                const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                    element: el,
                    anchor: "bottom"
                }).setLngLat([
                    s.longitude,
                    s.latitude
                ]).setPopup(popup).addTo(mapRef.current);
                ecoIqMarkersRef.current.push(marker);
            }
        }
    }["SensorMapYandex.useEffect"], [
        ecoIqSensors,
        sourceFilter,
        mapReady
    ]);
    // ── Traffic layer toggle ───────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (!mapReady || !mapRef.current) return;
            try {
                mapRef.current.setLayoutProperty("traffic-layer", "visibility", trafficVisible ? "visible" : "none");
            } catch  {}
        }
    }["SensorMapYandex.useEffect"], [
        trafficVisible,
        mapReady
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "h-full w-full rounded-xl"
            }, void 0, false, {
                fileName: "[project]/components/sensor-map-yandex.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            !valid.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground",
                children: "Нет данных сенсоров"
            }, void 0, false, {
                fileName: "[project]/components/sensor-map-yandex.tsx",
                lineNumber: 371,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setTrafficVisible((v)=>!v),
                title: trafficVisible ? "Скрыть пробки" : "Показать пробки",
                className: `absolute right-3 top-3 z-[1000] flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur transition-colors ${trafficVisible ? "border-orange-400 bg-orange-500 text-white" : "border-border bg-background/90 text-foreground hover:bg-muted"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 6h8l2 6H6L8 6z"
                            }, void 0, false, {
                                fileName: "[project]/components/sensor-map-yandex.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "9",
                                cy: "17",
                                r: "2"
                            }, void 0, false, {
                                fileName: "[project]/components/sensor-map-yandex.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "15",
                                cy: "17",
                                r: "2"
                            }, void 0, false, {
                                fileName: "[project]/components/sensor-map-yandex.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M3 12h18"
                            }, void 0, false, {
                                fileName: "[project]/components/sensor-map-yandex.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sensor-map-yandex.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    "Пробки"
                ]
            }, void 0, true, {
                fileName: "[project]/components/sensor-map-yandex.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sensor-map-yandex.tsx",
        lineNumber: 367,
        columnNumber: 5
    }, this);
}
_s(SensorMapYandex, "P2wN7z7U+BoNyYYLg+ZDNaryIGQ=");
_c = SensorMapYandex;
var _c;
__turbopack_context__.k.register(_c, "SensorMapYandex");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_sensor-map-yandex_tsx_b53077f4._.js.map