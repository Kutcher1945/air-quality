"use client"

import { useMemo } from "react"
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet"
import { CRS } from "leaflet"
import type { LatLngExpression } from "leaflet"
import "leaflet/dist/leaflet.css"

export interface SensorMetric {
  pm25?: number | null
  no2?: number | null
  datetime?: string | null
  interval?: string | null
}

export interface Sensor {
  id: number | string
  sensor_id: string
  name?: string | null
  district?: string | null
  latitude?: number | null
  longitude?: number | null
  is_active?: boolean
  latest_measurement?: SensorMetric | null
}

interface SensorMapProps {
  sensors: Sensor[]
}

const DEFAULT_CENTER: LatLngExpression = [43.238949, 76.889709] // Almaty

const YANDEX_TILE_URL =
  "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU"

const getMarkerColor = (pm25?: number | null) => {
  if (pm25 === null || pm25 === undefined) return "#6b7280"
  if (pm25 <= 15) return "#1BA97C"
  if (pm25 <= 35) return "#f59e0b"
  if (pm25 <= 55) return "#f97316"
  if (pm25 <= 150) return "#ef4444"
  if (pm25 <= 250) return "#a855f7"
  return "#581c87"
}

export default function SensorMapYandex({ sensors }: SensorMapProps) {
  const markers = useMemo(
    () => sensors.filter((sensor) => sensor.latitude !== null && sensor.latitude !== undefined && sensor.longitude !== null && sensor.longitude !== undefined),
    [sensors],
  )

  if (!markers.length) {
    return (
      <div className="flex h-[480px] items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground">
        Нет данных по сенсорам для отображения
      </div>
    )
  }

  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={11}
      scrollWheelZoom
      crs={CRS.EPSG3395}
      className="h-[480px] w-full rounded-xl border border-border"
    >
      <TileLayer attribution="&copy; Yandex" url={YANDEX_TILE_URL} maxZoom={18} minZoom={0} />
      {markers.map((sensor) => {
        const metric = sensor.latest_measurement
        const color = getMarkerColor(metric?.pm25)
        const coords: LatLngExpression = [Number(sensor.latitude), Number(sensor.longitude)]

        return (
          <CircleMarker
            key={sensor.sensor_id}
            center={coords}
            radius={10}
            pathOptions={{
              color,
              fillColor: color,
              fillOpacity: 0.85,
              weight: 2,
            }}
          >
            <Popup>
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-foreground">{sensor.name || "Станция"}</p>
                {sensor.district && <p className="text-muted-foreground">Район: {sensor.district}</p>}
                {metric ? (
                  <>
                    {metric.pm25 !== null && metric.pm25 !== undefined && (
                      <p>
                        PM2.5: <span className="font-semibold">{metric.pm25}</span>
                      </p>
                    )}
                    {metric.no2 !== null && metric.no2 !== undefined && (
                      <p>
                        NO2: <span className="font-semibold">{metric.no2}</span>
                      </p>
                    )}
                    {metric.datetime && <p className="text-xs text-muted-foreground">Обновлено: {new Date(metric.datetime).toLocaleString()}</p>}
                  </>
                ) : (
                  <p className="text-muted-foreground">Нет свежих измерений</p>
                )}
              </div>
            </Popup>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}
