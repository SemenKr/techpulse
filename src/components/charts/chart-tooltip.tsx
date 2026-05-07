"use client"

import { cn } from "@/lib/utils"

type ChartTooltipItem = {
  name?: string
  value?: string | number
  color?: string
}

type ChartTooltipProps = {
  active?: boolean
  label?: string | number
  payload?: ChartTooltipItem[]
  className?: string
  valueFormatter?: (value: string | number) => string
}

export function ChartTooltip({
  active,
  label,
  payload,
  className,
  valueFormatter,
}: ChartTooltipProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "rounded-md border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-sm",
        className
      )}
    >
      {label !== undefined && label !== null && (
        <p className="mb-1 font-medium">{label}</p>
      )}
      <div className="space-y-1">
        {payload.map((item) => (
          <div
            key={`${item.name}-${item.value}`}
            className="flex items-center justify-between gap-4"
          >
            <span className="flex items-center gap-2 text-muted-foreground">
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {item.name}
            </span>
            <span className="font-medium">
              {item.value !== undefined && valueFormatter
                ? valueFormatter(item.value)
                : item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
