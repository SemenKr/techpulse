"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { useClientReady } from "@/components/charts/client-ready"
import { ChartTooltip } from "@/components/charts/chart-tooltip"

type ActivityBarChartPoint = {
  label: string
  activity: number
}

type ActivityBarChartProps = {
  data: ActivityBarChartPoint[]
  ariaLabel: string
  summary: string
  activityLabel: string
}

export function ActivityBarChart({
  data,
  ariaLabel,
  summary,
  activityLabel,
}: ActivityBarChartProps) {
  const isClientReady = useClientReady()

  return (
    <div className="h-64 w-full" role="img" aria-label={ariaLabel}>
      <p className="sr-only">{summary}</p>
      {isClientReady && (
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <BarChart
            data={data}
            margin={{ top: 8, right: 12, bottom: 0, left: 0 }}
          >
            <CartesianGrid
              stroke="var(--border)"
              strokeDasharray="4 4"
              vertical={false}
            />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              stroke="var(--muted-foreground)"
              fontSize={12}
            />
            <YAxis
              width={32}
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              stroke="var(--muted-foreground)"
              fontSize={12}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ fill: "var(--muted)" }}
            />
            <Bar
              dataKey="activity"
              name={activityLabel}
              fill="var(--primary)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
