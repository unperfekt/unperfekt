<script lang="ts" strictEvents>
  import { scale } from "svelte/transition"
  import { sineIn, sineOut } from "svelte/easing"
  import { offset, type Strategy } from "@floating-ui/dom"

  import { noOp } from "../../../utils/noOp"
  import { createFloating } from "../../../actions/floating"

  import type { Item } from "./types"
  import type { LoadingState } from "../../../state/collection/loadingState"

  // --- Public State ----
  type T = $$Generic<Item>

  /** The id of the element. */
  export let id: string = Math.random().toString(36).substring(2, 15)

  /** The value of the Combobox input. */
  export let value: string = ""

  /** The name of the Combobox input. */
  export let name: string = ""

  /** The current loading state of the list. */
  export let loadingState: LoadingState | undefined = undefined

  /** The Combobox label. */
  export let label: string = ""

  /** The Combobox input placeholder. */
  export let placeholder: string = ""

  /** The Combobox floating strategy. Change this to 'fixed' when the combobox resides on a fixed container. */
  export let strategy: Strategy = "absolute"

  /** The search function. */
  // export let searchFn: SearchFn | undefined = undefined

  /** The list of Combobox items. */
  export let items: T[] = []

  /** Whether the Combobox is disabled. */
  export let disabled: boolean | undefined = undefined

  // --- Internal State ----

  // HTML elements
  let inputNode: HTMLInputElement
  let listboxNode: HTMLUListElement

  // Listbox transition in/out animation
  const scaleIn = {
    start: 0.95,
    duration: 100,
    easing: sineIn,
  }

  const scaleOut = {
    start: 0.95,
    duration: 75,
    easing: sineOut,
  }

  // Behaviour

  /** Minimum amount of characters needed to trigger a search. */
  // const minCharactersToSearch = 2

  /** Maximum amount of items to show in the list. */
  // const maxItemsToShow = 10

  /** Allow selection of multiple values. */
  // export let multiple = false
  // UI
  let show = false
  let highlightIndex = -1

  const open = () => void (show = true)
  const close = () => void (show = false)

  // Events

  // const dispatch = createEventDispatcher<{ input: InputEvent }>()
  // const dispatch = createEventDispatcher<{ input: string }>()

  type PointerEvent = MouseEvent & {
    currentTarget: EventTarget & Window
  }

  // type InputEvent = Event & {
  //   currentTarget: EventTarget & HTMLInputElement
  // }

  type KeyEvent = KeyboardEvent & {
    currentTarget: EventTarget & HTMLInputElement
  }

  // type BlurEvent = FocusEvent & {
  //   currentTarget: EventTarget & HTMLInputElement
  // }

  const stopEvent = <T extends Event>(e: T): T => {
    e.preventDefault()
    e.stopPropagation()
    return e
  }

  let onKeyDown = (e: KeyEvent) => {
    const fnmap = {
      Tab: close,
      ArrowDown: () => {
        // prevent selection shift
        stopEvent(e)
        // when alt key is pressed, only open and do not shift index
        if (e.altKey) {
          open()
        } else {
          onArrowDown()
        }
      },
      ArrowUp: () => {
        // prevent selection shift
        stopEvent(e)
        onArrowUp()
      },
      Escape: close,
      Backspace: noOp,
    }
    const fn = fnmap[e.key as keyof typeof fnmap]

    if (fn) {
      fn()
    }
  }

  let onKeyUp = (e: KeyEvent) => {
    if (e.key === "Enter") {
      onEnter(e)
    }
  }

  /** Get the label. */
  export let getLabel = (item: Item): string => item.name

  const getItem = (index: number): Item | undefined =>
    items[index] as Item | undefined

  const selectItem = (index: number = highlightIndex) => {
    const item = getItem(index)

    if (item) {
      value = getLabel(item)
    }

    // reset highlight index
    highlightIndex = -1
    // await tick()
    inputNode.focus()
    // await tick()
    // inputNode.select()
    // await tick()
    // inputNode.setSelectionRange(value.length, value.length)

    close()
  }

  const onEnter = (e: KeyEvent) => {
    e.preventDefault()
    void selectItem()
  }

  const onArrowDown = () => {
    // open the listbox incase it is closed
    open()
    // move the highlight to the next item
    if (highlightIndex < items.length - 1) {
      highlightIndex++
    }
  }

  const onArrowUp = () => {
    // open the listbox incase it is closed
    open()
    // move the highlight to the prev item
    if (highlightIndex > 0) {
      highlightIndex--
    }
  }

  const onOutsideClick = (e: PointerEvent) => {
    // does the click contain the input element?
    const target = e.composedPath().some((path) => path === inputNode)

    if (!target) {
      close()
    }
  }

  const highlight = () => {
    const el = listboxNode?.querySelector(".selected")

    if (el) {
      el.scrollIntoView({
        block: "center",
        inline: "center",
      })
    }
  }

  // create floating listbox
  const [anchorRef, targetRef] = createFloating({
    middleware: [offset(8)],
    strategy,
  })

  $: isLoading = loadingState === "loading"

  $: highlightIndex, listboxNode, highlight()
</script>

<svelte:window on:click={onOutsideClick} />

<label for="{id}-input" id="{id}-label" class="Combobox-label">
  {label}
</label>
<div class="Combobox">
  <div
    aria-expanded={show}
    aria-haspopup="listbox"
    aria-owns="{id}-listbox"
    class="Combobox-field"
    id="{id}-combobox"
    role="combobox"
    use:anchorRef
  >
    <input
      bind:value
      bind:this={inputNode}
      {disabled}
      {placeholder}
      aria-autocomplete="list"
      aria-controls="{id}-listbox"
      aria-labelledby="{id}-label"
      autocomplete="off"
      class="Combobox-input"
      id="{id}-input"
      name={name || `${id}-input`}
      type="text"
      on:blur
      on:focus
      on:input
      on:keydown
      on:keydown={onKeyDown}
      on:keyup
      on:keyup={onKeyUp}
    />
    <button
      aria-controls="{id}-listbox"
      aria-expanded={show}
      aria-label="Show suggestions"
      class="text-gray-500"
      id="{id}-button"
      tabindex="-1"
      type="button"
    >
      {#if isLoading}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      {/if}
    </button>
  </div>
  {#if show}
    <ul
      in:scale={scaleIn}
      out:scale={scaleOut}
      bind:this={listboxNode}
      aria-labelledby="{id}-label"
      class="Combobox-listbox"
      id="{id}-listbox"
      role="listbox"
      use:targetRef
    >
      {#each items as item, i}
        <li
          class:selected={i === highlightIndex}
          class="Combobox-option"
          id="{item.id}-option"
          role="option"
          on:click={() => selectItem(i)}
        >
          <slot name="item" {item}>
            <span>{item.name}</span>
          </slot>
        </li>
      {/each}
    </ul>
  {/if}
</div>
