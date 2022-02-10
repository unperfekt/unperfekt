<script lang="ts" strictEvents>
  import type { Item } from "./types"

  // --- Public State ----

  /** The id of the element. */
  export let id: string = Math.random().toString(36).substring(2, 15)

  /** The value of the Combobox input. */
  export let value: string = ""

  type T = $$Generic<Item>
  /** The list of Combobox items. */
  export let items: T[] = []

  /** Whether the Combobox is disabled. */
  export let disabled: boolean | undefined = undefined

  // --- Internal State ----

  // Behaviour
  const minCharactersToSearch = 1
  const maxItemsToShow = 10
  const multiple = false
  // UI
  // Events

  type InputEvent = Event & {
    currentTarget: EventTarget & HTMLInputElement
  }

  const onInput = (e: InputEvent) => {
    console.log("onInput", e.currentTarget.value)
  }
</script>

<label for="{id}-input" id="{id}-label" class="combobox-label">
  Choice 3 Fruit or Vegetable
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
      type="text"
      aria-autocomplete="both"
      aria-controls="{id}-listbox"
      aria-labelledby="{id}-label"
      id="{id}-input"
      bind:value
      {disabled}
      on:input={onInput}
    />
    <div
      class="combobox-dropdown"
      id="{id}-combobox-arrow"
      tabindex="-1"
      role="button"
      aria-label="Show vegetable options"
    >
      <img src="imgs/arrow_drop_down_grey_27x27.png" alt="" />
    </div>
  </div>
  <ul
    aria-labelledby="{id}-label"
    role="listbox"
    id="{id}-listbox"
    class="listbox"
  >
    {#each items as item}
      <li>
        <slot name="item" {item}>
          <span>{item.name}</span>
        </slot>
      </li>
    {/each}
  </ul>
</div>
