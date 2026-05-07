"use client"

import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

import { I18nProvider } from "@/i18n/i18n-provider"

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  )
}
