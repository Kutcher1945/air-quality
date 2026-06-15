/**
 * PM2.5 concentration categories and US EPA AQI (2024) calculation.
 *
 * Note: "levels" here are PM2.5 concentration categories (WHO/health-based),
 * NOT the US EPA AQI index (0–500). See pm25ToEpaAqi() for the actual index.
 *
 * Thresholds aligned with WHO 2021 guidelines:
 *   ≤5   → very-good  (meets WHO annual PM2.5 guideline of 5 µg/m³)
 *   ≤15  → good       (meets WHO 24h PM2.5 guideline of 15 µg/m³)
 *   ≤35  → moderate   (EPA 2024 "Moderate" upper bound at 35.4 µg/m³)
 *   ≤55  → unhealthy  (unhealthy for sensitive groups)
 *   ≤150 → very-unhealthy
 *   >150 → hazardous
 */

// ── Types ──────────────────────────────────────────────────────────────────────

export type AirMetricMode = "epa-aqi" | "pm25"

export type AirQualityLevel =
  | "very-good"
  | "good"
  | "moderate"
  | "unhealthy"
  | "very-unhealthy"
  | "hazardous"

export type AirQualityConfig = {
  level: AirQualityLevel
  label: string
  heroLabel: string
  heroBg: string
  barBg: string
  accent: string
  accentLight: string
}

// ── Shared PM2.5 → colour ──────────────────────────────────────────────────────

/**
 * Returns a hex colour for a PM2.5 concentration.
 * Used by map markers AND the sidebar so they always match.
 *
 *   blue   → very-good  (≤5,   WHO annual guideline)
 *   green  → good       (≤15,  WHO 24h guideline)
 *   yellow → moderate   (≤35,  EPA moderate range)
 *   red    → unhealthy  (≤55,  sensitive groups)
 *   purple → very-unhealthy (≤150)
 *   dark   → hazardous  (>150)
 */
export function pm25Color(pm25: number | null | undefined): string {
  if (pm25 == null) return "#9ca3af"
  if (pm25 <= 5)    return "#3b82f6"
  if (pm25 <= 15)   return "#22c55e"
  if (pm25 <= 35)   return "#eab308"
  if (pm25 <= 55)   return "#ef4444"
  if (pm25 <= 150)  return "#a855f7"
  return "#7f1d1d"
}

export function pm25Label(pm25: number | null | undefined): string {
  if (pm25 == null) return "Нет данных"
  if (pm25 <= 5)    return "Отлично"
  if (pm25 <= 15)   return "Хорошо"
  if (pm25 <= 35)   return "Умеренно"
  if (pm25 <= 55)   return "Чувствительным"
  if (pm25 <= 150)  return "Вредно"
  return "Очень вредно"
}

// ── PM2.5 concentration category config ───────────────────────────────────────

export function getPm25Config(pm25: number): AirQualityConfig {
  if (pm25 <= 5)
    return { level: "very-good",     label: "Отлично",                         heroLabel: "Отлично",         heroBg: "#dbeafe", barBg: "#3b82f6", accent: "#3b82f6", accentLight: "#dbeafe" }
  if (pm25 <= 15)
    return { level: "good",           label: "Хорошо",                          heroLabel: "Хорошо",          heroBg: "#dcfce7", barBg: "#22c55e", accent: "#22c55e", accentLight: "#dcfce7" }
  if (pm25 <= 35)
    return { level: "moderate",       label: "Умеренно",                        heroLabel: "Умеренно",        heroBg: "#fef9c3", barBg: "#eab308", accent: "#ca8a04", accentLight: "#fef9c3" }
  if (pm25 <= 55)
    return { level: "unhealthy",      label: "Вредно для чувствительных групп", heroLabel: "Чувствительным",  heroBg: "#fee2e2", barBg: "#ef4444", accent: "#ef4444", accentLight: "#fee2e2" }
  if (pm25 <= 150)
    return { level: "very-unhealthy", label: "Вредно",                          heroLabel: "Вредно",          heroBg: "#f3e8ff", barBg: "#a855f7", accent: "#a855f7", accentLight: "#f3e8ff" }
  return   { level: "hazardous",      label: "Очень вредно",                    heroLabel: "Очень вредно",    heroBg: "#fee2e2", barBg: "#7f1d1d", accent: "#7f1d1d", accentLight: "#fee2e2" }
}

// ── US EPA AQI (2024) ──────────────────────────────────────────────────────────

/**
 * EPA 2024 PM2.5 breakpoints (eCFR Appendix G, Table 2).
 * Input must be 24-hour AVERAGE PM2.5, truncated to 1 decimal.
 * Source: https://www.ecfr.gov/current/title-40/appendix-Appendix_G_to_Part_58
 */
const EPA_2024_BREAKPOINTS = [
  { cLo:   0.0, cHi:   9.0, iLo:   0, iHi:  50, level: "very-good"     as AirQualityLevel },
  { cLo:   9.1, cHi:  35.4, iLo:  51, iHi: 100, level: "good"           as AirQualityLevel },
  { cLo:  35.5, cHi:  55.4, iLo: 101, iHi: 150, level: "moderate"       as AirQualityLevel },
  { cLo:  55.5, cHi: 125.4, iLo: 151, iHi: 200, level: "unhealthy"      as AirQualityLevel },
  { cLo: 125.5, cHi: 225.4, iLo: 201, iHi: 300, level: "very-unhealthy" as AirQualityLevel },
  { cLo: 225.5, cHi: 325.4, iLo: 301, iHi: 500, level: "hazardous"      as AirQualityLevel },
] as const

export type EpaAqiResult = {
  aqi: number
  level: AirQualityLevel
  label: string
}

/**
 * Converts a 24-hour average PM2.5 concentration to US EPA AQI (2024).
 * Returns null if the value is negative or not a valid number.
 *
 * Formula: I = (I_hi - I_lo) / (BP_hi - BP_lo) × (C - BP_lo) + I_lo
 */
export function pm25ToEpaAqi(pm25_24h_avg: number): EpaAqiResult | null {
  if (!isFinite(pm25_24h_avg) || pm25_24h_avg < 0) return null

  // EPA truncates to 1 decimal place (not rounds)
  const c = Math.floor(pm25_24h_avg * 10) / 10

  const bp =
    EPA_2024_BREAKPOINTS.find((x) => c >= x.cLo && c <= x.cHi) ??
    EPA_2024_BREAKPOINTS[EPA_2024_BREAKPOINTS.length - 1]

  const aqi = Math.round(
    ((bp.iHi - bp.iLo) / (bp.cHi - bp.cLo)) * (c - bp.cLo) + bp.iLo,
  )

  return { aqi, level: bp.level, label: pm25Label(c) }
}
