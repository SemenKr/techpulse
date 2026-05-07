"use client"

import { useSyncExternalStore } from "react"

const subscribeToClientReady = (callback: () => void) => {
  queueMicrotask(callback)

  return () => {}
}

const getClientSnapshot = () => true
const getServerSnapshot = () => false

export function useClientReady() {
  return useSyncExternalStore(
    subscribeToClientReady,
    getClientSnapshot,
    getServerSnapshot
  )
}
