import { tick } from "svelte"

export const portal = (node: HTMLElement, target: string = "body") => {
  let el

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
