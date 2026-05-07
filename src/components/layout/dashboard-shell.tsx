"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import { X } from "lucide-react"

import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/i18n/i18n-provider"

type DashboardShellProps = {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const { dictionary } = useI18n()

  useEffect(() => {
    if (!isMobileNavOpen) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileNavOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobileNavOpen])

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="fixed inset-y-0 left-0 z-40 hidden w-72 lg:block">
        <Sidebar />
      </div>

      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/15 animate-in fade-in-0 duration-200"
            aria-label={dictionary.common.closeNavigation}
            onClick={() => setIsMobileNavOpen(false)}
          />
          <aside
            className="relative h-full w-72 bg-sidebar shadow-lg animate-in slide-in-from-left-8 duration-200 ease-out"
            aria-label="Mobile navigation"
          >
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute top-4 right-4 z-10 transition-transform hover:scale-105"
              aria-label={dictionary.common.closeNavigation}
              onClick={() => setIsMobileNavOpen(false)}
            >
              <X className="size-4" aria-hidden="true" />
            </Button>
            <h2 className="sr-only">Navigation</h2>
            <Sidebar onNavigate={() => setIsMobileNavOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex min-h-screen flex-col lg:pl-72">
        <Header onOpenMobileNav={() => setIsMobileNavOpen(true)} />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}
