const DB_NAME = "PlantsCache_v3"
const STORE_NAME = "tiles"
const DB_VERSION = 1
const CACHE_DURATION = 24 * 60 * 60 * 1000

interface CachedTile {
  timestamp: number
  features: GeoJSON.Feature[]
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB not available"))
      return
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onerror = () => reject(req.error)
    req.onsuccess = () => resolve(req.result)
    req.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME)
      }
    }
  })
}

export async function getPlantTile(key: string): Promise<GeoJSON.Feature[] | null> {
  try {
    if (typeof indexedDB === "undefined") return null
    const db = await openDB()
    const tx = db.transaction([STORE_NAME], "readonly")
    const store = tx.objectStore(STORE_NAME)
    const req = store.get(key)
    return new Promise((resolve, reject) => {
      req.onsuccess = () => {
        db.close()
        const cached: CachedTile | undefined = req.result
        if (!cached) { resolve(null); return }
        if (Date.now() - cached.timestamp > CACHE_DURATION) { resolve(null); return }
        resolve(cached.features)
      }
      req.onerror = () => { db.close(); reject(req.error) }
    })
  } catch {
    return null
  }
}

export async function savePlantTile(key: string, features: GeoJSON.Feature[]): Promise<void> {
  try {
    if (typeof indexedDB === "undefined") return
    const db = await openDB()
    const tx = db.transaction([STORE_NAME], "readwrite")
    const store = tx.objectStore(STORE_NAME)
    store.put({ timestamp: Date.now(), features } satisfies CachedTile, key)
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => { db.close(); resolve() }
      tx.onerror = () => reject(tx.error)
    })
  } catch {
    // cache write failure is non-fatal
  }
}

export async function clearPlantsCache(): Promise<void> {
  try {
    if (typeof indexedDB === "undefined") return
    const db = await openDB()
    const tx = db.transaction([STORE_NAME], "readwrite")
    tx.objectStore(STORE_NAME).clear()
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => { db.close(); resolve() }
      tx.onerror = () => reject(tx.error)
    })
  } catch {
    // ignore
  }
}
