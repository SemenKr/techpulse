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

const metrics = [
  {
    title: "Tracked Signals",
    value: "1,248",
    description: "Across product, AI, and security feeds",
    trend: { value: "+12.4%", direction: "up" as const, label: "vs last week" },
    icon: Activity,
  },
  {
    title: "Live Sources",
    value: "86",
    description: "Currently monitored channels",
    trend: { value: "+6", direction: "up" as const, label: "new sources" },
    icon: Radio,
  },
  {
    title: "Market Momentum",
    value: "+18%",
    description: "Topic acceleration across watched categories",
    trend: { value: "+3.2%", direction: "up" as const, label: "24h change" },
    icon: TrendingUp,
  },
  {
    title: "Verified Alerts",
    value: "24",
    description: "High-confidence intelligence items",
    trend: { value: "stable", direction: "flat" as const, label: "quality bar" },
    icon: ShieldCheck,
  },
]

const chartBars = [38, 54, 46, 62, 71, 58, 83, 76, 91, 68, 79, 88]

const trendingTopics = [
  "AI infrastructure",
  "Developer platforms",
  "Security automation",
  "Edge inference",
  "Semiconductor supply",
  "Open model tooling",
]

const feedItems = [
  {
    title: "AI infrastructure demand continues to accelerate",
    timestamp: "2m ago",
    category: "AI",
    description: "New capacity signals detected across cloud and chip vendors.",
  },
  {
    title: "Security tooling receives elevated enterprise attention",
    timestamp: "11m ago",
    category: "Security",
    description: "Multiple vendor updates point to consolidation pressure.",
  },
  {
    title: "Developer platform consolidation trend detected",
    timestamp: "24m ago",
    category: "DevTools",
    description: "Repository activity and release cadence are moving together.",
  },
  {
    title: "Semiconductor outlook shows stronger momentum",
    timestamp: "41m ago",
    category: "Hardware",
    description: "Supply-side indicators improved across monitored sources.",
  },
]

export default function Home() {
  return (
    <DashboardShell>
      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Real-time overview
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Tech intelligence dashboard
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Monitor technology signals, live updates, and emerging trends
              from one operational workspace.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500" />
            Live monitoring ready
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,1fr)]">
          <div className="space-y-4">
            <SectionHeader
              title="Analytics"
              subtitle="Signal movement and topic concentration across watched technology categories."
              actions={
                <Button variant="outline" size="sm">
                  View report
                </Button>
              }
            />

            <ChartCard
              title="Streaming intelligence activity"
              subtitle="Signal volume"
              actions={<Badge variant="outline">Last 12 hours</Badge>}
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

            <ChartCard title="Trending topics" subtitle="Current focus areas">
              <div className="grid gap-3 sm:grid-cols-2">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between rounded-md border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-md bg-muted">
                        <Cpu className="size-4" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-medium">{topic}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      #{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>

          <div className="space-y-4">
            <SectionHeader
              title="Realtime activity"
              subtitle="Recent priority signals from monitored sources."
            />
            <FeedCard
              title="Priority feed"
              subtitle="Verified intelligence"
              items={feedItems}
            />
            <ChartCard title="Category mix" subtitle="Placeholder breakdown">
              <div className="space-y-3">
                {[
                  ["AI", "42%"],
                  ["Security", "24%"],
                  ["DevTools", "19%"],
                  ["Hardware", "15%"],
                ].map(([label, value]) => (
                  <div key={label} className="space-y-1.5">
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
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>
        </div>
      </section>
    </DashboardShell>
  )
}
