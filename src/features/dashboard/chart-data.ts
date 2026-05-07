import {
  categoryOptions,
  timeframeActivityFactors,
  timeframeOptions,
  type CategoryFilter,
  type Timeframe,
} from "@/features/dashboard/constants"
import {
  categoryMixValues,
  hourlyActivityData,
  signalTrendValuesByTimeframe,
  weeklySignalValues,
  type DashboardCategory,
  type DayKey,
  type WeekKey,
} from "@/features/dashboard/mock-data"

type CategoryLabels = Record<DashboardCategory, string>
type DayLabels = Record<DayKey, string>
type WeekLabels = Record<WeekKey, string>

export function getSignalTrendData(
  timeframe: Timeframe,
  categoryFactor: number,
  dayLabels: DayLabels,
  weekLabels: WeekLabels
) {
  if (timeframe === "7d") {
    return weeklySignalValues.map((item) => ({
      label: dayLabels[item.dayKey],
      signals: scaleChartValue(item.signals, categoryFactor),
      verified: scaleChartValue(item.verified, categoryFactor),
    }))
  }

  if (timeframe === "30d") {
    return signalTrendValuesByTimeframe[timeframe].map((item) => ({
      label: weekLabels[item.weekKey],
      signals: scaleChartValue(item.signals, categoryFactor),
      verified: scaleChartValue(item.verified, categoryFactor),
    }))
  }

  return signalTrendValuesByTimeframe[timeframe].map((item) => ({
    label: item.label,
    signals: scaleChartValue(item.signals, categoryFactor),
    verified: scaleChartValue(item.verified, categoryFactor),
  }))
}

export function getHourlyActivityChartData(
  timeframe: Timeframe,
  categoryFactor: number
) {
  return hourlyActivityData.map((item) => ({
    label: item.label,
    activity: scaleChartValue(
      item.activity,
      categoryFactor * timeframeActivityFactors[timeframe]
    ),
  }))
}

export function getCategoryMixData(
  category: CategoryFilter,
  categoryLabels: CategoryLabels
) {
  if (category === "all") {
    return categoryMixValues.map((item) => ({
      label: categoryLabels[item.category],
      percentage: item.percentage,
    }))
  }

  return [
    {
      label: categoryLabels[category],
      percentage: 100,
    },
  ]
}

export function isTimeframe(value: string): value is Timeframe {
  return timeframeOptions.includes(value as Timeframe)
}

export function isCategoryFilter(value: string): value is CategoryFilter {
  return categoryOptions.includes(value as CategoryFilter)
}

function scaleChartValue(value: number, factor: number) {
  return Math.max(1, Math.round(value * factor))
}
