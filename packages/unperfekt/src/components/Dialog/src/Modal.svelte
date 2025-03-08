<script lang="ts" >
  import { fade, scale } from "svelte/transition"
  import { createEventDispatcher, onDestroy } from "svelte"
  import { default as cn } from "classnames"

  import { fadeIn, fadeOut, scaleIn } from "../../../utils/transitions.js"

  import { TYPE } from "./constants.js"

  /** Space-separated list of the case-sensitive classes of the element. */
  let _class: string | undefined = undefined
  export { _class as class }

  /** Wheter the modal is open or not. */
  export let open: boolean = false

  /** The type of the modal. */
  export let type: keyof typeof TYPE = "modal"

  /** The modal HTMLElement. */
  let modal: HTMLElement

  const dispatch = createEventDispatcher()

  const close = () => dispatch("close")

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!modal) return

    if (e.key === "Escape") {
      return close()
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes: NodeListOf<HTMLElement> = modal.querySelectorAll("*")
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0)

      let index = tabbable.indexOf(document.activeElement as HTMLElement)
      if (index === -1 && e.shiftKey) index = 0

      index += tabbable.length + (e.shiftKey ? -1 : 1)
      index %= tabbable.length

      tabbable[index].focus()
      e.preventDefault()
    }
  }

  const previouslyFocused =
    typeof document !== "undefined" && (document.activeElement as HTMLElement)

  if (previouslyFocused) {
    onDestroy(() => {
      previouslyFocused.focus()
    })
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="Backdrop" in:fade={fadeIn} out:fade={fadeOut} on:click={close} />
<div class={cn("Modal-container", { "is-open": open })}>
  <div
    class={cn("Modal", TYPE[type], _class)}
    bind:this={modal}
    in:scale={scaleIn}
    out:fade={fadeOut}
  >
    <slot />
  </div>
</div>
