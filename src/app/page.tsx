"use client"

import { useState } from "react"
import {
  Activity,
  Cpu,
  Radio,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"

import {
  ChartCard,
  FeedCard,
  MetricCard,
  SectionHeader,
} from "@/components/dashboard"
import {
  ActivityBarChart,
  AnalyticsLineChart,
  CategoryDistributionChart,
} from "@/components/charts"
import { DashboardShell } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  getCategoryMixData,
  getHourlyActivityChartData,
  getSignalTrendData,
  isCategoryFilter,
  isTimeframe,
} from "@/features/dashboard/chart-data"
import {
  categoryFactors,
  categoryOptions,
  timeframeOptions,
  type CategoryFilter,
  type Timeframe,
} from "@/features/dashboard/constants"
import { useI18n } from "@/i18n/i18n-provider"

export default function Home() {
  const [timeframe, setTimeframe] = useState<Timeframe>("7d")
  const [category, setCategory] = useState<CategoryFilter>("all")
  const { dictionary } = useI18n()
  const dashboard = dictionary.dashboard
  const selectedTimeframeLabel = dashboard.controls.timeframes[timeframe]
  const selectedCategoryLabel = dashboard.controls.categories[category]
  const categoryFactor = categoryFactors[category]
  const signalTrendData = getSignalTrendData(
    timeframe,
    categoryFactor,
    dashboard.charts.days,
    dashboard.charts.weeks
  )
  const filteredHourlyActivityData = getHourlyActivityChartData(
    timeframe,
    categoryFactor
  )
  const metrics = [
    {
      title: dashboard.metrics.trackedSignals.title,
      value: "1,248",
      description: dashboard.metrics.trackedSignals.description,
      trend: {
        value: dashboard.metrics.trackedSignals.trend,
        direction: "up" as const,
        label: dashboard.metrics.trackedSignals.trendLabel,
      },
      icon: Activity,
    },
    {
      title: dashboard.metrics.liveSources.title,
      value: "86",
      description: dashboard.metrics.liveSources.description,
      trend: {
        value: dashboard.metrics.liveSources.trend,
        direction: "up" as const,
        label: dashboard.metrics.liveSources.trendLabel,
      },
      icon: Radio,
    },
    {
      title: dashboard.metrics.marketMomentum.title,
      value: "+18%",
      description: dashboard.metrics.marketMomentum.description,
      trend: {
        value: dashboard.metrics.marketMomentum.trend,
        direction: "up" as const,
        label: dashboard.metrics.marketMomentum.trendLabel,
      },
      icon: TrendingUp,
    },
    {
      title: dashboard.metrics.verifiedAlerts.title,
      value: "24",
      description: dashboard.metrics.verifiedAlerts.description,
      trend: {
        value: dashboard.metrics.verifiedAlerts.trend,
        direction: "flat" as const,
        label: dashboard.metrics.verifiedAlerts.trendLabel,
      },
      icon: ShieldCheck,
    },
  ]
  const categoryMix = getCategoryMixData(category, dashboard.categories)

  return (
    <DashboardShell>
      <div className="space-y-6">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {dashboard.eyebrow}
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {dashboard.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              {dashboard.description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500" />
            {dashboard.liveStatus}
          </div>
        </header>

        <section aria-labelledby="metrics-heading">
          <h2 id="metrics-heading" className="sr-only">
            {dashboard.metricsHeading}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))}
          </div>
        </section>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,1fr)]">
          <section className="space-y-4" aria-labelledby="analytics-heading">
            <SectionHeader
              id="analytics-heading"
              title={dashboard.analytics.title}
              subtitle={dashboard.analytics.subtitle}
              actions={
                <Button variant="outline" size="sm">
                  {dashboard.analytics.action}
                </Button>
              }
            />
            <section
              className="rounded-lg border bg-card p-3"
              aria-labelledby="analytics-controls-heading"
            >
              <h3 id="analytics-controls-heading" className="sr-only">
                {dashboard.controls.title}
              </h3>
              <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
                <div className="min-w-0 space-y-2">
                  <p
                    id="timeframe-filter-label"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    {dashboard.controls.timeframeLabel}
                  </p>
                  <Tabs
                    value={timeframe}
                    onValueChange={(value) => {
                      if (isTimeframe(value)) {
                        setTimeframe(value)
                      }
                    }}
                  >
                    <TabsList
                      aria-labelledby="timeframe-filter-label"
                      className="w-full justify-start overflow-x-auto"
                    >
                      {timeframeOptions.map((option) => (
                        <TabsTrigger key={option} value={option}>
                          {dashboard.controls.timeframes[option]}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>

                <div className="min-w-0 space-y-2">
                  <p
                    id="category-filter-label"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    {dashboard.controls.categoryLabel}
                  </p>
                  <Tabs
                    value={category}
                    onValueChange={(value) => {
                      if (isCategoryFilter(value)) {
                        setCategory(value)
                      }
                    }}
                  >
                    <TabsList
                      aria-labelledby="category-filter-label"
                      className="w-full justify-start overflow-x-auto"
                    >
                      {categoryOptions.map((option) => (
                        <TabsTrigger key={option} value={option}>
                          {dashboard.controls.categories[option]}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>
              </div>
            </section>

            <ChartCard
              title={dashboard.analytics.activityTitle}
              subtitle={dashboard.analytics.activitySubtitle}
              actions={
                <Badge variant="outline">
                  {selectedTimeframeLabel} · {selectedCategoryLabel}
                </Badge>
              }
            >
              <AnalyticsLineChart
                data={signalTrendData}
                ariaLabel={dashboard.charts.signalTrendLabel}
                summary={dashboard.charts.signalTrendSummary}
                signalsLabel={dashboard.charts.signalsSeries}
                verifiedLabel={dashboard.charts.verifiedSeries}
              />
            </ChartCard>

            <ChartCard
              title={dashboard.analytics.trendingTitle}
              subtitle={dashboard.analytics.trendingSubtitle}
            >
              <ul className="grid gap-3 sm:grid-cols-2">
                {dashboard.topics.map((topic, index) => (
                  <li key={topic}>
                    <article className="flex items-center justify-between rounded-md border p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-md bg-muted">
                          <Cpu className="size-4" aria-hidden="true" />
                        </div>
                        <h4 className="text-sm font-medium">{topic}</h4>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        #{index + 1}
                      </span>
                    </article>
                  </li>
                ))}
              </ul>
            </ChartCard>
          </section>

          <section className="space-y-4" aria-labelledby="activity-heading">
            <SectionHeader
              id="activity-heading"
              title={dashboard.activity.title}
              subtitle={dashboard.activity.subtitle}
            />
            <FeedCard
              title={dashboard.activity.feedTitle}
              subtitle={dashboard.activity.feedSubtitle}
              items={dashboard.feed}
            />
            <ChartCard
              title={dashboard.activity.hourlyTitle}
              subtitle={dashboard.activity.hourlySubtitle}
              actions={<Badge variant="outline">{selectedTimeframeLabel}</Badge>}
            >
              <ActivityBarChart
                data={filteredHourlyActivityData}
                ariaLabel={dashboard.charts.hourlyActivityLabel}
                summary={dashboard.charts.hourlyActivitySummary}
                activityLabel={dashboard.charts.activitySeries}
              />
            </ChartCard>
            <ChartCard
              title={dashboard.activity.categoryMixTitle}
              subtitle={dashboard.activity.categoryMixSubtitle}
              actions={<Badge variant="outline">{selectedCategoryLabel}</Badge>}
            >
              <CategoryDistributionChart
                data={categoryMix}
                ariaLabel={dashboard.charts.categoryDistributionLabel}
                summary={dashboard.charts.categoryDistributionSummary}
              />
            </ChartCard>
          </section>
        </div>
      </div>
    </DashboardShell>
  )
}
