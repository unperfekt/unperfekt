<script lang="ts" strictEvents>
  import cn from "classnames"

  import Overlay from "./Overlay.svelte"
  import Modal from "./Modal.svelte"
  import { SIZE } from "./constants"

  /** Space-separated list of the case-sensitive classes of the element. */
  let _class: string | undefined = undefined
  export { _class as class }

  /** Wheter the dialog is open or not. */
  export let open: boolean = false

  /** The size of the dialog. */
  export let size: keyof typeof SIZE = "md"

  let classes = cn("Dialog", SIZE[size], _class)

  window.visualViewport.addEventListener("resize", () => {
    visualHeight = `${visualViewport.height}px`
  })

  $: visualHeight = `${visualViewport.height}px`

  $: document.documentElement.style.setProperty(
    "--visual-viewport-height",
    visualHeight,
  )

  // $: if (open) {
  //   // When the modal is shown, we want a fixed body
  //   document.body.style.position = "fixed"
  //   document.body.style.top = `-${window.scrollY}px`
  // } else {
  //   const scrollY = document.body.style.top
  //   document.body.style.position = ""
  //   document.body.style.top = ""
  //   window.scrollTo(0, parseInt(scrollY || "0") * -1)
  // }
</script>

<Overlay {open}>
  <Modal {open} on:close>
    <div class={classes} role="dialog" aria-modal="true">
      <div class="Dialog-content">
        <slot name="header" />
        <slot />
        <slot name="buttongroup" />
      </div>
    </div>
  </Modal>
</Overlay>
