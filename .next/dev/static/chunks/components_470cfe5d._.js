(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/wind-layer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WindLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// ── Config ────────────────────────────────────────────────────────────────────
const PARTICLE_COUNT = 1200;
const SPEED_SCALE = 0.16 // canvas-px per frame per m/s
;
const FADE_ALPHA = 0.03 // lower = longer trails
;
const PARTICLE_SIZE = 3;
// ── Inverse-distance-weighted interpolation of wind at a lat/lng ──────────────
function interpolateWind(points, lat, lng) {
    if (!points.length) return {
        vx: 0,
        vy: 0
    };
    if (points.length === 1) {
        const rad = points[0].direction * Math.PI / 180;
        return {
            vx: -Math.sin(rad) * points[0].speed * SPEED_SCALE,
            vy: Math.cos(rad) * points[0].speed * SPEED_SCALE
        };
    }
    let totalW = 0, wx = 0, wy = 0;
    for (const p of points){
        const d2 = (p.lat - lat) ** 2 + (p.lng - lng) ** 2;
        const w = d2 < 1e-8 ? 1e8 : 1 / d2;
        const rad = p.direction * Math.PI / 180;
        // Wind direction = FROM, so particle moves in the OPPOSITE direction on canvas
        // (wind from N → particle goes south = +y in canvas coords)
        wx += -Math.sin(rad) * p.speed * w;
        wy += Math.cos(rad) * p.speed * w;
        totalW += w;
    }
    return {
        vx: wx / totalW * SPEED_SCALE,
        vy: wy / totalW * SPEED_SCALE
    };
}
// ── Convert canvas pixel to approximate lat/lng ────────────────────────────────
function pixelToGeo(px, py, cw, ch, bounds) {
    if (!bounds) return {
        lat: 43.24,
        lng: 76.89
    };
    const lng = bounds.west + px / cw * (bounds.east - bounds.west);
    const lat = bounds.north - py / ch * (bounds.north - bounds.south);
    return {
        lat,
        lng
    };
}
// ── Particle color by average wind speed ──────────────────────────────────────
function particleColor(_speed, alpha) {
    return `rgba(14,165,233,${Math.min(alpha * 1.8, 1)})` // sky-500
    ;
}
function WindLayer({ points, bounds, visible }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Refs so the animation loop can read the latest values without restarting
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(points);
    const boundsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(bounds);
    // Sync refs on every render — never triggers animation restart
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindLayer.useEffect": ()=>{
            pointsRef.current = points;
        }
    }["WindLayer.useEffect"], [
        points
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindLayer.useEffect": ()=>{
            boundsRef.current = bounds;
        }
    }["WindLayer.useEffect"], [
        bounds
    ]);
    // Match canvas dimensions to parent element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindLayer.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas?.parentElement) return;
            const setSize = {
                "WindLayer.useEffect.setSize": ()=>{
                    const { clientWidth: w, clientHeight: h } = canvas.parentElement;
                    if (canvas.width !== w || canvas.height !== h) {
                        canvas.width = w;
                        canvas.height = h;
                    }
                }
            }["WindLayer.useEffect.setSize"];
            const ro = new ResizeObserver(setSize);
            ro.observe(canvas.parentElement);
            setSize();
            return ({
                "WindLayer.useEffect": ()=>ro.disconnect()
            })["WindLayer.useEffect"];
        }
    }["WindLayer.useEffect"], []);
    // Animation loop — only restarts when visibility changes or on first mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindLayer.useEffect": ()=>{
            cancelAnimationFrame(rafRef.current);
            const canvas = canvasRef.current;
            if (!canvas || !visible) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            // Init particles spread across the whole canvas
            const cw = canvas.width || canvas.parentElement?.clientWidth || 900;
            const ch = canvas.height || canvas.parentElement?.clientHeight || 600;
            particlesRef.current = Array.from({
                length: PARTICLE_COUNT
            }, {
                "WindLayer.useEffect": ()=>{
                    const x = Math.random() * cw;
                    const y = Math.random() * ch;
                    return {
                        x,
                        y,
                        px: x,
                        py: y,
                        age: Math.floor(Math.random() * 150),
                        maxAge: 100 + Math.random() * 150,
                        jitter: 0.7 + Math.random() * 0.6
                    };
                }
            }["WindLayer.useEffect"]);
            const frame = {
                "WindLayer.useEffect.frame": ()=>{
                    const W = canvas.width;
                    const H = canvas.height;
                    const pts = pointsRef.current;
                    const bnd = boundsRef.current;
                    // Average speed for colour (computed from current points ref)
                    const avgSpeed = pts.length ? pts.reduce({
                        "WindLayer.useEffect.frame": (s, p)=>s + p.speed
                    }["WindLayer.useEffect.frame"], 0) / pts.length : 3;
                    // Fade trails toward transparent
                    ctx.globalCompositeOperation = "destination-out";
                    ctx.fillStyle = `rgba(0,0,0,${FADE_ALPHA})`;
                    ctx.fillRect(0, 0, W, H);
                    ctx.globalCompositeOperation = "source-over";
                    for (const p of particlesRef.current){
                        const geo = pixelToGeo(p.x, p.y, W, H, bnd);
                        const wind = pts.length ? interpolateWind(pts, geo.lat, geo.lng) : {
                            vx: 0,
                            vy: 0
                        };
                        p.px = p.x;
                        p.py = p.y;
                        p.x += wind.vx * p.jitter;
                        p.y += wind.vy * p.jitter;
                        p.age++;
                        if (p.x < -4 || p.x > W + 4 || p.y < -4 || p.y > H + 4 || p.age > p.maxAge) {
                            p.x = Math.random() * W;
                            p.y = Math.random() * H;
                            p.px = p.x;
                            p.py = p.y;
                            p.age = 0;
                            p.maxAge = 100 + Math.random() * 150;
                            continue;
                        }
                        const t = p.age / p.maxAge;
                        const alpha = Math.sin(t * Math.PI) * 0.85;
                        const color = particleColor(avgSpeed, alpha);
                        ctx.strokeStyle = color;
                        ctx.lineWidth = PARTICLE_SIZE;
                        ctx.lineCap = "round";
                        ctx.beginPath();
                        ctx.moveTo(p.px, p.py);
                        ctx.lineTo(p.x, p.y);
                        ctx.stroke();
                    }
                    rafRef.current = requestAnimationFrame(frame);
                }
            }["WindLayer.useEffect.frame"];
            rafRef.current = requestAnimationFrame(frame);
            return ({
                "WindLayer.useEffect": ()=>{
                    cancelAnimationFrame(rafRef.current);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            })["WindLayer.useEffect"];
        }
    }["WindLayer.useEffect"], [
        visible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "pointer-events-none absolute inset-0 rounded-xl",
        style: {
            display: visible ? "block" : "none"
        }
    }, void 0, false, {
        fileName: "[project]/components/wind-layer.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_s(WindLayer, "mhxWTzdW6vqJbHjgG0AOrQVAi98=");
_c = WindLayer;
var _c;
__turbopack_context__.k.register(_c, "WindLayer");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pm25.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$wind$2d$layer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/wind-layer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
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
    // pm25_aqi comes from actual recent measurements; s.aqi is the station-level
    // field that may be stale — prefer the measurement-derived value
    const displayAqi = s.pm25_aqi ?? s.aqi;
    const color = aqiColor(displayAqi);
    const label = displayAqi != null ? displayAqi.toString() : "?";
    const fontSize = label.length >= 3 ? 8 : 9;
    // Arrow and triangle live in one SVG — no CSS absolute positioning so
    // Mapbox's anchor calculation stays correct regardless of zoom level.
    // Arrow points TO where wind goes (meteorological FROM direction + 180°).
    let svg;
    if (s.wind_direction != null) {
        const rotate = (s.wind_direction + 180) % 360;
        svg = `<svg width="38" height="46" viewBox="0 0 38 46" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,.4))">` + `<g transform="translate(19,7) rotate(${rotate})">` + `<polygon points="0,-5 3,1 0,-1 -3,1" fill="white" stroke="rgba(0,0,0,.35)" stroke-width="0.5"/>` + `</g>` + `<polygon points="19,14 36,46 2,46" fill="${color}" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>` + `<text x="19" y="36" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="${fontSize}" fill="white">${label}</text>` + `</svg>`;
    } else {
        svg = `<svg width="38" height="38" viewBox="0 0 38 38" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,.4))">` + `<polygon points="19,2 36,34 2,34" fill="${color}" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>` + `<text x="19" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="${fontSize}" fill="white">${label}</text>` + `</svg>`;
    }
    const el = document.createElement("div");
    el.style.cssText = "cursor:pointer;line-height:0";
    el.innerHTML = svg;
    el.addEventListener("click", onClick);
    return el;
}
// ── Custom layer setup (called on initial load and after style change) ─────────
function addCustomLayers(map, trafficVisible, heatmapVisible, hexData) {
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
            visibility: trafficVisible ? "visible" : "none"
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
    map.addSource("hex-pm25", {
        type: "geojson",
        data: hexData ?? {
            type: "FeatureCollection",
            features: []
        }
    });
    map.addLayer({
        id: "hex-pm25-fill",
        type: "fill",
        source: "hex-pm25",
        layout: {
            visibility: heatmapVisible ? "visible" : "none"
        },
        paint: {
            "fill-opacity": 0.75,
            "fill-color": [
                "case",
                [
                    "==",
                    [
                        "get",
                        "avg_pm25"
                    ],
                    null
                ],
                "rgba(0,0,0,0)",
                [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "get",
                        "avg_pm25"
                    ],
                    0,
                    "#22c55e",
                    15,
                    "#84cc16",
                    35,
                    "#eab308",
                    55,
                    "#f97316",
                    100,
                    "#ef4444",
                    150,
                    "#a855f7"
                ]
            ]
        }
    });
    map.addLayer({
        id: "hex-pm25-line",
        type: "line",
        source: "hex-pm25",
        layout: {
            visibility: heatmapVisible ? "visible" : "none"
        },
        paint: {
            "line-color": "rgba(0,0,0,0.15)",
            "line-width": 0.5
        }
    });
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
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const darkMode = resolvedTheme === "dark";
    const [mapReady, setMapReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trafficVisible, setTrafficVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windVisible, setWindVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [heatmapVisible, setHeatmapVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mapBounds, setMapBounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Refs so style-rebuild callback always reads the latest values
    const trafficVisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const heatmapVisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hexDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Track which style the map was last told to use — prevents redundant setStyle calls
    const appliedStyleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            trafficVisRef.current = trafficVisible;
        }
    }["SensorMapYandex.useEffect"], [
        trafficVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            heatmapVisRef.current = heatmapVisible;
        }
    }["SensorMapYandex.useEffect"], [
        heatmapVisible
    ]);
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
    // Wind points come directly from IQAir stations — 235 real ground sensors
    // give far better spatial coverage than any forecast grid
    const windPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SensorMapYandex.useMemo[windPoints]": ()=>ecoIqSensors.filter({
                "SensorMapYandex.useMemo[windPoints]": (s)=>s.wind_speed != null && s.wind_direction != null && s.wind_speed > 0
            }["SensorMapYandex.useMemo[windPoints]"]).map({
                "SensorMapYandex.useMemo[windPoints]": (s)=>({
                        lat: s.latitude,
                        lng: s.longitude,
                        speed: s.wind_speed,
                        direction: s.wind_direction
                    })
            }["SensorMapYandex.useMemo[windPoints]"])
    }["SensorMapYandex.useMemo[windPoints]"], [
        ecoIqSensors
    ]);
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
            // Always start with the light style — next-themes resolvedTheme is undefined until
            // client hydration, so darkMode is always false at mount. The darkMode effect will
            // switch to dark-v11 immediately after theme resolves if the user prefers dark.
            const initialStyle = "mapbox://styles/mapbox/streets-v12";
            appliedStyleRef.current = initialStyle;
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: containerRef.current,
                style: initialStyle,
                center: DEFAULT_CENTER,
                zoom: 11
            });
            map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl({
                showCompass: false
            }), "bottom-right");
            const updateBounds = {
                "SensorMapYandex.useEffect.updateBounds": ()=>{
                    const b = map.getBounds();
                    if (!b) return;
                    setMapBounds({
                        north: b.getNorth(),
                        south: b.getSouth(),
                        east: b.getEast(),
                        west: b.getWest()
                    });
                }
            }["SensorMapYandex.useEffect.updateBounds"];
            map.on("moveend", updateBounds);
            map.on("zoomend", updateBounds);
            map.on("load", {
                "SensorMapYandex.useEffect": ()=>{
                    updateBounds();
                    addCustomLayers(map, false, false, null);
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
                const displayAqi = s.pm25_aqi ?? s.aqi;
                const color = aqiColor(displayAqi);
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
          ${displayAqi != null ? `
            <div style="margin:0 0 8px;padding:8px 10px;background:${color}18;border-left:3px solid ${color};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">PM<sub>2.5</sub> AQI</p>
              <p style="margin:4px 0 0;font-size:22px;font-weight:800;color:${color}">${displayAqi}</p>
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
    // ── Hide/show all markers when heatmap is toggled ─────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            const display = heatmapVisible ? "none" : "";
            markersRef.current.forEach({
                "SensorMapYandex.useEffect": (m)=>{
                    m.getElement().style.display = display;
                }
            }["SensorMapYandex.useEffect"]);
            ecoIqMarkersRef.current.forEach({
                "SensorMapYandex.useEffect": (m)=>{
                    m.getElement().style.display = display;
                }
            }["SensorMapYandex.useEffect"]);
        }
    }["SensorMapYandex.useEffect"], [
        heatmapVisible
    ]);
    // ── Hexagon PM2.5 — fetch from backend + toggle visibility ───────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (!mapReady || !mapRef.current) return;
            const map = mapRef.current;
            const vis = heatmapVisible ? "visible" : "none";
            try {
                map.setLayoutProperty("hex-pm25-fill", "visibility", vis);
                map.setLayoutProperty("hex-pm25-line", "visibility", vis);
            } catch  {}
            if (!heatmapVisible) return;
            const BASE = ("TURBOPACK compile-time value", "https://admin.smartalmaty.kz/api/v1") ?? "https://admin.smartalmaty.kz/api/v1";
            fetch(`${BASE}/air/hex-pm25/`, {
                headers: {
                    Accept: "application/json"
                }
            }).then({
                "SensorMapYandex.useEffect": (r)=>r.json()
            }["SensorMapYandex.useEffect"]).then({
                "SensorMapYandex.useEffect": (geojson)=>{
                    hexDataRef.current = geojson;
                    try {
                        const src = map.getSource("hex-pm25");
                        src?.setData(geojson);
                    } catch  {}
                }
            }["SensorMapYandex.useEffect"]).catch({
                "SensorMapYandex.useEffect": ()=>{}
            }["SensorMapYandex.useEffect"]);
        }
    }["SensorMapYandex.useEffect"], [
        heatmapVisible,
        mapReady
    ]);
    // ── Dark / light map theme ────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            const map = mapRef.current;
            if (!map || !mapReady) return;
            const style = darkMode ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/streets-v12";
            // Skip if the map already has this style loaded — avoids wiping layers on mount
            if (appliedStyleRef.current === style) return;
            appliedStyleRef.current = style;
            map.setStyle(style);
            map.once("style.load", {
                "SensorMapYandex.useEffect": ()=>{
                    // setStyle wipes all custom sources/layers — rebuild them
                    addCustomLayers(map, trafficVisRef.current, heatmapVisRef.current, hexDataRef.current);
                    loadDistricts(map);
                }
            }["SensorMapYandex.useEffect"]);
        }
    }["SensorMapYandex.useEffect"], [
        darkMode,
        mapReady
    ]);
    // Summary label for wind button — average over grid
    const windSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SensorMapYandex.useMemo[windSummary]": ()=>{
            if (!windPoints.length) return null;
            const avgSpeed = windPoints.reduce({
                "SensorMapYandex.useMemo[windSummary]": (s, p)=>s + p.speed
            }["SensorMapYandex.useMemo[windSummary]"], 0) / windPoints.length;
            const avgDir = windPoints.reduce({
                "SensorMapYandex.useMemo[windSummary]": (s, p)=>s + p.direction
            }["SensorMapYandex.useMemo[windSummary]"], 0) / windPoints.length;
            const label = [
                "С",
                "СВ",
                "В",
                "ЮВ",
                "Ю",
                "ЮЗ",
                "З",
                "СЗ"
            ][Math.round(avgDir / 45) % 8];
            return {
                speed: avgSpeed,
                label
            };
        }
    }["SensorMapYandex.useMemo[windSummary]"], [
        windPoints
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "h-full w-full rounded-xl"
            }, void 0, false, {
                fileName: "[project]/components/sensor-map-yandex.tsx",
                lineNumber: 524,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$wind$2d$layer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                points: windPoints,
                bounds: mapBounds,
                visible: windVisible
            }, void 0, false, {
                fileName: "[project]/components/sensor-map-yandex.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            !valid.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground",
                children: "Нет данных сенсоров"
            }, void 0, false, {
                fileName: "[project]/components/sensor-map-yandex.tsx",
                lineNumber: 529,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-3 top-3 z-[1000] flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTrafficVisible((v)=>!v),
                        title: trafficVisible ? "Скрыть пробки" : "Показать пробки",
                        className: `flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur transition-colors ${trafficVisible ? "border-orange-400 bg-orange-500 text-white" : "border-border bg-background/90 text-foreground hover:bg-muted"}`,
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
                                        lineNumber: 546,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "9",
                                        cy: "17",
                                        r: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sensor-map-yandex.tsx",
                                        lineNumber: 547,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "15",
                                        cy: "17",
                                        r: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sensor-map-yandex.tsx",
                                        lineNumber: 548,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 12h18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sensor-map-yandex.tsx",
                                        lineNumber: 549,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sensor-map-yandex.tsx",
                                lineNumber: 545,
                                columnNumber: 11
                            }, this),
                            "Пробки"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sensor-map-yandex.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setWindVisible((v)=>!v),
                        title: windVisible ? "Скрыть ветер" : "Показать ветер",
                        className: `flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur transition-colors ${windVisible ? "border-sky-400 bg-sky-500 text-white" : "border-border bg-background/90 text-foreground hover:bg-muted"}`,
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
                                        d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sensor-map-yandex.tsx",
                                        lineNumber: 564,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9.6 4.6A2 2 0 1 1 11 8H2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sensor-map-yandex.tsx",
                                        lineNumber: 565,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12.6 19.4A2 2 0 1 0 14 16H2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sensor-map-yandex.tsx",
                                        lineNumber: 566,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sensor-map-yandex.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this),
                            "Ветер",
                            windSummary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "opacity-75",
                                children: [
                                    windSummary.speed.toFixed(1),
                                    "м/с ",
                                    windSummary.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sensor-map-yandex.tsx",
                                lineNumber: 570,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sensor-map-yandex.tsx",
                        lineNumber: 554,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setHeatmapVisible((v)=>!v),
                        title: heatmapVisible ? "Скрыть загрязнение" : "Показать загрязнение PM₂.₅",
                        className: `flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur transition-colors ${heatmapVisible ? "border-rose-400 bg-rose-500 text-white" : "border-border bg-background/90 text-foreground hover:bg-muted"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sensor-map-yandex.tsx",
                                        lineNumber: 586,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sensor-map-yandex.tsx",
                                        lineNumber: 587,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sensor-map-yandex.tsx",
                                lineNumber: 585,
                                columnNumber: 11
                            }, this),
                            "PM₂.₅"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sensor-map-yandex.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sensor-map-yandex.tsx",
                lineNumber: 535,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sensor-map-yandex.tsx",
        lineNumber: 523,
        columnNumber: 5
    }, this);
}
_s(SensorMapYandex, "nEu3VaSNa8907mUHegGr7Mn4hBo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
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

//# sourceMappingURL=components_470cfe5d._.js.map