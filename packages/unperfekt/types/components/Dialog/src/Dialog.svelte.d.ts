import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    /** Space-separated list of the case-sensitive classes of the element. */ class?:
      | string
      | undefined
    /** Wheter the dialog is open or not. */ open?: boolean | undefined
    /** The size of the dialog. */ size?:
      | "sm"
      | "md"
      | "lg"
      | "fullscreen"
      | "fullscreenTakeover"
      | undefined
  }
  slots: {
    header: {}
    default: {}
    buttongroup: {}
  }
  events: {
    close: CustomEvent<any>
  }
}
export type DialogProps = typeof __propDef.props
export type DialogEvents = typeof __propDef.events
export type DialogSlots = typeof __propDef.slots
export default class Dialog extends SvelteComponentTyped<
  DialogProps,
  DialogEvents,
  DialogSlots
> {}
export {}
