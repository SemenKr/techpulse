type SearchFeedItem = {
  title: string
  category: string
  description?: string
}

type DashboardSearchDictionary = {
  analytics: {
    title: string
    trendingTitle: string
  }
  activity: {
    title: string
    feedTitle: string
    categoryMixTitle: string
  }
  categories: Record<"ai" | "security" | "devtools" | "hardware", string>
  controls: {
    categories: Record<"all" | "ai" | "security" | "devtools" | "hardware", string>
  }
  feed: SearchFeedItem[]
  metricsHeading: string
  topics: string[]
}

export type CommandSearchItem = {
  id: string
  title: string
  description: string
  group: string
  targetId: string
  searchText: string
}

export function getDashboardCommandItems(
  dashboard: DashboardSearchDictionary,
  labels: {
    categoriesGroup: string
    feedGroup: string
    sectionsGroup: string
    topicsGroup: string
    jumpToSection: string
    filterCategory: string
  }
) {
  const sectionItems: CommandSearchItem[] = [
    {
      id: "section-metrics",
      title: dashboard.metricsHeading,
      description: labels.jumpToSection,
      group: labels.sectionsGroup,
      targetId: "metrics-heading",
      searchText: dashboard.metricsHeading,
    },
    {
      id: "section-analytics",
      title: dashboard.analytics.title,
      description: labels.jumpToSection,
      group: labels.sectionsGroup,
      targetId: "analytics-heading",
      searchText: dashboard.analytics.title,
    },
    {
      id: "section-activity",
      title: dashboard.activity.title,
      description: labels.jumpToSection,
      group: labels.sectionsGroup,
      targetId: "activity-heading",
      searchText: dashboard.activity.title,
    },
  ]

  const topicItems = dashboard.topics.map((topic, index) => ({
    id: `topic-${index}`,
    title: topic,
    description: dashboard.analytics.trendingTitle,
    group: labels.topicsGroup,
    targetId: "trending-topics-heading",
    searchText: `${topic} ${dashboard.analytics.trendingTitle}`,
  }))

  const feedItems = dashboard.feed.map((item, index) => ({
    id: `feed-${index}`,
    title: item.title,
    description: item.category,
    group: labels.feedGroup,
    targetId: "priority-feed-heading",
    searchText: `${item.title} ${item.category} ${item.description ?? ""}`,
  }))

  const categoryItems = Object.entries(dashboard.categories).map(
    ([key, label]) => ({
      id: `category-${key}`,
      title: label,
      description: labels.filterCategory,
      group: labels.categoriesGroup,
      targetId: "category-mix-heading",
      searchText: `${label} ${dashboard.controls.categories[key as keyof typeof dashboard.controls.categories]}`,
    })
  )

  return [...sectionItems, ...topicItems, ...feedItems, ...categoryItems]
}

export function filterCommandItems(
  items: CommandSearchItem[],
  query: string
) {
  const normalizedQuery = query.trim().toLocaleLowerCase()

  if (!normalizedQuery) {
    return items
  }

  return items.filter((item) =>
    item.searchText.toLocaleLowerCase().includes(normalizedQuery)
  )
}
