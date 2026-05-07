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
    <Card as="section" className="rounded-lg">
      <CardHeader>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
        <CardTitle as="h3">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={`${item.timestamp}-${item.title}`}>
              <article className="rounded-md border p-3 transition-colors hover:bg-muted/60">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{item.category}</Badge>
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
