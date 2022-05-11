<script lang="ts" strictEvents>
  import { fade, fly } from "svelte/transition"
  import { expoInOut } from "svelte/easing"
  import { createEventDispatcher, onDestroy } from "svelte"

  /** Wheter the modal is open or not. */
  export let isOpen = false

  /** The modal element. */
  let modal: HTMLElement

  const dispatch = createEventDispatcher()

  const close = () => dispatch("close")

  const flyIn = { y: 40, opacity: 0.001, easing: expoInOut }
  const flyOut = { y: 40, opacity: 0.001, easing: expoInOut }

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

<div
  class="Backdrop"
  transition:fade={{ easing: expoInOut }}
  on:click={close}
/>
<div class="Modal-wrapper" class:is-open={isOpen}>
  <div class="Modal" bind:this={modal} in:fly={flyIn} out:fly={flyOut}>
    <slot />
  </div>
</div>
