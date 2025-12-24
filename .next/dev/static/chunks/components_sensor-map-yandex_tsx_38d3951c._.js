(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_3d31df79._.js",
  "static/chunks/components_sensor-map-yandex_tsx_b53077f4._.js",
  {
    "path": "static/chunks/node_modules_2d9b6395._.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)",
      "[project]/node_modules/leaflet.markercluster/dist/MarkerCluster.css [app-client] (css)",
      "[project]/node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/node_modules_leaflet_dist_leaflet_css_bad6b30c._.single.css",
      "static/chunks/node_modules_leaflet_markercluster_dist_MarkerCluster_css_bad6b30c._.single.css",
      "static/chunks/node_modules_leaflet_markercluster_dist_MarkerCluster_Default_css_bad6b30c._.single.css"
    ]
  },
  "static/chunks/components_sensor-map-yandex_tsx_f3e12f48._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);