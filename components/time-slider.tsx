"use client"

import { useCallback, useEffect, useRef, useState } from "react"

interface TimeSliderProps {
  days: string[]
  selectedIdx: number | null
  onSelect: (idx: number | null) => void
  loading?: boolean
}

function formatDay(iso: string): string {
  const d = new Date(iso + "T00:00:00")
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "short" })
}

export function TimeSlider({ days, selectedIdx, onSelect, loading = false }: TimeSliderProps) {
  const isLive = selectedIdx === null
  const sliderMax = days.length
  const sliderVal = isLive ? sliderMax : selectedIdx

  const [playing, setPlaying] = useState(false)
  const playRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopPlay = useCallback(() => {
    setPlaying(false)
    if (playRef.current) { clearInterval(playRef.current); playRef.current = null }
  }, [])

  const startPlay = useCallback(() => {
    const startIdx = selectedIdx === null ? 0 : selectedIdx + 1 >= days.length ? 0 : selectedIdx + 1
    let idx = startIdx
    onSelect(idx)
    setPlaying(true)
    playRef.current = setInterval(() => {
      idx++
      if (idx >= days.length) {
        onSelect(null)
        stopPlay()
      } else {
        onSelect(idx)
      }
    }, 400)
  }, [days.length, selectedIdx, onSelect, stopPlay])

  useEffect(() => () => { if (playRef.current) clearInterval(playRef.current) }, [])

  if (days.length === 0) return null

  if (loading) {
    return (
      <div className="absolute bottom-6 left-1/2 z-[1000] -translate-x-1/2 w-[min(540px,90vw)] rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-7 w-7 shrink-0 rounded-full bg-muted animate-pulse" />
          <span className="text-xs text-muted-foreground">Загрузка исторических данных…</span>
        </div>
        <div className="h-1 w-full rounded-full bg-muted animate-pulse" />
        <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
          <span>{formatDay(days[0])}</span>
          <span className="text-green-600 font-medium">Сейчас</span>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute bottom-6 left-1/2 z-[1000] -translate-x-1/2 w-[min(540px,90vw)] rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur">
      {/* Header row */}
      <div className="mb-2 flex items-center gap-2">
        {/* Play / Pause */}
        <button
          onClick={playing ? stopPlay : startPlay}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-80"
          title={playing ? "Пауза" : "Воспроизвести"}
        >
          {playing ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <rect x="1" y="0" width="3" height="10" rx="1"/>
              <rect x="6" y="0" width="3" height="10" rx="1"/>
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <polygon points="1,0 10,5 1,10"/>
            </svg>
          )}
        </button>

        {/* Selected date label */}
        <span className="text-xs font-semibold text-foreground">
          {isLive
            ? <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-green-500" />Сейчас</span>
            : formatDay(days[sliderVal as number])
          }
        </span>

        {/* Jump to live */}
        {!isLive && (
          <button
            onClick={() => { stopPlay(); onSelect(null) }}
            className="ml-auto text-[11px] text-primary hover:underline"
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
        style={{ height: "4px" }}
      />

      {/* Axis labels */}
      <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
        <span>{formatDay(days[0])}</span>
        <span>{formatDay(days[Math.floor(days.length / 2)])}</span>
        <span className="text-green-600 font-medium">Сейчас</span>
      </div>
    </div>
  )
}
