(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/pm25.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PM2.5 concentration categories and US EPA AQI (2024) calculation.
 *
 * Note: "levels" here are PM2.5 concentration categories (WHO/health-based),
 * NOT the US EPA AQI index (0–500). See pm25ToEpaAqi() for the actual index.
 *
 * Thresholds align with WHO 2021 24h guideline (15 µg/m³) as upper bound
 * for the "good" category, then follow EPA 2024 breakpoints from ≥35.5 onward.
 */ // ── Types ──────────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "getPm25Config",
    ()=>getPm25Config,
    "pm25Color",
    ()=>pm25Color,
    "pm25Label",
    ()=>pm25Label,
    "pm25ToEpaAqi",
    ()=>pm25ToEpaAqi
]);
function pm25Color(pm25) {
    if (pm25 == null) return "#9ca3af";
    if (pm25 <= 15) return "#3b82f6";
    if (pm25 <= 35) return "#22c55e";
    if (pm25 <= 55) return "#eab308";
    if (pm25 <= 150) return "#ef4444";
    if (pm25 <= 250) return "#a855f7";
    return "#7f1d1d";
}
function pm25Label(pm25) {
    if (pm25 == null) return "Нет данных";
    if (pm25 <= 15) return "Хорошо";
    if (pm25 <= 35) return "Умеренно";
    if (pm25 <= 55) return "Чувствительным";
    if (pm25 <= 150) return "Вредно";
    if (pm25 <= 250) return "Очень вредно";
    return "Опасно";
}
function getPm25Config(pm25) {
    if (pm25 <= 15) return {
        level: "very-good",
        label: "Хорошо",
        heroLabel: "Хорошо",
        heroBg: "#dbeafe",
        barBg: "#3b82f6",
        accent: "#3b82f6",
        accentLight: "#dbeafe"
    };
    if (pm25 <= 35) return {
        level: "good",
        label: "Умеренно",
        heroLabel: "Умеренно",
        heroBg: "#dcfce7",
        barBg: "#22c55e",
        accent: "#22c55e",
        accentLight: "#dcfce7"
    };
    if (pm25 <= 55) return {
        level: "moderate",
        label: "Вредно для чувствительных групп",
        heroLabel: "Чувствительным",
        heroBg: "#fef9c3",
        barBg: "#eab308",
        accent: "#ca8a04",
        accentLight: "#fef9c3"
    };
    if (pm25 <= 150) return {
        level: "unhealthy",
        label: "Вредно",
        heroLabel: "Вредно",
        heroBg: "#fee2e2",
        barBg: "#ef4444",
        accent: "#ef4444",
        accentLight: "#fee2e2"
    };
    if (pm25 <= 250) return {
        level: "very-unhealthy",
        label: "Очень вредно",
        heroLabel: "Очень вредно",
        heroBg: "#f3e8ff",
        barBg: "#a855f7",
        accent: "#a855f7",
        accentLight: "#f3e8ff"
    };
    return {
        level: "hazardous",
        label: "Опасно",
        heroLabel: "Опасно",
        heroBg: "#fee2e2",
        barBg: "#7f1d1d",
        accent: "#7f1d1d",
        accentLight: "#fee2e2"
    };
}
// ── US EPA AQI (2024) ──────────────────────────────────────────────────────────
/**
 * EPA 2024 PM2.5 breakpoints (eCFR Appendix G, Table 2).
 * Input must be 24-hour AVERAGE PM2.5, truncated to 1 decimal.
 * Source: https://www.ecfr.gov/current/title-40/appendix-Appendix_G_to_Part_58
 */ const EPA_2024_BREAKPOINTS = [
    {
        cLo: 0.0,
        cHi: 9.0,
        iLo: 0,
        iHi: 50,
        level: "very-good"
    },
    {
        cLo: 9.1,
        cHi: 35.4,
        iLo: 51,
        iHi: 100,
        level: "good"
    },
    {
        cLo: 35.5,
        cHi: 55.4,
        iLo: 101,
        iHi: 150,
        level: "moderate"
    },
    {
        cLo: 55.5,
        cHi: 125.4,
        iLo: 151,
        iHi: 200,
        level: "unhealthy"
    },
    {
        cLo: 125.5,
        cHi: 225.4,
        iLo: 201,
        iHi: 300,
        level: "very-unhealthy"
    },
    {
        cLo: 225.5,
        cHi: 325.4,
        iLo: 301,
        iHi: 500,
        level: "hazardous"
    }
];
function pm25ToEpaAqi(pm25_24h_avg) {
    if (!isFinite(pm25_24h_avg) || pm25_24h_avg < 0) return null;
    // EPA truncates to 1 decimal place (not rounds)
    const c = Math.floor(pm25_24h_avg * 10) / 10;
    const bp = EPA_2024_BREAKPOINTS.find((x)=>c >= x.cLo && c <= x.cHi) ?? EPA_2024_BREAKPOINTS[EPA_2024_BREAKPOINTS.length - 1];
    const aqi = Math.round((bp.iHi - bp.iLo) / (bp.cHi - bp.cLo) * (c - bp.cLo) + bp.iLo);
    return {
        aqi,
        level: bp.level,
        label: pm25Label(c)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SensorMapYandex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pm25.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ── AQI helpers ────────────────────────────────────────────────────────────────
const DEFAULT_CENTER = [
    43.238949,
    76.889709
];
const YANDEX_TILE_URL = "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU";
// ── Individual sensor marker ───────────────────────────────────────────────────
function createSensorIcon(pm25) {
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(pm25);
    const display = pm25 != null ? Math.round(pm25).toString() : "?";
    const w = display.length <= 2 ? 34 : 40;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: "",
        html: `<div style="
      background:${color};
      color:#fff;
      font-family:system-ui,-apple-system,sans-serif;
      font-weight:800;
      font-size:12px;
      line-height:1;
      width:${w}px;
      height:24px;
      border-radius:7px;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 2px 6px rgba(0,0,0,0.35);
      border:2px solid rgba(255,255,255,0.45);
    ">${display}</div>`,
        iconSize: [
            w,
            24
        ],
        iconAnchor: [
            w / 2,
            12
        ],
        popupAnchor: [
            0,
            -16
        ]
    });
}
// ── District boundary helpers ──────────────────────────────────────────────────
const DISTRICT_PALETTE = [
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
function loadDistrictLayer(map) {
    fetch("https://admin.smartalmaty.kz/api/v1/address/districts/").then((r)=>r.json()).then((geojson)=>{
        let colorIdx = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].geoJSON(geojson, {
            filter: (f)=>f.geometry != null && String(f?.properties?.name_ru ?? "").includes("район"),
            style () {
                const color = DISTRICT_PALETTE[colorIdx++ % DISTRICT_PALETTE.length];
                return {
                    color,
                    weight: 1.5,
                    fillColor: color,
                    fillOpacity: 0.07
                };
            },
            onEachFeature (feature, layer) {
                const name = feature?.properties?.name_ru ?? "";
                if (name) {
                    layer.bindTooltip(name, {
                        sticky: true,
                        className: "district-label"
                    });
                }
            }
        }).addTo(map);
    }).catch(()=>{});
}
function SensorMapYandex({ sensors, onSensorSelect, focusedSensor }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markerLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasAutoFitted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const valid = sensors.filter((s)=>s.latitude != null && s.longitude != null);
    // Init map once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || !mapRef.current || mapInstanceRef.current) return;
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapRef.current, {
                crs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CRS.EPSG3395,
                center: DEFAULT_CENTER,
                zoom: 11,
                preferCanvas: true,
                zoomAnimation: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer(YANDEX_TILE_URL, {
                attribution: '&copy; <a href="https://yandex.com/maps/">Yandex</a>',
                maxZoom: 18,
                minZoom: 0
            }).addTo(map);
            mapInstanceRef.current = map;
            loadDistrictLayer(map);
            return ({
                "SensorMapYandex.useEffect": ()=>{
                    mapInstanceRef.current?.remove();
                    mapInstanceRef.current = null;
                }
            })["SensorMapYandex.useEffect"];
        }
    }["SensorMapYandex.useEffect"], []);
    // Fly to focused sensor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (!mapInstanceRef.current || !focusedSensor?.latitude || !focusedSensor?.longitude) return;
            mapInstanceRef.current.flyTo([
                focusedSensor.latitude,
                focusedSensor.longitude
            ], 18, {
                animate: true,
                duration: 1.2
            });
        }
    }["SensorMapYandex.useEffect"], [
        focusedSensor
    ]);
    // Update markers when sensors change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (!mapInstanceRef.current || ("TURBOPACK compile-time value", "object") === "undefined") return;
            const map = mapInstanceRef.current;
            if (markerLayerRef.current) {
                map.removeLayer(markerLayerRef.current);
                markerLayerRef.current = null;
            }
            if (!valid.length) return;
            const layer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layerGroup();
            for (const sensor of valid){
                const pm25 = sensor.value;
                const icon = createSensorIcon(pm25);
                const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(pm25);
                const time = sensor.measured_at ? new Date(sensor.measured_at).toLocaleString("ru-RU") : "—";
                const popup = `
        <div style="min-width:200px;font-family:system-ui">
          <p style="font-size:13px;font-weight:700;margin:0 0 8px;color:#111">${sensor.sensor_name ?? "Сенсор"}</p>
          ${sensor.source ? `<p style="font-size:11px;color:#6b7280;margin:0 0 8px">${sensor.source}</p>` : ""}
          ${pm25 != null ? `
            <div style="margin:0 0 8px;padding:8px 10px;background:${color}18;border-left:3px solid ${color};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">PM<sub>2.5</sub> · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Label"])(pm25)}</p>
              <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:${color}">${pm25.toFixed(1)} <span style="font-size:11px;font-weight:500">µg/m³</span></p>
            </div>
          ` : `<p style="color:#9ca3af;font-size:12px;margin:0 0 8px">Нет данных PM₂.₅</p>`}
          <p style="margin:0;font-size:10px;color:#9ca3af">Обновлено: ${time}</p>
        </div>`;
                const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                    sensor.latitude,
                    sensor.longitude
                ], {
                    icon
                }).bindPopup(popup);
                if (onSensorSelect) {
                    marker.on("click", {
                        "SensorMapYandex.useEffect": ()=>onSensorSelect(sensor)
                    }["SensorMapYandex.useEffect"]);
                }
                layer.addLayer(marker);
            }
            layer.addTo(map);
            markerLayerRef.current = layer;
            if (!hasAutoFitted.current && valid.length > 0) {
                map.fitBounds(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(valid.map({
                    "SensorMapYandex.useEffect": (s)=>[
                            s.latitude,
                            s.longitude
                        ]
                }["SensorMapYandex.useEffect"])), {
                    padding: [
                        50,
                        50
                    ]
                });
                hasAutoFitted.current = true;
            }
        }
    }["SensorMapYandex.useEffect"], [
        valid
    ]);
    if (!valid.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground",
            children: "Нет данных сенсоров"
        }, void 0, false, {
            fileName: "[project]/components/sensor-map-yandex.tsx",
            lineNumber: 206,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapRef,
        className: "h-full w-full rounded-xl"
    }, void 0, false, {
        fileName: "[project]/components/sensor-map-yandex.tsx",
        lineNumber: 212,
        columnNumber: 10
    }, this);
}
_s(SensorMapYandex, "+H6SEmIovPZh6LMUL96q/uHCTOc=");
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

//# sourceMappingURL=_39293d74._.js.map