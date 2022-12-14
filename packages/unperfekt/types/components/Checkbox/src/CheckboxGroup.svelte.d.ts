import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    /** Space-separated list of the case-sensitive classes of the element. */ class?:
      | string
      | undefined
    /** The id of the element. */ id?: string | undefined
    /** The label of the checkbox. */ label?: string | undefined
    group?: any[] | undefined
    /** Chekbox objects in the collection. */ items?: any[] | undefined
  }
  slots: {
    default: {}
  }
  events: {}
}
export type CheckboxGroupProps = typeof __propDef.props
export type CheckboxGroupEvents = typeof __propDef.events
export type CheckboxGroupSlots = typeof __propDef.slots
export default class CheckboxGroup extends SvelteComponentTyped<
  CheckboxGroupProps,
  CheckboxGroupEvents,
  CheckboxGroupSlots
> {}
export {}
