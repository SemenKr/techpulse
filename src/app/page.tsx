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
import { DashboardShell } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/i18n/i18n-provider"

const chartBars = [38, 54, 46, 62, 71, 58, 83, 76, 91, 68, 79, 88]

export default function Home() {
  const { dictionary } = useI18n()
  const dashboard = dictionary.dashboard
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
    [dashboard.categories.ai, "42%"],
    [dashboard.categories.security, "24%"],
    [dashboard.categories.devtools, "19%"],
    [dashboard.categories.hardware, "15%"],
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
              <div className="grid h-72 grid-cols-12 items-end gap-2">
                {chartBars.map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="rounded-t-md bg-primary/80 transition-colors hover:bg-primary"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
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
              title={dashboard.activity.categoryMixTitle}
              subtitle={dashboard.activity.categoryMixSubtitle}
            >
              <ul className="space-y-3">
                {categoryMix.map(([label, value]) => (
                  <li key={label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span>{label}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: value }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </ChartCard>
          </section>
        </div>
      </div>
    </DashboardShell>
  )
}
