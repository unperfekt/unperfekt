import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    /** Space-separated list of the case-sensitive classes of the element. */ class?:
      | string
      | undefined
    /** Wheter the modal is open or not. */ open?: boolean | undefined
    /** The type of the modal. */ type?:
      | "modal"
      | "fullscreen"
      | "fullscreenTakeover"
      | undefined
  }
  slots: {
    default: {}
  }
  events: {
    close: CustomEvent<any>
  }
}
export type ModalProps = typeof __propDef.props
export type ModalEvents = typeof __propDef.events
export type ModalSlots = typeof __propDef.slots
export default class Modal extends SvelteComponentTyped<
  ModalProps,
  ModalEvents,
  ModalSlots
> {}
export {}
