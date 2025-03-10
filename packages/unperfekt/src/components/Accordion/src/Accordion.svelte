<script lang="ts">
  import { setContext } from "svelte"

  import { createSelectionManager } from "../../../state/collection/selection.js"

  import { contextKey } from "./context.js"
  import AccordionItem from "./AccordionItem.svelte"

  import type { Key } from "../../../state/collection/selection.js"
  import type { Item } from "./types.js"
  import type { AccordionContext } from "./context.js"

  interface AccordionProps {
    /** Wheter to allow multiple items to be open at the same time or not. */
    multiple?: boolean
    /** The items to display in the accordion. */
    items?: Item[]
    /** The keys of the items that are currently selected. */
    selectedKeys?: Set<Key>
    /** The children to render if no items are provided. */
    children: () => any
  }

  const {
    multiple = false,
    items = [],
    selectedKeys = new Set(),
    children,
  }: AccordionProps = $props()

  const selectionStore = createSelectionManager({
    multiple,
    selectedKeys,
  })

  setContext<AccordionContext>(contextKey, selectionStore)
</script>

<div on:click on:keydown class="Accordion">
  {#each items as item (item.id)}
    <AccordionItem key={item.id} title={item.title}>
      {item.description}
    </AccordionItem>
  {:else}
    {@render children()}
  {/each}
</div>
