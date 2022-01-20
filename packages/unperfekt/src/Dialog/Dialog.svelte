<script lang="ts">
  import { createEventDispatcher, onDestroy } from "svelte"
  
  import Overlay from "./Overlay.svelte"

  /** Wheter the dialog is open or not */
  export let isOpen = false

  /** The dialog element */
  let dialog: HTMLElement

  const dispatch = createEventDispatcher()

  const close = () => dispatch("close")

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!dialog) return

    if (e.key === "Escape") {
      return close()
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes: NodeListOf<HTMLElement> = dialog.querySelectorAll("*")
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

<Overlay {isOpen}>
  <div class="Backdrop" on:click={close} />
  <div class="Modal-wrapper" class:is-open={isOpen}>
    <div class="Modal">
      <div class="Dialog" role="dialog" aria-modal="true" bind:this={dialog}>
        <slot name="header" />
        <slot />
        <!-- svelte-ignore a11y-autofocus -->
        <button autofocus on:click={close}>close modal</button>
      </div>
    </div>
  </div>
</Overlay>
