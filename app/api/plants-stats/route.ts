import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"

const pool = new Pool({
  host:     process.env.POSTGIS_HOST     ?? "10.100.200.150",
  port:     parseInt(process.env.POSTGIS_PORT ?? "5439"),
  database: process.env.POSTGIS_DB       ?? "sitcenter_postgis_datalake",
  user:     process.env.POSTGIS_USER     ?? "la_noche_estrellada",
  password: process.env.POSTGIS_PASSWORD ?? "",
  max: 3,
  idleTimeoutMillis: 10000,
})

type StatsPayload = {
  total: number; redbook: number; pine: number
  byType:     { type: number; count: number }[]
  bySanitary: { id: number;   count: number }[]
  cachedAt: number
}

// server-side in-memory cache — survives tab navigation, reset only on server restart
let cache: StatsPayload | null = null
const TTL = 60 * 60 * 1000 // 1 hour

async function fetchFromDb(): Promise<StatsPayload> {
  const client = await pool.connect()
  try {
    const [typesRes, sanRes, totRes] = await Promise.all([
      client.query<{ plant_type: number; cnt: string }>(
        `SELECT plant_type, COUNT(*) AS cnt
         FROM eco_green_plant WHERE plant_type IS NOT NULL
         GROUP BY plant_type ORDER BY plant_type`
      ),
      client.query<{ sanitary_id: number; cnt: string }>(
        `SELECT sanitary_id, COUNT(*) AS cnt
         FROM eco_green_plant WHERE sanitary_id IS NOT NULL
         GROUP BY sanitary_id ORDER BY sanitary_id`
      ),
      client.query<{ total: string; redbook: string; pine: string }>(
        `SELECT COUNT(*)::text AS total,
                SUM(redbook::int)::text AS redbook,
                SUM(pine::int)::text    AS pine
         FROM eco_green_plant`
      ),
    ])
    const tot = totRes.rows[0]
    return {
      total:      parseInt(tot.total,   10),
      redbook:    parseInt(tot.redbook, 10),
      pine:       parseInt(tot.pine,    10),
      byType:     typesRes.rows.map(r => ({ type: r.plant_type,  count: parseInt(r.cnt, 10) })),
      bySanitary: sanRes.rows.map(r  => ({ id:   r.sanitary_id, count: parseInt(r.cnt, 10) })),
      cachedAt:   Date.now(),
    }
  } finally {
    client.release()
  }
}

export async function GET(req: NextRequest) {
  const refresh = req.nextUrl.searchParams.get("refresh") === "1"

  if (!refresh && cache && Date.now() - cache.cachedAt < TTL) {
    return NextResponse.json(cache, {
      headers: { "X-Cache": "HIT", "Cache-Control": "no-store" },
    })
  }

  const data = await fetchFromDb()
  cache = data
  return NextResponse.json(data, {
    headers: { "X-Cache": "MISS", "Cache-Control": "no-store" },
  })
}
