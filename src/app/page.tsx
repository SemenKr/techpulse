import {
  Activity,
  ArrowUpRight,
  Radio,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"

import { DashboardShell } from "@/components/layout/dashboard-shell"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const analyticsCards = [
  {
    title: "Tracked Signals",
    value: "1,248",
    detail: "Across product, AI, and security feeds",
    icon: Activity,
  },
  {
    title: "Live Sources",
    value: "86",
    detail: "Currently monitored channels",
    icon: Radio,
  },
  {
    title: "Market Momentum",
    value: "+18%",
    detail: "Week over week topic acceleration",
    icon: TrendingUp,
  },
  {
    title: "Verified Alerts",
    value: "24",
    detail: "High confidence intelligence items",
    icon: ShieldCheck,
  },
]

export default function Home() {
  return (
    <DashboardShell>
      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-muted-foreground">
            Real-time overview
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
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
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {analyticsCards.map((card) => {
            const Icon = card.icon

            return (
              <Card key={card.title} size="sm" className="rounded-lg">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardDescription>{card.title}</CardDescription>
                      <CardTitle className="mt-2 text-2xl">
                        {card.value}
                      </CardTitle>
                    </div>
                    <div className="flex size-9 items-center justify-center rounded-md bg-muted text-foreground">
                      <Icon className="size-4" aria-hidden="true" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{card.detail}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
          <Card className="rounded-lg">
            <CardHeader>
              <CardDescription>Signal volume</CardDescription>
              <CardTitle>Streaming intelligence activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid h-72 grid-cols-12 items-end gap-2">
                {[38, 54, 46, 62, 71, 58, 83, 76, 91, 68, 79, 88].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="rounded-t-md bg-primary/80"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg">
            <CardHeader>
              <CardDescription>Priority feed</CardDescription>
              <CardTitle>Recent intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "AI infrastructure demand continues to accelerate",
                  "Security tooling receives elevated enterprise attention",
                  "Developer platform consolidation trend detected",
                  "Semiconductor supply outlook shows stronger momentum",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b pb-4 last:border-b-0 last:pb-0"
                  >
                    <ArrowUpRight
                      className="mt-0.5 size-4 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </DashboardShell>
  )
}
