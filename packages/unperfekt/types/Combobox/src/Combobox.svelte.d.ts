import { SvelteComponentTyped } from "svelte"
import { type Strategy } from "@floating-ui/dom"
import type { Item } from "./types"
import type { LoadingState } from "../../state/collection/loadingState"
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
    /** The Combobox floating strategy. Change this to 'fixed' when used on a fixed container. */ strategy?:
      | Strategy
      | undefined
    /** The list of Combobox items. */ items?: T[] | undefined
    /** Whether the Combobox is disabled. */ disabled?: boolean | undefined
    onInput?:
      | ((
          e: Event & {
            currentTarget: EventTarget & HTMLInputElement
          },
        ) => void)
      | undefined
    onFocus?:
      | ((
          _e: FocusEvent & {
            currentTarget: EventTarget & HTMLInputElement
          },
        ) => void)
      | undefined
    onBlur?:
      | ((
          _e: FocusEvent & {
            currentTarget: EventTarget & HTMLInputElement
          },
        ) => void)
      | undefined
    onKeyDown?:
      | ((
          e: KeyboardEvent & {
            currentTarget: EventTarget & HTMLInputElement
          },
        ) => void)
      | undefined
    onKeyUp?:
      | ((
          e: KeyboardEvent & {
            currentTarget: EventTarget & HTMLInputElement
          },
        ) => void)
      | undefined
    getLabel?: ((item: Item) => string) | undefined
  }
  events(): {
    input: CustomEvent<string>
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
