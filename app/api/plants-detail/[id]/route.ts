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

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const extId = parseInt(id, 10)
  if (isNaN(extId)) return new NextResponse("invalid id", { status: 400 })

  const client = await pool.connect()
  try {
    const { rows } = await client.query(
      `SELECT external_id, plant_type, sanitary_id, redbook::int AS redbook, pine::int AS pine
       FROM eco_green_plant
       WHERE external_id = $1
       LIMIT 1`,
      [extId],
    )
    if (!rows[0]) return new NextResponse(null, { status: 404 })
    return NextResponse.json(rows[0], {
      headers: { "Cache-Control": "no-store" },
    })
  } finally {
    client.release()
  }
}
