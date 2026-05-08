import type { ReactNode } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ChartCardProps = {
  id?: string
  title: string
  subtitle?: string
  actions?: ReactNode
  children: ReactNode
}

export function ChartCard({
  id,
  title,
  subtitle,
  actions,
  children,
}: ChartCardProps) {
  return (
    <Card as="section" className="rounded-lg">
      <CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {subtitle && <CardDescription>{subtitle}</CardDescription>}
            <CardTitle id={id} as="h3">
              {title}
            </CardTitle>
          </div>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
