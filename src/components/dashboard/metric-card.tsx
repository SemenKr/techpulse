import type { ComponentType } from "react"
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type MetricTrend = {
  value: string
  direction: "up" | "down" | "flat"
  label?: string
}

type MetricCardProps = {
  title: string
  value: string
  description?: string
  trend: MetricTrend
  icon?: ComponentType<{ className?: string; "aria-hidden"?: boolean }>
}

const trendStyles = {
  up: "text-emerald-600",
  down: "text-destructive",
  flat: "text-muted-foreground",
}

const trendIcons = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  flat: Minus,
}

export function MetricCard({
  title,
  value,
  description,
  trend,
  icon: Icon,
}: MetricCardProps) {
  const TrendIcon = trendIcons[trend.direction]

  return (
    <Card as="article" size="sm" className="rounded-lg">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle as="h3">{title}</CardTitle>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {value}
            </p>
          </div>
          {Icon && (
            <div className="flex size-9 items-center justify-center rounded-md bg-muted text-foreground">
              <Icon className="size-4" aria-hidden />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div
          className={cn(
            "flex items-center gap-1 text-sm font-medium",
            trendStyles[trend.direction]
          )}
        >
          <TrendIcon className="size-4" aria-hidden />
          <span>{trend.value}</span>
          {trend.label && (
            <span className="font-normal text-muted-foreground">
              {trend.label}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}
