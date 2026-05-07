"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Activity,
  BarChart3,
  Bell,
  Cpu,
  LayoutDashboard,
  Radio,
  Search,
  Settings,
} from "lucide-react"

import { cn } from "@/lib/utils"

const navItems = [
  { title: "Overview", href: "/", icon: LayoutDashboard },
  { title: "Live Feed", href: "/live", icon: Radio },
  { title: "Signals", href: "/signals", icon: Activity },
  { title: "Analytics", href: "/analytics", icon: BarChart3 },
  { title: "Alerts", href: "/alerts", icon: Bell },
  { title: "Search", href: "/search", icon: Search },
  { title: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-full flex-col border-r bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center gap-3 border-b px-5">
        <div className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Cpu className="size-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">TechPulse</p>
          <p className="truncate text-xs text-muted-foreground">
            Intelligence hub
          </p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-4" aria-label="Main">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive &&
                  "bg-sidebar-accent text-sidebar-accent-foreground shadow-xs"
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
