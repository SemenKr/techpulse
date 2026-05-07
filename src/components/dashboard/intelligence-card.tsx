import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type IntelligenceTone = "attention" | "positive" | "neutral"

type IntelligenceCardProps = {
  title: string
  description: string
  label: string
  tone?: IntelligenceTone
}

const toneStyles = {
  attention: "border-amber-500/30 bg-amber-500/5",
  positive: "border-emerald-500/30 bg-emerald-500/5",
  neutral: "border-border bg-card",
} as const satisfies Record<IntelligenceTone, string>

export function IntelligenceCard({
  title,
  description,
  label,
  tone = "neutral",
}: IntelligenceCardProps) {
  return (
    <Card as="article" size="sm" className={cn("rounded-lg", toneStyles[tone])}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>{label}</CardDescription>
            <CardTitle as="h3">{title}</CardTitle>
          </div>
          <Badge variant="outline">{label}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-5 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
