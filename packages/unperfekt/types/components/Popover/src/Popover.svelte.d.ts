import { SvelteComponentTyped } from "svelte"
import { type Placement } from "@floating-ui/dom"
declare const __propDef: {
  props: {
    /** Space-separated list of the case-sensitive classes of the element. */ class?:
      | string
      | undefined
    /** Wheter the popover is open or not. */ open?: boolean | undefined
    /** Placement of the popover. */ placement?: Placement | undefined
  }
  slots: {
    default: {}
    content: {}
  }
  getters: {}
  events: {
    close: CustomEvent<any>
  }
}
export declare type PopoverProps = typeof __propDef.props
export declare type PopoverEvents = typeof __propDef.events
export declare type PopoverSlots = typeof __propDef.slots
export default class Popover extends SvelteComponentTyped<
  PopoverProps,
  PopoverEvents,
  PopoverSlots
> {}
export {}
