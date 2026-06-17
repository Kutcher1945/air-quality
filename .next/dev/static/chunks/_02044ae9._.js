(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/lottie-react/build/index.umd.js [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_7f24c5d4._.js",
  "static/chunks/node_modules_lottie-react_build_index_umd_783c9eb8.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/lottie-react/build/index.umd.js [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
"[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_mapbox-gl_dist_mapbox-gl_b0bb8555.js",
  "static/chunks/components_sensor-map-yandex_tsx_b53077f4._.js",
  {
    "path": "static/chunks/node_modules_mapbox-gl_dist_mapbox-gl_9438b0bd.css",
    "included": [
      "[project]/node_modules/mapbox-gl/dist/mapbox-gl.css [app-client] (css)"
    ]
  },
  "static/chunks/components_sensor-map-yandex_tsx_783c9eb8._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);