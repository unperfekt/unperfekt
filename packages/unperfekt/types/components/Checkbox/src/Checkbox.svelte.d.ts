import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    [x: string]: any
    class?: string | undefined
    id?: string | undefined
    label?: string | undefined
    value?: string | undefined
    description?: string | undefined
    checked?: boolean | undefined
    indeterminate?: boolean | undefined
    disabled?: boolean | undefined
    name?: string | undefined
  }
  events: {
    input: Event
  }
  slots: {}
}
export type CheckboxProps = typeof __propDef.props
export type CheckboxEvents = typeof __propDef.events
export type CheckboxSlots = typeof __propDef.slots
export default class Checkbox extends SvelteComponentTyped<
  CheckboxProps,
  CheckboxEvents,
  CheckboxSlots
> {}
export {}
