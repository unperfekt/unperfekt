<script lang="ts">
  import { fade, scale } from "svelte/transition"
  import { createEventDispatcher } from "svelte"
  import { default as cn } from "classnames"
  import { offset, type Placement } from "@floating-ui/dom"

  import { fadeOut, scaleIn } from "../../../utils/transitions.js"
  import { composedPathContains } from "../../../utils/composedPathContains.js"
  import { createFloating } from "../../../actions/floating.js"

  /** Space-separated list of the case-sensitive classes of the element. */
  let _class: string | undefined = undefined
  export { _class as class }

  /** Wheter the popover is open or not. */
  export let open = false

  /** Placement of the popover. */
  export let placement: Placement = "bottom-start"

  /** The type of the popover. */
  // export let type: keyof typeof TYPE = "popover"

  /** The popover HTMLElement. */
  let popover: HTMLElement

  const dispatch = createEventDispatcher()

  const close = () => dispatch("close")

  // create floating popover
  const [anchorRef, targetRef] = createFloating({
    middleware: [offset(8)],
    strategy: "absolute",
    placement,
  })

  const onOutsideClick = (e: Event) => {
    if (!open || !popover) return
    if (!composedPathContains(e, popover)) {
      close()
    }
  }
</script>

<svelte:window on:click={onOutsideClick} />

<div
  class={cn("Popover-container", { "is-open": open })}
  bind:this={popover}
  use:anchorRef
>
  <slot />
  {#if open}
    <div
      class={cn("Popover", _class)}
      in:scale={scaleIn}
      out:fade={fadeOut}
      use:targetRef
    >
      <slot name="content" />
    </div>
  {/if}
</div>
