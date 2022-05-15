import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    /** DOM Element or CSS Selector. */ target?:
      | string
      | HTMLElement
      | undefined
  }
  slots: {
    default: {}
  }
  getters: {}
  events: {}
}
export declare type PortalProps = typeof __propDef.props
export declare type PortalEvents = typeof __propDef.events
export declare type PortalSlots = typeof __propDef.slots
export default class Portal extends SvelteComponentTyped<
  PortalProps,
  PortalEvents,
  PortalSlots
> {}
export {}
