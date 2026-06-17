"use client"

import { useEffect, useRef } from "react"

// One wind reading at a geographic point
export interface WindPoint {
  lat: number
  lng: number
  speed: number      // m/s
  direction: number  // degrees, FROM direction (meteorological)
}

interface Props {
  points: WindPoint[]          // grid of wind readings
  bounds: {                    // visible map bounds for geo↔pixel conversion
    north: number
    south: number
    east:  number
    west:  number
  } | null
  visible: boolean
}

// ── Config ────────────────────────────────────────────────────────────────────

const PARTICLE_COUNT = 1200
const SPEED_SCALE    = 0.16   // canvas-px per frame per m/s
const FADE_ALPHA     = 0.03   // lower = longer trails
const PARTICLE_SIZE  = 3

interface Particle {
  x:      number
  y:      number
  px:     number  // previous position for trail line
  py:     number
  age:    number
  maxAge: number
  jitter: number
}

// ── Inverse-distance-weighted interpolation of wind at a lat/lng ──────────────

function interpolateWind(points: WindPoint[], lat: number, lng: number): { vx: number; vy: number } {
  if (!points.length) return { vx: 0, vy: 0 }
  if (points.length === 1) {
    const rad = (points[0].direction * Math.PI) / 180
    return {
      vx: -Math.sin(rad) * points[0].speed * SPEED_SCALE,
      vy:  Math.cos(rad) * points[0].speed * SPEED_SCALE,
    }
  }

  let totalW = 0, wx = 0, wy = 0
  for (const p of points) {
    const d2 = (p.lat - lat) ** 2 + (p.lng - lng) ** 2
    const w  = d2 < 1e-8 ? 1e8 : 1 / d2
    const rad = (p.direction * Math.PI) / 180
    // Wind direction = FROM, so particle moves in the OPPOSITE direction on canvas
    // (wind from N → particle goes south = +y in canvas coords)
    wx += -Math.sin(rad) * p.speed * w
    wy +=  Math.cos(rad) * p.speed * w
    totalW += w
  }
  return { vx: (wx / totalW) * SPEED_SCALE, vy: (wy / totalW) * SPEED_SCALE }
}

// ── Convert canvas pixel to approximate lat/lng ────────────────────────────────

function pixelToGeo(
  px: number, py: number,
  cw: number, ch: number,
  bounds: Props["bounds"],
): { lat: number; lng: number } {
  if (!bounds) return { lat: 43.24, lng: 76.89 }
  const lng = bounds.west  + (px / cw) * (bounds.east  - bounds.west)
  const lat = bounds.north - (py / ch) * (bounds.north - bounds.south)
  return { lat, lng }
}

// ── Particle color by average wind speed ──────────────────────────────────────

function particleColor(_speed: number, alpha: number): string {
  return `rgba(14,165,233,${Math.min(alpha * 1.8, 1)})`  // sky-500
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function WindLayer({ points, bounds, visible }: Props) {
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef       = useRef<number>(0)

  // Refs so the animation loop can read the latest values without restarting
  const pointsRef = useRef<WindPoint[]>(points)
  const boundsRef = useRef<Props["bounds"]>(bounds)

  // Sync refs on every render — never triggers animation restart
  useEffect(() => { pointsRef.current = points }, [points])
  useEffect(() => { boundsRef.current = bounds  }, [bounds])

  // Match canvas dimensions to parent element
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas?.parentElement) return
    const setSize = () => {
      const { clientWidth: w, clientHeight: h } = canvas.parentElement!
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width  = w
        canvas.height = h
      }
    }
    const ro = new ResizeObserver(setSize)
    ro.observe(canvas.parentElement)
    setSize()
    return () => ro.disconnect()
  }, [])

  // Animation loop — only restarts when visibility changes or on first mount
  useEffect(() => {
    cancelAnimationFrame(rafRef.current)

    const canvas = canvasRef.current
    if (!canvas || !visible) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Init particles spread across the whole canvas
    const cw = canvas.width  || canvas.parentElement?.clientWidth  || 900
    const ch = canvas.height || canvas.parentElement?.clientHeight || 600

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const x = Math.random() * cw
      const y = Math.random() * ch
      return { x, y, px: x, py: y, age: Math.floor(Math.random() * 150), maxAge: 100 + Math.random() * 150, jitter: 0.7 + Math.random() * 0.6 }
    })

    const frame = () => {
      const W   = canvas.width
      const H   = canvas.height
      const pts = pointsRef.current
      const bnd = boundsRef.current

      // Average speed for colour (computed from current points ref)
      const avgSpeed = pts.length
        ? pts.reduce((s, p) => s + p.speed, 0) / pts.length
        : 3

      // Fade trails toward transparent
      ctx.globalCompositeOperation = "destination-out"
      ctx.fillStyle = `rgba(0,0,0,${FADE_ALPHA})`
      ctx.fillRect(0, 0, W, H)
      ctx.globalCompositeOperation = "source-over"

      for (const p of particlesRef.current) {
        const geo  = pixelToGeo(p.x, p.y, W, H, bnd)
        const wind = pts.length ? interpolateWind(pts, geo.lat, geo.lng) : { vx: 0, vy: 0 }

        p.px = p.x
        p.py = p.y
        p.x  += wind.vx * p.jitter
        p.y  += wind.vy * p.jitter
        p.age++

        if (p.x < -4 || p.x > W + 4 || p.y < -4 || p.y > H + 4 || p.age > p.maxAge) {
          p.x      = Math.random() * W
          p.y      = Math.random() * H
          p.px     = p.x
          p.py     = p.y
          p.age    = 0
          p.maxAge = 100 + Math.random() * 150
          continue
        }

        const t     = p.age / p.maxAge
        const alpha = Math.sin(t * Math.PI) * 0.85
        const color = particleColor(avgSpeed, alpha)
        ctx.strokeStyle = color
        ctx.lineWidth   = PARTICLE_SIZE
        ctx.lineCap     = "round"
        ctx.beginPath()
        ctx.moveTo(p.px, p.py)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()
      }

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(rafRef.current)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [visible])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 rounded-xl"
      style={{ display: visible ? "block" : "none" }}
    />
  )
}
