export const weeklySignalValues = [
  { dayKey: "mon", signals: 142, verified: 32 },
  { dayKey: "tue", signals: 168, verified: 41 },
  { dayKey: "wed", signals: 151, verified: 38 },
  { dayKey: "thu", signals: 184, verified: 52 },
  { dayKey: "fri", signals: 213, verified: 61 },
  { dayKey: "sat", signals: 196, verified: 48 },
  { dayKey: "sun", signals: 224, verified: 66 },
] as const

export const signalTrendValuesByTimeframe = {
  "24h": [
    { label: "00", signals: 42, verified: 12 },
    { label: "04", signals: 58, verified: 16 },
    { label: "08", signals: 84, verified: 24 },
    { label: "12", signals: 112, verified: 34 },
    { label: "16", signals: 96, verified: 29 },
    { label: "20", signals: 78, verified: 21 },
  ],
  "30d": [
    { weekKey: "w1", signals: 624, verified: 146 },
    { weekKey: "w2", signals: 718, verified: 182 },
    { weekKey: "w3", signals: 804, verified: 214 },
    { weekKey: "w4", signals: 892, verified: 246 },
  ],
} as const

export const hourlyActivityData = [
  { label: "00", activity: 34 },
  { label: "02", activity: 42 },
  { label: "04", activity: 38 },
  { label: "06", activity: 56 },
  { label: "08", activity: 74 },
  { label: "10", activity: 88 },
  { label: "12", activity: 96 },
  { label: "14", activity: 84 },
  { label: "16", activity: 91 },
  { label: "18", activity: 78 },
  { label: "20", activity: 69 },
  { label: "22", activity: 51 },
] as const

export const categoryMixValues = [
  { category: "ai", percentage: 42 },
  { category: "security", percentage: 24 },
  { category: "devtools", percentage: 19 },
  { category: "hardware", percentage: 15 },
] as const

export type DayKey = (typeof weeklySignalValues)[number]["dayKey"]
export type WeekKey =
  (typeof signalTrendValuesByTimeframe)["30d"][number]["weekKey"]
export type DashboardCategory = (typeof categoryMixValues)[number]["category"]
