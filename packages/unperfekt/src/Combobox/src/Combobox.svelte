<script lang="ts" strictEvents>
  import { createEventDispatcher } from "svelte"

  import type { Item } from "./types"

  // --- Public State ----
  type T = $$Generic<Item>

  // interface SearchFn {
  //   // (value: string): T[]
  //   (value: string): Promise<T[]>
  //   // (value: string): AsyncGenerator<T[], void, void>
  // }

  /** The id of the element. */
  export let id: string = Math.random().toString(36).substring(2, 15)

  /** The value of the Combobox input. */
  export let value: string = ""

  /** The Combobox label. */
  export let label: string = ""

  /** The search function. */
  // export let searchFn: SearchFn | undefined = undefined

  /** The list of Combobox items. */
  export let items: T[] = []

  /** Whether the Combobox is disabled. */
  export let disabled: boolean | undefined = undefined

  // --- Internal State ----

  // Behaviour

  /** Minimum amount of characters needed to trigger a search */
  // const minCharactersToSearch = 2

  /** Maximum amount of items to show in the list. */
  // const maxItemsToShow = 10

  /** Allow selection of multiple values. */
  // export let multiple = false
  // UI
  let show = false
  // Events

  type InputEvent = Event & {
    currentTarget: EventTarget & HTMLInputElement
  }

  // const dispatch = createEventDispatcher<{ input: InputEvent }>()
  const dispatch = createEventDispatcher<{ input: string }>()

  export let onInput = (e: InputEvent) => {
    console.log("onInput", e.currentTarget.value)
    dispatch("input", e.currentTarget.value)
  }

  // const search = async (val: string) => {
  //   if (val.length < minCharactersToSearch) {
  //     return
  //   }

  //   if (searchFn) {
  //     const result = await searchFn(val)

  //     items = result
  //     show = result.length > 0
  //   } else {
  //     console.warn("No search function provided")
  //     show = false
  //   }
  // }

  // $: void search(value)
</script>

<label for="{id}-input" id="{id}-label" class="combobox-label">
  {label}
</label>
<div class="combobox-wrapper">
  <div
    role="combobox"
    aria-expanded="false"
    aria-owns="{id}-listbox"
    aria-haspopup="listbox"
    id="{id}-combobox"
  >
    <input
      class="text-md border border-solid border-gray-400 px-2 py-3 font-sans"
      {disabled}
      type="text"
      autocomplete="off"
      aria-autocomplete="both"
      aria-controls="{id}-listbox"
      aria-labelledby="{id}-label"
      id="{id}-input"
      bind:value
      on:input={onInput}
    />
    <!-- <div
      class="combobox-dropdown"
      id="{id}-combobox-arrow"
      tabindex="-1"
      role="button"
      aria-label="Show vegetable options"
    >
      <img src="imgs/arrow_drop_down_grey_27x27.png" alt="" />
    </div> -->
  </div>
  <ul
    aria-labelledby="{id}-label"
    role="listbox"
    id="{id}-listbox"
    class="listbox{show ? '' : ' hidden'}"
  >
    {#each items as item}
      <li id="{item.id}-option" role="option">
        <slot name="item" {item}>
          <span>{item.name}</span>
        </slot>
      </li>
    {/each}
  </ul>
</div>
