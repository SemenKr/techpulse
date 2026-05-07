import type { ReactNode } from "react"

type SectionHeaderProps = {
  id?: string
  title: string
  subtitle?: string
  actions?: ReactNode
}

export function SectionHeader({
  id,
  title,
  subtitle,
  actions,
}: SectionHeaderProps) {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 id={id} className="text-lg font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </header>
  )
}
