import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"

const pool = new Pool({
  host:     process.env.POSTGIS_HOST     ?? "10.100.200.150",
  port:     parseInt(process.env.POSTGIS_PORT ?? "5439"),
  database: process.env.POSTGIS_DB       ?? "sitcenter_postgis_datalake",
  user:     process.env.POSTGIS_USER     ?? "la_noche_estrellada",
  password: process.env.POSTGIS_PASSWORD ?? "",
  max: 5,
  idleTimeoutMillis: 10000,
})

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const bbox = searchParams.get("bbox")
  if (!bbox) return NextResponse.json({ error: "bbox required" }, { status: 400 })

  const parts = bbox.split(",").map(Number)
  if (parts.length !== 4 || parts.some(isNaN))
    return NextResponse.json({ error: "invalid bbox" }, { status: 400 })

  const [lonMin, latMin, lonMax, latMax] = parts

  const limitParam = searchParams.get("limit")
  const limit = limitParam ? Math.min(Math.max(parseInt(limitParam, 10), 1), 100000) : null

  const client = await pool.connect()
  try {
    const { rows } = await client.query<{
      external_id: string; plant_type: number;
      lon: string; lat: string;
      sanitary_id: number | null; redbook: boolean; pine: boolean
    }>(
      `SELECT
         external_id,
         plant_type,
         ST_X(centroid) AS lon,
         ST_Y(centroid) AS lat,
         sanitary_id,
         redbook,
         pine
       FROM eco_green_plant
       WHERE centroid && ST_MakeEnvelope($1, $2, $3, $4, 4326)
         AND centroid IS NOT NULL
       ${limit !== null ? `LIMIT ${limit}` : ""}`,
      [lonMin, latMin, lonMax, latMax],
    )

    const features = rows.map(r => ({
      type: "Feature" as const,
      geometry: { type: "Point" as const, coordinates: [parseFloat(r.lon), parseFloat(r.lat)] },
      properties: {
        external_id: r.external_id,
        plant_type:  r.plant_type,
        sanitary_id: r.sanitary_id,
        redbook:     r.redbook,
        pine:        r.pine,
      },
    }))

    return NextResponse.json(features, {
      headers: { "Cache-Control": "public, max-age=3600" },
    })
  } finally {
    client.release()
  }
}
