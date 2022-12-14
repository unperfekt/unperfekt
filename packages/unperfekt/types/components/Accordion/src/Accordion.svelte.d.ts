import { SvelteComponentTyped } from "svelte"
import type { Item } from "./types.js"
import type { Key } from "../../../state/collection/selection.js"
declare const __propDef: {
  props: {
    /** Wheter to allow multiple items to be open at the same time or not. */ multiple?:
      | boolean
      | undefined
    /** Item objects in the collection. */ items?: Item[] | undefined
    /** The currently selected keys in the collection. */ selectedKeys?:
      | Set<Key>
      | undefined
  }
  slots: {
    default: {}
  }
  getters: {}
  events: {
    click: MouseEvent
  }
}
export declare type AccordionProps = typeof __propDef.props
export declare type AccordionEvents = typeof __propDef.events
export declare type AccordionSlots = typeof __propDef.slots
export default class Accordion extends SvelteComponentTyped<
  AccordionProps,
  AccordionEvents,
  AccordionSlots
> {}
export {}
