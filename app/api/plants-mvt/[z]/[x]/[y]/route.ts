import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"

const pool = new Pool({
  host:     process.env.POSTGIS_HOST     ?? "10.100.200.150",
  port:     parseInt(process.env.POSTGIS_PORT ?? "5439"),
  database: process.env.POSTGIS_DB       ?? "sitcenter_postgis_datalake",
  user:     process.env.POSTGIS_USER     ?? "la_noche_estrellada",
  password: process.env.POSTGIS_PASSWORD ?? "",
  max: 10,
  idleTimeoutMillis: 10000,
})

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ z: string; x: string; y: string }> },
) {
  const { z: zStr, x: xStr, y: yStr } = await params
  const z = parseInt(zStr, 10)
  const x = parseInt(xStr, 10)
  const y = parseInt(yStr, 10)

  if ([z, x, y].some(isNaN)) {
    return new NextResponse("invalid tile coordinates", { status: 400 })
  }

  // At low zoom dots are 1px and overlap massively — a 5–25% sample is visually
  // indistinguishable from full data but runs 5–20× faster.
  // At z≥13 tiles are street-sized so we serve full data.
  function sample(z: number): string {
    if (z <= 9)  return "TABLESAMPLE SYSTEM(3)"
    if (z <= 10) return "TABLESAMPLE SYSTEM(10)"
    if (z <= 11) return "TABLESAMPLE SYSTEM(25)"
    if (z <= 12) return "TABLESAMPLE SYSTEM(70)"
    return ""
  }
  const s = sample(z)

  const client = await pool.connect()
  try {
    const { rows } = await client.query<{ mvt: Buffer }>(
      `SELECT ST_AsMVT(tile, 'plants', 4096, 'geom') AS mvt
       FROM (
         SELECT
           ST_AsMVTGeom(
             ST_Transform(centroid, 3857),
             ST_TileEnvelope($1::int, $2::int, $3::int),
             4096, 256, true
           ) AS geom,
           plant_type,
           external_id,
           sanitary_id,
           redbook::int AS redbook,
           pine::int AS pine
         FROM eco_green_plant ${s}
         WHERE centroid && ST_Transform(ST_TileEnvelope($1::int, $2::int, $3::int), 4326)
           AND centroid IS NOT NULL
       ) tile
       WHERE geom IS NOT NULL`,
      [z, x, y],
    )

    const mvt: Buffer | null = rows[0]?.mvt ?? null
    if (!mvt || mvt.length === 0) {
      return new NextResponse(null, { status: 204 })
    }

    return new NextResponse(new Uint8Array(mvt), {
      headers: {
        "Content-Type": "application/x-protobuf",
        "Cache-Control": "public, max-age=86400",
      },
    })
  } finally {
    client.release()
  }
}
