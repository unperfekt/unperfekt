import { SvelteComponentTyped } from "svelte"
import type { Key } from "../../../state/collection/selection.js"
declare const __propDef: {
  props: {
    /** Unique identifier for this row. */ key: Key
    /** Accordion title for this row. */ title: string
  }
  slots: {
    title: {}
    default: {}
  }
  events: {
    click: MouseEvent
  }
}
export type AccordionItemProps = typeof __propDef.props
export type AccordionItemEvents = typeof __propDef.events
export type AccordionItemSlots = typeof __propDef.slots
export default class AccordionItem extends SvelteComponentTyped<
  AccordionItemProps,
  AccordionItemEvents,
  AccordionItemSlots
> {}
export {}
