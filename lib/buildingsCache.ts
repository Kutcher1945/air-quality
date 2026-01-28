// IndexedDB cache for buildings data
const DB_NAME = "BuildingsCache"
const STORE_NAME = "buildings"
const DB_VERSION = 1
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

interface CachedData {
  timestamp: number
  data: any[]
}

// Open or create IndexedDB
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB is not available"))
      return
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME)
      }
    }
  })
}

// Save data to cache
export async function saveBuildingsToCache(data: any[]): Promise<void> {
  try {
    if (typeof indexedDB === "undefined") return
    const db = await openDB()
    const transaction = db.transaction([STORE_NAME], "readwrite")
    const store = transaction.objectStore(STORE_NAME)

    const cachedData: CachedData = {
      timestamp: Date.now(),
      data: data,
    }

    store.put(cachedData, "buildingsData")

    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => {
        db.close()
        resolve()
      }
      transaction.onerror = () => reject(transaction.error)
    })
  } catch (error) {
    console.error("Failed to save to cache:", error)
  }
}

// Get data from cache
export async function getBuildingsFromCache(): Promise<any[] | null> {
  try {
    if (typeof indexedDB === "undefined") return null
    const db = await openDB()
    const transaction = db.transaction([STORE_NAME], "readonly")
    const store = transaction.objectStore(STORE_NAME)
    const request = store.get("buildingsData")

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        db.close()
        const cachedData: CachedData | undefined = request.result

        if (!cachedData) {
          resolve(null)
          return
        }

        // Check if cache is still valid (within 24 hours)
        const age = Date.now() - cachedData.timestamp
        if (age > CACHE_DURATION) {
          console.log("Cache expired, will fetch fresh data")
          resolve(null)
          return
        }

        console.log(`Cache hit! Data is ${Math.round(age / 1000 / 60)} minutes old`)
        resolve(cachedData.data)
      }

      request.onerror = () => {
        db.close()
        reject(request.error)
      }
    })
  } catch (error) {
    console.error("Failed to read from cache:", error)
    return null
  }
}

// Clear cache (useful for debugging or manual refresh)
export async function clearBuildingsCache(): Promise<void> {
  try {
    if (typeof indexedDB === "undefined") return
    const db = await openDB()
    const transaction = db.transaction([STORE_NAME], "readwrite")
    const store = transaction.objectStore(STORE_NAME)
    store.delete("buildingsData")

    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => {
        db.close()
        console.log("Cache cleared")
        resolve()
      }
      transaction.onerror = () => reject(transaction.error)
    })
  } catch (error) {
    console.error("Failed to clear cache:", error)
  }
}
