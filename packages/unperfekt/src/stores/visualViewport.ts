import { readable } from "svelte/store"

import { addEvent } from "../utils/addEvent.js"

const getDimensions = () => {
  const width = window.visualViewport?.width || window.innerWidth
  const height = window.visualViewport?.height || window.innerHeight

  return { width, height }
}

export const createVisualViewport = () => {
  if (typeof window === "undefined") return

  const { subscribe } = readable(getDimensions(), (set) => {
    const onResize = () => set(getDimensions())

    return addEvent(window.visualViewport, "resize", onResize)
  })

  return {
    subscribe,
  }
}

export const visualViewport = createVisualViewport()
