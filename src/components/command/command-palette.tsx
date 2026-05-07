"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  filterCommandItems,
  getDashboardCommandItems,
  type CommandSearchItem,
} from "@/features/dashboard/search"
import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/i18n-provider"

type CommandPaletteProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { dictionary } = useI18n()
  const command = dictionary.command
  const dashboard = dictionary.dashboard
  const items = useMemo(
    () =>
      getDashboardCommandItems(dashboard, {
        categoriesGroup: command.groups.categories,
        feedGroup: command.groups.feed,
        sectionsGroup: command.groups.sections,
        topicsGroup: command.groups.topics,
        jumpToSection: command.jumpToSection,
        filterCategory: command.filterCategory,
      }),
    [command, dashboard]
  )
  const filteredItems = useMemo(
    () => filterCommandItems(items, query),
    [items, query]
  )

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false)
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [onOpenChange])

  useEffect(() => {
    window.setTimeout(() => inputRef.current?.focus(), 0)
  }, [])

  if (!open) {
    return null
  }

  function handleSelect(item: CommandSearchItem) {
    document.getElementById(item.targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    onOpenChange(false)
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActiveIndex((index) =>
        filteredItems.length ? (index + 1) % filteredItems.length : 0
      )
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()
      setActiveIndex((index) =>
        filteredItems.length
          ? (index - 1 + filteredItems.length) % filteredItems.length
          : 0
      )
    }

    if (event.key === "Enter" && filteredItems[activeIndex]) {
      event.preventDefault()
      handleSelect(filteredItems[activeIndex])
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20 sm:pt-24">
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in-0 duration-150"
        aria-label={command.close}
        onClick={() => onOpenChange(false)}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-palette-title"
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95 duration-150"
      >
        <header className="flex items-center gap-3 border-b px-4 py-3">
          <Search className="size-4 text-muted-foreground" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <h2 id="command-palette-title" className="sr-only">
              {command.title}
            </h2>
            <Input
              ref={inputRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setActiveIndex(0)
              }}
              onKeyDown={handleInputKeyDown}
              placeholder={command.placeholder}
              aria-label={command.searchLabel}
              aria-activedescendant={
                filteredItems[activeIndex]
                  ? `command-result-${filteredItems[activeIndex].id}`
                  : undefined
              }
              className="h-9 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
            />
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={command.close}
            onClick={() => onOpenChange(false)}
          >
            <X className="size-4" aria-hidden="true" />
          </Button>
        </header>

        <div className="max-h-[min(28rem,calc(100vh-10rem))] overflow-y-auto p-2">
          {filteredItems.length ? (
            <ul className="space-y-1" role="listbox" aria-label={command.results}>
              {filteredItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    id={`command-result-${item.id}`}
                    type="button"
                    role="option"
                    aria-selected={activeIndex === index}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left transition-[background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      activeIndex === index
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => handleSelect(item)}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium">
                        {item.title}
                      </span>
                      <span className="block truncate text-xs">
                        {item.description}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-md border px-2 py-0.5 text-xs">
                      {item.group}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-8 text-center text-sm text-muted-foreground">
              {command.empty}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
