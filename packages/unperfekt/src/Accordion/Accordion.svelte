<script lang="ts">
  import { setContext } from "svelte"

  import { createSelectionManager } from "../state/collection/selection"

  import { contextKey } from "./context"
  import AccordionItem from "./AccordionItem.svelte"

  import type { IAccordionItem } from "./types"
  import type { AccordionContext } from "./context"
  import type { Key } from "../state/collection/selection"

  /** Wheter to allow multiple items to be open at the same time or not. */
  export let multiple = false

  /** Item objects in the collection. */
  export let items: IAccordionItem[] = []

  /** The currently selected keys in the collection. */
  export let selectedKeys: Set<Key> = new Set<Key>()

  const selectionStore = createSelectionManager({
    multiple,
    selectedKeys,
  })

  setContext<AccordionContext>(contextKey, selectionStore)

  // eslint workaround
  // https://github.com/sveltejs/eslint-plugin-svelte3#installation-with-typescript
  let className: string
  $: className = `Accordion`
</script>

<div on:click class={className}>
  {#if items.length > 0}
    {#each items as item (item.id)}
      <AccordionItem key={item.id} title={item.title}>
        {item.description}
      </AccordionItem>
    {/each}
  {:else}
    <slot />
  {/if}
</div>
