"use client"

import { Bell, Languages, Menu, Monitor, Moon, Search, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useI18n } from "@/i18n/i18n-provider"

type HeaderProps = {
  onOpenMobileNav: () => void
}

export function Header({ onOpenMobileNav }: HeaderProps) {
  const { resolvedTheme, setTheme, theme } = useTheme()
  const { dictionary, locale, setLocale } = useI18n()
  const isMounted = useSyncExternalStore(
    subscribeToMount,
    getMountedSnapshot,
    getServerMountedSnapshot
  )
  const isDarkTheme = resolvedTheme === "dark"
  const nextTheme = getNextTheme(theme)
  const themeLabel = getThemeLabel(nextTheme, dictionary.common)

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

      <form
        className="relative w-full max-w-md"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          type="search"
          placeholder={dictionary.common.searchPlaceholder}
          className="h-10 pl-9"
        />
      </form>

      <div className="ml-auto flex items-center gap-2">
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
