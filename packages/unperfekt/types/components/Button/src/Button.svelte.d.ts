import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    [x: string]: any
    class?: string | undefined
    variant?:
      | "primary"
      | "outline"
      | "dark"
      | "danger"
      | "on-danger"
      | undefined
    size?: "sm" | "md" | "lg" | undefined
    disabled?: boolean | undefined
  }
  events: {
    click: MouseEvent
    mouseenter: MouseEvent
    mouseleave: MouseEvent
  }
  slots: {
    icon: {}
    default: {}
  }
}
export type ButtonProps = typeof __propDef.props
export type ButtonEvents = typeof __propDef.events
export type ButtonSlots = typeof __propDef.slots
export default class Button extends SvelteComponentTyped<
  ButtonProps,
  ButtonEvents,
  ButtonSlots
> {}
export {}
