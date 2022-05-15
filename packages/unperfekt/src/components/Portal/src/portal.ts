import { tick } from "svelte"

import type { Action } from "svelte/action"

/**
 * Creates a portal to another node on the document.
 *
 * @param {HTMLElement} node The anchor to create the portal on.
 * @param {HTMLElement | string} target The target node to append the portal to.
 */
export const portal: Action<HTMLElement, HTMLElement | string> = (
  node: HTMLElement,
  target: HTMLElement | string = "body",
) => {
  let el: HTMLElement | null = null

  const update = async (targ: string | HTMLElement) => {
    if (typeof targ === "string") {
      el = document.querySelector(targ)
      if (el === null) {
        await tick()
        el = document.querySelector(targ)
      }
      if (el === null) {
        throw new Error(`No element found matching css selector: "${targ}"`)
      }
    } else if (targ instanceof HTMLElement) {
      el = targ
    } else {
      throw new TypeError(
        `Unknown portal target type: ${
          targ === null ? "null" : typeof targ
        }. Allowed types: string (CSS selector) or HTMLElement.`,
      )
    }
    el.appendChild(node)
    node.hidden = false
  }

  const destroy = () => {
    if (node.parentNode) {
      node.parentNode.removeChild(node)
    }
  }

  void update(target)

  return {
    // update,
    destroy,
  }
}
