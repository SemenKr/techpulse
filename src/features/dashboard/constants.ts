export const timeframeOptions = ["24h", "7d", "30d"] as const
export const categoryOptions = [
  "all",
  "ai",
  "security",
  "devtools",
  "hardware",
] as const

export type Timeframe = (typeof timeframeOptions)[number]
export type CategoryFilter = (typeof categoryOptions)[number]

export const categoryFactors = {
  all: 1,
  ai: 0.42,
  security: 0.24,
  devtools: 0.19,
  hardware: 0.15,
} as const satisfies Record<CategoryFilter, number>

export const timeframeActivityFactors = {
  "24h": 1,
  "7d": 1.18,
  "30d": 1.36,
} as const satisfies Record<Timeframe, number>
