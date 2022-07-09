<script lang="ts" strictEvents>
  /**
   * @name Dialog
   */

  import { default as cn } from "classnames"

  import { visualViewport } from "../../../stores/visualViewport.js"

  import Overlay from "./Overlay.svelte"
  import Modal from "./Modal.svelte"
  import { SIZE } from "./constants.js"

  import type { TYPE } from "./constants.js"

  /** Space-separated list of the case-sensitive classes of the element. */
  let _class: string | undefined = undefined
  export { _class as class }

  /** Wheter the dialog is open or not. */
  export let open: boolean = false

  /** The size of the dialog. */
  export let size: keyof typeof SIZE = "md"

  let modaltype = {
    sm: "modal",
    md: "modal",
    lg: "modal",
    fullscreen: "fullscreen",
    fullscreenTakeover: "fullscreenTakeover",
  }[size] as keyof typeof TYPE

  const supportsHas =
    typeof window !== "undefined" && CSS.supports("selector(:has(a) b)")

  $: if (!supportsHas && typeof window !== "undefined") {
    // TODO: this should only run once within a global "provider" rather
    // than for each component instance.
    document.documentElement.style.setProperty(
      "--visual-viewport-height",
      `${$visualViewport.height}px`,
    )

    if (open) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }
</script>

<Overlay open={open}>
  <Modal open={open} type={modaltype} on:close>
    <div
      class={cn("Dialog", SIZE[size], _class)}
      role="dialog"
      aria-modal="true"
    >
      <div class="Dialog-content">
        <slot name="header" />
        <div class="overflow-y-auto overscroll-y-contain">
          <slot />
        </div>
        <slot name="buttongroup" />
      </div>
    </div>
  </Modal>
</Overlay>
