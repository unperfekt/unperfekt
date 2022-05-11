<script lang="ts" strictEvents>
  import { derived } from "svelte/store"
  import { getContext } from "svelte"

  import { contextKey } from "./context"

  import type { AccordionContext } from "./context"
  import type { Key } from "../../../state/collection/selection"

  /** Unique identifier for this row. */
  export let key: Key

  /** Accordion title for this row. */
  export let title: string

  const ctx = getContext<AccordionContext>(contextKey)

  const selected = derived(ctx, (n) => n.has(key))

  const onSelect = () => ctx.toggleSelect(key)
</script>

<div class="Accordion-item" class:is-open={$selected} on:click>
  <h3 class="Accordion-itemHeading">
    <button
      aria-expanded={$selected}
      class="Accordion-itemHeader"
      on:click={onSelect}
    >
      <slot name="title">{title}</slot>
    </button>
  </h3>
  <div class="Accordion-panel">
    <slot />
  </div>
</div>
