import { SvelteComponentTyped } from "svelte"
import { type Strategy } from "@floating-ui/dom"
import type { Item } from "./types"
import type { LoadingState } from "../../../state/collection/loadingState"
declare class __sveltets_Render<T extends Item> {
  props(): {
    /** The id of the element. */ id?: string | undefined
    /** The value of the Combobox input. */ value?: string | undefined
    /** The name of the Combobox input. */ name?: string | undefined
    /** The current loading state of the list. */ loadingState?:
      | LoadingState
      | undefined
    /** The Combobox label. */ label?: string | undefined
    /** The Combobox input placeholder. */ placeholder?: string | undefined
    /** The Combobox floating strategy. Change this to 'fixed' when the combobox resides on a fixed container. */ strategy?:
      | Strategy
      | undefined
    /** The list of Combobox items. */ items?: T[] | undefined
    /** Whether the Combobox is disabled. */ disabled?: boolean | undefined
    /** Get the label. */ getLabel?: ((item: Item) => string) | undefined
  }
  events(): {
    blur: FocusEvent
    focus: FocusEvent
    input: Event
    keydown: KeyboardEvent
    keyup: KeyboardEvent
  }
  slots(): {
    item: {
      item: T
    }
  }
}
export declare type ComboboxProps<T extends Item> = ReturnType<
  __sveltets_Render<T>["props"]
>
export declare type ComboboxEvents<T extends Item> = ReturnType<
  __sveltets_Render<T>["events"]
>
export declare type ComboboxSlots<T extends Item> = ReturnType<
  __sveltets_Render<T>["slots"]
>
export default class Combobox<T extends Item> extends SvelteComponentTyped<
  ComboboxProps<T>,
  ComboboxEvents<T>,
  ComboboxSlots<T>
> {}
export {}
