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
import { useI18n } from "@/i18n/i18n-provider"

type NavKey =
  | "overview"
  | "live"
  | "signals"
  | "analytics"
  | "alerts"
  | "search"
  | "settings"

const navItems: Array<{
  key: NavKey
  href: string
  icon: typeof LayoutDashboard
}> = [
  { key: "overview", href: "/", icon: LayoutDashboard },
  { key: "live", href: "/live", icon: Radio },
  { key: "signals", href: "/signals", icon: Activity },
  { key: "analytics", href: "/analytics", icon: BarChart3 },
  { key: "alerts", href: "/alerts", icon: Bell },
  { key: "search", href: "/search", icon: Search },
  { key: "settings", href: "/settings", icon: Settings },
]

type SidebarProps = {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname()
  const { dictionary } = useI18n()

  return (
    <aside className="flex h-full flex-col border-r bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center gap-3 border-b px-5">
        <div className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Cpu className="size-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">TechPulse</p>
          <p className="truncate text-xs text-muted-foreground">
            {dictionary.sidebar.subtitle}
          </p>
        </div>
      </div>

      <nav className="flex flex-1 px-3 py-4" aria-label="Main navigation">
        <ul className="flex w-full flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            const title = dictionary.sidebar.nav[item.key]

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground transition-[color,background-color,transform] duration-150 hover:translate-x-0.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive &&
                      "bg-sidebar-accent text-sidebar-accent-foreground shadow-xs"
                  )}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  <span>{title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
