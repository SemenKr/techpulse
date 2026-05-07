import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { cn } from "@/lib/utils"

type FeedPriority = "high" | "medium" | "low"

type FeedItem = {
  title: string
  timestamp: string
  category: string
  priority: FeedPriority
  description?: string
}

type FeedCardProps = {
  id?: string
  title: string
  subtitle?: string
  items: FeedItem[]
  liveUpdateLabel?: string
  priorityLabels: Record<FeedPriority, string>
}

const priorityStyles = {
  high: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  medium: "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  low: "border-border text-muted-foreground",
} as const satisfies Record<FeedPriority, string>

export function FeedCard({
  id,
  title,
  subtitle,
  items,
  liveUpdateLabel,
  priorityLabels,
}: FeedCardProps) {
  return (
    <Card as="section" className="rounded-lg">
      <CardHeader>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
        <CardTitle id={id} as="h3">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={`${item.timestamp}-${item.title}`}>
              <article className="rounded-md border p-3 transition-[background-color,border-color,transform] duration-300 hover:bg-muted/60">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <Badge
                    variant="outline"
                    className={cn(priorityStyles[item.priority])}
                  >
                    {priorityLabels[item.priority]}
                  </Badge>
                  {index === 0 && liveUpdateLabel && (
                    <Badge variant="outline">{liveUpdateLabel}</Badge>
                  )}
                  <time className="text-xs text-muted-foreground">
                    {item.timestamp}
                  </time>
                </div>
                <h4 className="mt-2 text-sm font-medium leading-5">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </article>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
