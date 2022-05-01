import { noop } from "svelte/internal"
import {
  autoUpdate,
  computePosition,
  type ComputePositionConfig,
  type ReferenceElement,
} from "@floating-ui/dom"

export const createFloating = (
  options: Partial<ComputePositionConfig> = {},
) => {
  let anchor: ReferenceElement | null = null
  let target: HTMLElement | null = null
  let cleanup: () => void = noop

  // update the position of the target element
  const update = async () => {
    if (anchor && target) {
      const {
        x = 0,
        y = 0,
        strategy = "absolute",
      } = await computePosition(anchor, target, options)

      Object.assign(target.style, {
        left: `${x}px`,
        top: `${y}px`,
        position: strategy,
      })
    }
  }

  // create reference to the anchor element
  const createAnchor = (node: ReferenceElement) => {
    anchor = node
    return {
      destroy: cleanup,
    }
  }

  // create reference to the target element
  const createTarget = (node: HTMLElement) => {
    target = node
    cleanup =
      (anchor && target && autoUpdate(anchor, target, () => void update())) ||
      noop

    return {
      destroy: cleanup,
    }
  }

  return [createAnchor, createTarget]
}
