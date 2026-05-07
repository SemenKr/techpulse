"use client"

import { Bell, Languages, Menu, Monitor, Moon, Search, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/i18n/i18n-provider"

type HeaderProps = {
  onOpenMobileNav: () => void
  onOpenCommandPalette: () => void
}

export function Header({
  onOpenMobileNav,
  onOpenCommandPalette,
}: HeaderProps) {
  const { resolvedTheme, setTheme, theme } = useTheme()
  const { dictionary, locale, setLocale } = useI18n()
  const isMounted = useSyncExternalStore(
    subscribeToMount,
    getMountedSnapshot,
    getServerMountedSnapshot
  )
  const isDarkTheme = resolvedTheme === "dark"
  const nextTheme = isMounted ? getNextTheme(theme) : "system"
  const themeLabel = isMounted
    ? getThemeLabel(nextTheme, dictionary.common)
    : dictionary.common.switchToSystem

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-label={dictionary.common.openNavigation}
        onClick={onOpenMobileNav}
      >
        <Menu className="size-5" aria-hidden="true" />
      </Button>

      <button
        type="button"
        className="relative hidden h-10 w-full max-w-md min-w-0 items-center rounded-md border bg-background px-3 text-left text-sm text-muted-foreground shadow-xs transition-[background-color,border-color] hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:flex"
        aria-label={dictionary.command.open}
        onClick={onOpenCommandPalette}
      >
        <Search
          className="mr-2 size-4 text-muted-foreground"
          aria-hidden="true"
        />
        <span className="min-w-0 flex-1 truncate">
          {dictionary.common.searchPlaceholder}
        </span>
        <kbd className="ml-3 hidden rounded border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-flex">
          {dictionary.command.shortcut}
        </kbd>
      </button>

      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          aria-label={dictionary.command.open}
          onClick={onOpenCommandPalette}
        >
          <Search className="size-5" aria-hidden="true" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          aria-label={dictionary.common.language}
          onClick={() => setLocale(locale === "en" ? "ru" : "en")}
        >
          <Languages className="size-4" aria-hidden="true" />
          <span className="text-xs uppercase">{locale}</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label={themeLabel}
          disabled={!isMounted}
          onClick={() => setTheme(nextTheme)}
        >
          {!isMounted || theme === "system" ? (
            <Monitor className="size-5" aria-hidden="true" />
          ) : isDarkTheme ? (
            <Sun className="size-5" aria-hidden="true" />
          ) : (
            <Moon className="size-5" aria-hidden="true" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label={dictionary.common.notifications}
        >
          <Bell className="size-5" aria-hidden="true" />
        </Button>
        <Avatar className="size-9">
          <AvatarFallback>TP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

function subscribeToMount(callback: () => void) {
  queueMicrotask(callback)

  return () => {}
}

function getMountedSnapshot() {
  return true
}

function getServerMountedSnapshot() {
  return false
}

function getNextTheme(theme?: string) {
  if (theme === "system") {
    return "light"
  }

  if (theme === "light") {
    return "dark"
  }

  return "system"
}

function getThemeLabel(
  theme: string,
  labels: {
    switchToSystem: string
    switchToDark: string
    switchToLight: string
  }
) {
  if (theme === "system") {
    return labels.switchToSystem
  }

  if (theme === "dark") {
    return labels.switchToDark
  }

  return labels.switchToLight
}
