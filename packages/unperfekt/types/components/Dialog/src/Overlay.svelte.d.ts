import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    /** Wheter to show the overlay or not. */ open?: boolean | undefined
    /** DOM Element or CSS Selector. */ target?:
      | string
      | HTMLElement
      | undefined
  }
  slots: {
    default: {}
  }
  events: {}
}
export type OverlayProps = typeof __propDef.props
export type OverlayEvents = typeof __propDef.events
export type OverlaySlots = typeof __propDef.slots
export default class Overlay extends SvelteComponentTyped<
  OverlayProps,
  OverlayEvents,
  OverlaySlots
> {}
export {}
