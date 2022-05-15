<script lang="ts" strictEvents>
  import { fade, fly } from "svelte/transition"
  import { expoInOut } from "svelte/easing"
  import { createEventDispatcher, onDestroy } from "svelte"
  import cn from "classnames"

  import { TYPE } from "./constants"

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

  const flyIn = { y: 40, opacity: 0.001, easing: expoInOut }
  // const flyOut = { y: 40, opacity: 0.001, easing: expoInOut }

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

  let classes = cn("Modal-wrapper", { "is-open": open })

  const previouslyFocused =
    typeof document !== "undefined" && (document.activeElement as HTMLElement)

  if (previouslyFocused) {
    onDestroy(() => {
      previouslyFocused.focus()
    })
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="Backdrop" transition:fade on:click={close} />
<div class={classes}>
  <div
    class={cn("Modal", TYPE[type], _class)}
    bind:this={modal}
    in:fly={flyIn}
    out:fade
  >
    <slot />
  </div>
</div>
