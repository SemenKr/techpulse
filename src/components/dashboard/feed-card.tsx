import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type FeedItem = {
  title: string
  timestamp: string
  category: string
  description?: string
}

type FeedCardProps = {
  title: string
  subtitle?: string
  items: FeedItem[]
}

export function FeedCard({ title, subtitle, items }: FeedCardProps) {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {items.map((item) => (
            <article
              key={`${item.timestamp}-${item.title}`}
              className="rounded-md border p-3 transition-colors hover:bg-muted/60"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{item.category}</Badge>
                <time className="text-xs text-muted-foreground">
                  {item.timestamp}
                </time>
              </div>
              <h3 className="mt-2 text-sm font-medium leading-5">
                {item.title}
              </h3>
              {item.description && (
                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
