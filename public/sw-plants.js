// Service Worker — caches plant MVT tiles persistently in the browser.
// Tiles are stored in CacheStorage for 7 days.
// After the first load, all plant tiles are served from disk (zero latency).

const CACHE = 'plants-tiles-v4'
const TTL   = 7 * 24 * 60 * 60 * 1000

self.addEventListener('install',  () => self.skipWaiting())
self.addEventListener('activate', e  => e.waitUntil(self.clients.claim()))

self.addEventListener('fetch', (event) => {
  if (!event.request.url.includes('/api/plants-mvt/')) return

  event.respondWith((async () => {
    const cache  = await caches.open(CACHE)
    const cached = await cache.match(event.request)

    if (cached) {
      const cachedAt = parseInt(cached.headers.get('x-sw-cached-at') ?? '0', 10)
      if (Date.now() - cachedAt < TTL) return cached
    }

    try {
      const res = await fetch(event.request)
      if (res.status === 200) {
        // Augment headers with a timestamp so we can check TTL on next hit
        const hdrs = new Headers(res.headers)
        hdrs.set('x-sw-cached-at', String(Date.now()))
        const toStore = new Response(await res.clone().arrayBuffer(), {
          status: res.status, statusText: res.statusText, headers: hdrs,
        })
        await cache.put(event.request, toStore)
      }
      return res
    } catch {
      // Offline: return stale cache if available
      return cached ?? new Response(null, { status: 503 })
    }
  })())
})

// On new SW version: delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
})
