"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

import { useClientReady } from "@/components/charts/client-ready"
import { ChartTooltip } from "@/components/charts/chart-tooltip"

type CategoryDistributionPoint = {
  label: string
  percentage: number
}

type CategoryDistributionChartProps = {
  data: CategoryDistributionPoint[]
  ariaLabel: string
  summary: string
}

const chartColors = [
  "var(--primary)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
]

export function CategoryDistributionChart({
  data,
  ariaLabel,
  summary,
}: CategoryDistributionChartProps) {
  const isClientReady = useClientReady()
  const formatPercentage = (value: string | number) => `${value}%`

  return (
    <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_160px]">
      <div className="h-56 min-w-0" role="img" aria-label={ariaLabel}>
        <p className="sr-only">{summary}</p>
        {isClientReady && (
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <PieChart>
              <Tooltip
                content={<ChartTooltip valueFormatter={formatPercentage} />}
              />
              <Pie
                data={data}
                dataKey="percentage"
                nameKey="label"
                innerRadius="58%"
                outerRadius="82%"
                paddingAngle={2}
                stroke="var(--card)"
                strokeWidth={3}
              >
                {data.map((item, index) => (
                  <Cell
                    key={item.label}
                    fill={chartColors[index % chartColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      <ul className="space-y-2 self-center">
        {data.map((item, index) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-3 text-sm"
          >
            <span className="flex items-center gap-2 text-muted-foreground">
              <span
                className="size-2 rounded-full"
                style={{
                  backgroundColor: chartColors[index % chartColors.length],
                }}
              />
              {item.label}
            </span>
            <span className="font-medium">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
