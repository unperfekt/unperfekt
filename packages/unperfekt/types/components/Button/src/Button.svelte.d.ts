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
export declare type ButtonProps = typeof __propDef.props
export declare type ButtonEvents = typeof __propDef.events
export declare type ButtonSlots = typeof __propDef.slots
export default class Button extends SvelteComponentTyped<
  ButtonProps,
  ButtonEvents,
  ButtonSlots
> {}
export {}
