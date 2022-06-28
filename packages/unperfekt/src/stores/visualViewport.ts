import { readable } from "svelte/store"

import { addEvent } from "../utils/addEvent"

const getDimensions = () => {
  const width = window.visualViewport?.width || window.innerWidth
  const height = window.visualViewport?.height || window.innerHeight

  return { width, height }
}

export const createVisualViewport = () => {
  const { subscribe } = readable(getDimensions(), (set) => {
    const onResize = () => set(getDimensions())

    return addEvent(window.visualViewport, "resize", onResize)
  })

  return {
    subscribe,
  }
}

export const visualViewport = createVisualViewport()
