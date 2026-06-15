"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown, Search, X } from "lucide-react"

interface Option {
  value: string
  label: string
}

interface FilterDropdownProps {
  value: string
  onChange: (value: string) => void
  options: Option[]
  allLabel?: string
  placeholder?: string
  searchPlaceholder?: string
}

export function FilterDropdown({
  value,
  onChange,
  options,
  allLabel = "Все",
  placeholder = "Выбрать…",
  searchPlaceholder = "Поиск…",
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const selectedLabel =
    value === "all" ? allLabel : (options.find((o) => o.value === value)?.label ?? placeholder)

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase()),
  )

  useEffect(() => {
    if (!open) { setSearch(""); return }
    setTimeout(() => searchRef.current?.focus(), 60)
  }, [open])

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener("mousedown", onOutside)
    return () => document.removeEventListener("mousedown", onOutside)
  }, [open])

  const isAll = value === "all"

  const borderCls = open
    ? "border-primary/60 shadow-sm shadow-primary/10"
    : isAll
      ? "border-border"
      : "border-primary/50 shadow-sm"

  const bgCls = open
    ? "bg-primary/5"
    : isAll
      ? "bg-background hover:bg-muted/40"
      : "bg-primary/8"

  const textCls = open || !isAll ? "text-foreground" : "text-muted-foreground hover:text-foreground"

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger — split into two sibling elements to avoid nested <button> */}
      <div className={`flex h-8 items-center rounded-lg border transition-all duration-150 ${borderCls} ${bgCls}`}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-full items-center gap-1.5 pl-3 ${isAll ? "pr-3" : "pr-1"} text-sm font-medium outline-none ${textCls}`}
        >
          <span className="max-w-[120px] truncate">{selectedLabel}</span>
          <ChevronDown
            className={`h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 ${open ? "-rotate-180" : ""} ${isAll ? "opacity-50" : "opacity-70"}`}
          />
        </button>
        {!isAll && (
          <button
            type="button"
            onClick={() => { onChange("all"); setOpen(false) }}
            className="flex h-full items-center pr-2 opacity-60 transition-opacity hover:opacity-100"
            aria-label="Сбросить фильтр"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* Dropdown panel */}
      {open && (
        <div
          className={`
            absolute left-0 top-[calc(100%+6px)] z-[2000] min-w-[200px]
            overflow-hidden rounded-xl border border-border
            bg-popover shadow-lg shadow-black/10
            animate-in fade-in-0 zoom-in-95 duration-100
          `}
        >
          {/* Search */}
          <div className="flex items-center gap-2 border-b border-border px-3 py-2">
            <Search className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
            <input
              ref={searchRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            {search && (
              <button type="button" onClick={() => setSearch("")} className="text-muted-foreground hover:text-foreground">
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Options */}
          <div className="max-h-[240px] overflow-y-auto py-1">
            {/* All option */}
            {!search && (
              <button
                type="button"
                onClick={() => { onChange("all"); setOpen(false) }}
                className={`
                  flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors
                  ${isAll
                    ? "bg-primary/8 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }
                `}
              >
                <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
                  {isAll && <Check className="h-3.5 w-3.5" />}
                </span>
                {allLabel}
              </button>
            )}

            {filtered.length === 0 && (
              <p className="px-3 py-3 text-center text-xs text-muted-foreground">Ничего не найдено</p>
            )}

            {filtered.map((opt) => {
              const selected = value === opt.value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => { onChange(opt.value); setOpen(false) }}
                  className={`
                    flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors
                    ${selected
                      ? "bg-primary/8 text-primary font-medium"
                      : "text-foreground hover:bg-muted/60"
                    }
                  `}
                >
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
                    {selected && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span className="truncate">{opt.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
