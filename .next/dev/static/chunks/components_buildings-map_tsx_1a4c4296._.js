(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/buildings-map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/_1266a670._.js",
  {
    "path": "static/chunks/node_modules_leaflet_markercluster_dist_35e1f424._.css",
    "included": [
      "[project]/node_modules/leaflet.markercluster/dist/MarkerCluster.css [app-client] (css)",
      "[project]/node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/node_modules_leaflet_markercluster_dist_MarkerCluster_css_bad6b30c._.single.css",
      "static/chunks/node_modules_leaflet_markercluster_dist_MarkerCluster_Default_css_bad6b30c._.single.css"
    ]
  },
  "static/chunks/components_buildings-map_tsx_dfd5dddd._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/buildings-map.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);