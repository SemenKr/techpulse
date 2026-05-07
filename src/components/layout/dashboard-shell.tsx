import type { ReactNode } from "react"

import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"

type DashboardShellProps = {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="fixed inset-y-0 left-0 z-40 hidden w-72 lg:block">
        <Sidebar />
      </div>

      <div className="flex min-h-screen flex-col lg:pl-72">
        <Header />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}
