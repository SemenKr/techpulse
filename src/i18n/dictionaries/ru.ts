export const ru = {
  common: {
    language: "Язык",
    notifications: "Уведомления",
    openNavigation: "Открыть навигацию",
    closeNavigation: "Закрыть навигацию",
    searchPlaceholder: "Поиск сигналов, источников или тем",
    switchToSystem: "Использовать системную тему",
    switchToDark: "Переключить на тёмную тему",
    switchToLight: "Переключить на светлую тему",
  },
  command: {
    title: "Командная палитра",
    open: "Открыть командную палитру",
    close: "Закрыть командную палитру",
    placeholder: "Поиск тем, ленты, разделов или категорий",
    searchLabel: "Поиск команд",
    results: "Результаты команд",
    empty: "Ничего не найдено",
    shortcut: "⌘K / Ctrl Shift K",
    jumpToSection: "Перейти к разделу",
    filterCategory: "Открыть аналитику категории",
    groups: {
      sections: "Раздел",
      topics: "Тема",
      feed: "Лента",
      categories: "Категория",
    },
  },
  sidebar: {
    subtitle: "Центр аналитики",
    nav: {
      overview: "Обзор",
      live: "Лента",
      signals: "Сигналы",
      analytics: "Аналитика",
      alerts: "Алерты",
      search: "Поиск",
      settings: "Настройки",
    },
  },
  dashboard: {
    eyebrow: "Обзор в реальном времени",
    title: "Панель технологической аналитики",
    description:
      "Отслеживайте технологические сигналы, live-обновления и новые тренды в одном рабочем пространстве.",
    liveStatus: "Мониторинг активен",
    liveStatusDetail: "Локальная активность дашборда обновляется автоматически.",
    metricsHeading: "Ключевые метрики",
    priority: {
      high: "Высокий",
      medium: "Средний",
      low: "Низкий",
    },
    metrics: {
      trackedSignals: {
        title: "Отслеживаемые сигналы",
        description: "Продукты, AI и security-источники",
        trend: "+12.4%",
        trendLabel: "к прошлой неделе",
      },
      liveSources: {
        title: "Live-источники",
        description: "Активно отслеживаемые каналы",
        trend: "+6",
        trendLabel: "новых источников",
      },
      marketMomentum: {
        title: "Рыночный импульс",
        description: "Ускорение тем в отслеживаемых категориях",
        trend: "+3.2%",
        trendLabel: "за 24 часа",
      },
      verifiedAlerts: {
        title: "Проверенные алерты",
        description: "Сигналы с высоким уровнем доверия",
        trend: "стабильно",
        trendLabel: "порог качества",
      },
    },
    analytics: {
      title: "Аналитика",
      subtitle:
        "Динамика сигналов и концентрация тем по отслеживаемым технологическим категориям.",
      action: "Открыть отчёт",
      activityTitle: "Активность intelligence-потока",
      activitySubtitle: "Объём сигналов",
      range: "Последние 12 часов",
      trendingTitle: "Трендовые темы",
      trendingSubtitle: "Текущие фокусные области",
    },
    controls: {
      title: "Управление аналитикой",
      timeframeLabel: "Период",
      categoryLabel: "Категория",
      timeframes: {
        "24h": "24ч",
        "7d": "7д",
        "30d": "30д",
      },
      categories: {
        all: "Все",
        ai: "AI",
        security: "Security",
        devtools: "DevTools",
        hardware: "Hardware",
      },
    },
    intelligence: {
      title: "Операционная аналитика",
      subtitle:
        "Контекстные выводы на основе текущих сигналов и приоритетов дашборда.",
      cards: {
        priority: {
          title: "сигнала высокого приоритета",
          description:
            "Приоритетная лента сконцентрирована вокруг infrastructure и security-сигналов.",
        },
        aiMomentum: {
          title: "AI-инфраструктура лидирует по импульсу",
          description:
            "AI остаётся самой быстрорастущей категорией в отслеживаемой активности.",
        },
        devtoolsSlowdown: {
          title: "Активность developer-платформ замедлилась",
          description:
            "DevTools остаётся важной темой, но текущая активность менее срочная.",
        },
      },
    },
    activity: {
      title: "Активность в реальном времени",
      subtitle: "Последние приоритетные сигналы из отслеживаемых источников.",
      feedTitle: "Приоритетная лента",
      feedSubtitle: "Проверенная аналитика",
      liveUpdateLabel: "Live",
      updatedNow: "обновлено сейчас",
      hourlyTitle: "Почасовая активность",
      hourlySubtitle: "Сигналы по часам",
      categoryMixTitle: "Распределение категорий",
      categoryMixSubtitle: "Базовый placeholder",
    },
    charts: {
      signalTrendLabel: "Тренд сигналов и проверенной активности",
      signalTrendSummary:
        "График сравнивает общее число сигналов и проверенные элементы для выбранного периода и категории.",
      hourlyActivityLabel: "Почасовая активность сигналов",
      hourlyActivitySummary:
        "График показывает локальное распределение активности сигналов для выбранного периода и категории.",
      categoryDistributionLabel: "Распределение сигналов по категориям",
      categoryDistributionSummary:
        "График показывает видимое распределение категорий после применения выбранного фильтра.",
      signalsSeries: "Сигналы",
      verifiedSeries: "Проверено",
      activitySeries: "Активность",
      days: {
        mon: "Пн",
        tue: "Вт",
        wed: "Ср",
        thu: "Чт",
        fri: "Пт",
        sat: "Сб",
        sun: "Вс",
      },
      weeks: {
        w1: "Н1",
        w2: "Н2",
        w3: "Н3",
        w4: "Н4",
      },
    },
    topics: [
      "AI-инфраструктура",
      "Платформы разработчиков",
      "Автоматизация security",
      "Edge inference",
      "Поставки полупроводников",
      "Open model tooling",
    ],
    feed: [
      {
        title: "Спрос на AI-инфраструктуру продолжает ускоряться",
        timestamp: "2 мин назад",
        category: "AI",
        priority: "high",
        description:
          "Новые capacity-сигналы обнаружены у cloud- и chip-поставщиков.",
      },
      {
        title: "Security-инструменты получают больше внимания enterprise",
        timestamp: "11 мин назад",
        category: "Security",
        priority: "high",
        description: "Обновления вендоров указывают на давление консолидации.",
      },
      {
        title: "Обнаружен тренд консолидации developer-платформ",
        timestamp: "24 мин назад",
        category: "DevTools",
        priority: "medium",
        description:
          "Активность репозиториев и темп релизов начинают двигаться синхронно.",
      },
      {
        title: "Прогноз по полупроводникам показывает усиление momentum",
        timestamp: "41 мин назад",
        category: "Hardware",
        priority: "low",
        description:
          "Supply-side индикаторы улучшились по отслеживаемым источникам.",
      },
    ],
    categories: {
      ai: "AI",
      security: "Security",
      devtools: "DevTools",
      hardware: "Hardware",
    },
  },
}
