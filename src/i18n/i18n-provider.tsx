"use client"

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react"

import { defaultLocale, isLocale, type Locale } from "@/i18n/config"
import { en } from "@/i18n/dictionaries/en"
import { ru } from "@/i18n/dictionaries/ru"

const dictionaries = {
  en,
  ru,
}

type Dictionary = typeof en

type I18nContextValue = {
  locale: Locale
  dictionary: Dictionary
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)
const localeStorageKey = "techpulse-locale"
const localeChangeEvent = "techpulse-locale-change"

type I18nProviderProps = {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot
  )

  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem(localeStorageKey, nextLocale)
    window.dispatchEvent(new Event(localeChangeEvent))
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale,
    }),
    [locale, setLocale]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

function subscribeToLocale(callback: () => void) {
  window.addEventListener("storage", callback)
  window.addEventListener(localeChangeEvent, callback)

  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener(localeChangeEvent, callback)
  }
}

function getLocaleSnapshot() {
  const storedLocale = window.localStorage.getItem(localeStorageKey)

  return storedLocale && isLocale(storedLocale) ? storedLocale : defaultLocale
}

function getServerLocaleSnapshot() {
  return defaultLocale
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }

  return context
}
