"use client"

import { useCallback, useEffect, useRef, useState } from "react"

interface TimeSliderProps {
  slots: string[]        // ISO date strings (YYYY-MM-DD) or ISO datetime strings
  selectedIdx: number | null
  onSelect: (idx: number | null) => void
  loading?: boolean
}

function formatSlot(iso: string): string {
  // Datetime slot (contains "T") → "17 июн 14:00"
  if (iso.includes("T")) {
    const d = new Date(iso)
    return d.toLocaleString("ru-RU", {
      day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
    })
  }
  // Date slot → "17 июн"
  const d = new Date(iso + "T00:00:00")
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "short" })
}

export function TimeSlider({ slots, selectedIdx, onSelect, loading = false }: TimeSliderProps) {
  const isLive = selectedIdx === null
  const sliderMax = slots.length
  const sliderVal = isLive ? sliderMax : selectedIdx

  const [playing, setPlaying] = useState(false)
  const playRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopPlay = useCallback(() => {
    setPlaying(false)
    if (playRef.current) { clearInterval(playRef.current); playRef.current = null }
  }, [])

  const startPlay = useCallback(() => {
    const startIdx = selectedIdx === null ? 0 : selectedIdx + 1 >= slots.length ? 0 : selectedIdx + 1
    let idx = startIdx
    onSelect(idx)
    setPlaying(true)
    playRef.current = setInterval(() => {
      idx++
      if (idx >= slots.length) {
        onSelect(null)
        stopPlay()
      } else {
        onSelect(idx)
      }
    }, 400)
  }, [slots.length, selectedIdx, onSelect, stopPlay])

  useEffect(() => () => { if (playRef.current) clearInterval(playRef.current) }, [])

  if (slots.length === 0) return null

  if (loading) {
    return (
      <div className="absolute bottom-3 left-1/2 z-[1000] -translate-x-1/2 w-[min(260px,75vw)] rounded-lg border border-border bg-background/95 px-2.5 py-1.5 shadow-md backdrop-blur">
        <div className="mb-1 flex items-center gap-1.5">
          <div className="h-4 w-4 shrink-0 rounded-full bg-muted animate-pulse" />
          <span className="text-[10px] text-muted-foreground">Загрузка…</span>
        </div>
        <div className="h-0.5 w-full rounded-full bg-muted animate-pulse" />
      </div>
    )
  }

  return (
    <div className="absolute bottom-3 left-1/2 z-[1000] -translate-x-1/2 w-[min(260px,75vw)] rounded-lg border border-border bg-background/95 px-2.5 py-1.5 shadow-md backdrop-blur">
      {/* Header row */}
      <div className="mb-1 flex items-center gap-1.5">
        {/* Play / Pause */}
        <button
          onClick={playing ? stopPlay : startPlay}
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-80"
          title={playing ? "Пауза" : "Воспроизвести"}
        >
          {playing ? (
            <svg width="6" height="6" viewBox="0 0 10 10" fill="currentColor">
              <rect x="1" y="0" width="3" height="10" rx="1"/>
              <rect x="6" y="0" width="3" height="10" rx="1"/>
            </svg>
          ) : (
            <svg width="6" height="6" viewBox="0 0 10 10" fill="currentColor">
              <polygon points="1,0 10,5 1,10"/>
            </svg>
          )}
        </button>

        {/* Selected date label */}
        <span className="text-[10px] font-semibold text-foreground">
          {isLive
            ? <span className="flex items-center gap-1"><span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />Сейчас</span>
            : formatSlot(slots[sliderVal as number])
          }
        </span>

        {/* Jump to live */}
        {!isLive && (
          <button
            onClick={() => { stopPlay(); onSelect(null) }}
            className="ml-auto text-[9px] text-primary hover:underline"
          >
            Сейчас →
          </button>
        )}
      </div>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={sliderMax}
        value={sliderVal}
        onChange={(e) => {
          stopPlay()
          const v = Number(e.target.value)
          onSelect(v >= sliderMax ? null : v)
        }}
        className="w-full cursor-pointer accent-primary"
        style={{ height: "2px" }}
      />

      {/* Axis labels */}
      <div className="mt-0.5 flex justify-between text-[8px] text-muted-foreground">
        <span>{formatSlot(slots[0])}</span>
        <span className="text-green-600 font-medium">Сейчас</span>
      </div>
    </div>
  )
}
