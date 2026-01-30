// Web Worker for processing buildings data off the main thread
// This keeps the UI responsive while transforming ~50,000 records

const DISTRICT_LABELS = {
  "1": "Алатауский район",
  "2": "Алмалинский район",
  "3": "Ауэзовский район",
  "4": "Бостандыкский район",
  "5": "Жетысуский район",
  "6": "Медеуский район",
  "7": "Наурызбайский район",
  "8": "Турксибский район",
}

// Optimized transformation function
function transformBuildingsData(apiBuildings) {
  const result = []
  const len = apiBuildings.length

  for (let i = 0; i < len; i++) {
    const b = apiBuildings[i]

    // Fast category detection
    const catStr = (b.category || "").toLowerCase()
    let category = "general"
    if (catStr.indexOf("ижс") !== -1 || catStr.indexOf("izhs") !== -1) {
      category = "izhs"
    } else if (catStr.indexOf("сусн") !== -1 || catStr.indexOf("susn") !== -1) {
      category = "susn"
    }

    // District label lookup
    let districtLabel
    if (b.district && typeof b.district === "string") {
      districtLabel = b.district
    } else if (b.district_id && DISTRICT_LABELS[String(b.district_id)]) {
      districtLabel = DISTRICT_LABELS[String(b.district_id)]
    } else if (b.district_id) {
      districtLabel = "Район " + b.district_id
    } else {
      districtLabel = "Не указан"
    }

    result.push({
      id: b.id ? String(b.id) : crypto.randomUUID(),
      address: b.address || "Без адреса",
      district: districtLabel,
      district_id: b.district_id,
      latitude: b.lat ?? b.latitude ?? null,
      longitude: b.lon ?? b.longitude ?? null,
      has_gas: b.gas_connected ?? b.has_gas ?? null,
      building_type: category === "izhs"
        ? "Индивидуальное жилищное строительство"
        : category === "susn"
          ? "Социально уязвимые слои населения"
          : "Жилое здание",
      building_type_raw: b.building_type || null,
      building_category: category,
      is_not_in_almaty: b.is_not_in_almaty || false,
      is_seasonal_or_unused: b.is_seasonal_or_unused || false,
      geometry: b.geometry || null,
    })

    // Send progress updates every 5000 items
    if (i > 0 && i % 5000 === 0) {
      self.postMessage({
        type: 'progress',
        processed: i,
        total: len
      })
    }
  }

  return result
}

// Handle messages from main thread
self.onmessage = function(e) {
  const { type, data } = e.data

  if (type === 'transform') {
    try {
      const startTime = performance.now()
      const result = transformBuildingsData(data)
      const endTime = performance.now()

      self.postMessage({
        type: 'complete',
        data: result,
        stats: {
          total: result.length,
          processingTime: Math.round(endTime - startTime)
        }
      })
    } catch (error) {
      self.postMessage({
        type: 'error',
        message: error.message
      })
    }
  }
}
