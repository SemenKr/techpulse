"use client"

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
import { useI18n } from "@/i18n/i18n-provider"

const weeklySignalValues = [
  { dayKey: "mon", signals: 142, verified: 32 },
  { dayKey: "tue", signals: 168, verified: 41 },
  { dayKey: "wed", signals: 151, verified: 38 },
  { dayKey: "thu", signals: 184, verified: 52 },
  { dayKey: "fri", signals: 213, verified: 61 },
  { dayKey: "sat", signals: 196, verified: 48 },
  { dayKey: "sun", signals: 224, verified: 66 },
] as const

const hourlyActivityData = [
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
]

export default function Home() {
  const { dictionary } = useI18n()
  const dashboard = dictionary.dashboard
  const signalTrendData = weeklySignalValues.map((item) => ({
    label: dashboard.charts.days[item.dayKey],
    signals: item.signals,
    verified: item.verified,
  }))
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
  const categoryMix = [
    { label: dashboard.categories.ai, percentage: 42 },
    { label: dashboard.categories.security, percentage: 24 },
    { label: dashboard.categories.devtools, percentage: 19 },
    { label: dashboard.categories.hardware, percentage: 15 },
  ]

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

            <ChartCard
              title={dashboard.analytics.activityTitle}
              subtitle={dashboard.analytics.activitySubtitle}
              actions={<Badge variant="outline">{dashboard.analytics.range}</Badge>}
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
            >
              <ActivityBarChart
                data={hourlyActivityData}
                ariaLabel={dashboard.charts.hourlyActivityLabel}
                summary={dashboard.charts.hourlyActivitySummary}
                activityLabel={dashboard.charts.activitySeries}
              />
            </ChartCard>
            <ChartCard
              title={dashboard.activity.categoryMixTitle}
              subtitle={dashboard.activity.categoryMixSubtitle}
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
