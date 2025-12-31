// public/tile-sw.js
const CACHE_NAME = 'pbf-tiles-v1';

self.addEventListener('fetch', (event) => {
  // Only intercept requests to your PBF tile server
  if (event.request.url.includes('address/gas-heatmap/tiles')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          // Return cached version OR fetch and then cache
          return response || fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});