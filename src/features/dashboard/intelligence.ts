export type SignalPriority = "high" | "medium" | "low"

type PriorityFeedItem = {
  priority: SignalPriority
}

const priorityOrder = {
  high: 0,
  medium: 1,
  low: 2,
} as const satisfies Record<SignalPriority, number>

export function getPriorityFeedItems<T extends PriorityFeedItem>(items: T[]) {
  return [...items].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  )
}

export function getPriorityCounts(items: PriorityFeedItem[]) {
  return items.reduce(
    (counts, item) => ({
      ...counts,
      [item.priority]: counts[item.priority] + 1,
    }),
    {
      high: 0,
      medium: 0,
      low: 0,
    } satisfies Record<SignalPriority, number>
  )
}

export function getSignalPriority(priority: string): SignalPriority {
  if (priority === "high" || priority === "medium" || priority === "low") {
    return priority
  }

  return "low"
}
