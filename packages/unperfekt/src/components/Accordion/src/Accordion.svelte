<script lang="ts" strictEvents>
  import { setContext } from "svelte"

  import { createSelectionManager } from "../../../state/collection/selection.js"

  import { contextKey } from "./context.js"
  import AccordionItem from "./AccordionItem.svelte"

  import type { Item } from "./types.js"
  import type { AccordionContext } from "./context.js"
  import type { Key } from "../../../state/collection/selection.js"

  /** Wheter to allow multiple items to be open at the same time or not. */
  export let multiple: boolean = false

  /** Item objects in the collection. */
  export let items: Item[] = []

  /** The currently selected keys in the collection. */
  export let selectedKeys: Set<Key> = new Set<Key>()

  const selectionStore = createSelectionManager({
    multiple,
    selectedKeys,
  })

  setContext<AccordionContext>(contextKey, selectionStore)
</script>

<div on:click class="Accordion">
  {#each items as item (item.id)}
    <AccordionItem key={item.id} title={item.title}>
      {item.description}
    </AccordionItem>
  {:else}
    <slot />
  {/each}
</div>
