import { noop } from "svelte/internal"
import {
  autoUpdate,
  computePosition,
  type ComputePositionConfig,
  type ReferenceElement,
} from "@floating-ui/dom"

import type { Action } from "svelte/action"

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

  /** Creates a reference to the anchor element. */
  const createAnchor: Action<ReferenceElement> = (node) => {
    anchor = node

    return {
      destroy: cleanup,
    }
  }

  /** Creates a reference to the target element. */
  const createTarget: Action = (node) => {
    target = node
    cleanup =
      (anchor && target && autoUpdate(anchor, target, () => void update())) ||
      noop

    return {
      destroy: cleanup,
    }
  }

  return [createAnchor, createTarget] as const
}
