"use client"

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { useClientReady } from "@/components/charts/client-ready"
import { ChartTooltip } from "@/components/charts/chart-tooltip"

type AnalyticsLineChartPoint = {
  label: string
  signals: number
  verified: number
}

type AnalyticsLineChartProps = {
  data: AnalyticsLineChartPoint[]
  ariaLabel: string
  summary: string
  signalsLabel: string
  verifiedLabel: string
}

export function AnalyticsLineChart({
  data,
  ariaLabel,
  summary,
  signalsLabel,
  verifiedLabel,
}: AnalyticsLineChartProps) {
  const isClientReady = useClientReady()

  return (
    <div className="h-72 w-full" role="img" aria-label={ariaLabel}>
      <p className="sr-only">{summary}</p>
      {isClientReady && (
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <LineChart
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
              width={34}
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              stroke="var(--muted-foreground)"
              fontSize={12}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: "var(--border)" }}
            />
            <Line
              type="monotone"
              dataKey="signals"
              name={signalsLabel}
              stroke="var(--primary)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="verified"
              name={verifiedLabel}
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
