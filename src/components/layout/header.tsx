"use client"

import { useState } from "react"
import { Bell, Menu, Search, X } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/layout/sidebar"

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-label="Open navigation"
        aria-expanded={isMobileNavOpen}
        onClick={() => setIsMobileNavOpen(true)}
      >
        <Menu className="size-5" aria-hidden="true" />
      </Button>

      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/10"
            aria-label="Close navigation"
            onClick={() => setIsMobileNavOpen(false)}
          />
          <div className="relative h-full w-72 bg-sidebar shadow-lg">
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute top-4 right-4 z-10"
              aria-label="Close navigation"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <X className="size-4" aria-hidden="true" />
            </Button>
            <h2 className="sr-only">Navigation</h2>
            <Sidebar onNavigate={() => setIsMobileNavOpen(false)} />
          </div>
        </div>
      )}

      <div className="relative w-full max-w-md">
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          type="search"
          placeholder="Search signals, sources, or topics"
          className="h-10 pl-9"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="size-5" aria-hidden="true" />
        </Button>
        <Avatar className="size-9">
          <AvatarFallback>TP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
