import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    [x: string]: any
    class?: string | undefined
    disabled?: boolean | undefined
  }
  events: {}
  slots: {
    default: {}
  }
}
export type ButtonGroupProps = typeof __propDef.props
export type ButtonGroupEvents = typeof __propDef.events
export type ButtonGroupSlots = typeof __propDef.slots
export default class ButtonGroup extends SvelteComponentTyped<
  ButtonGroupProps,
  ButtonGroupEvents,
  ButtonGroupSlots
> {}
export {}
