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
  getters: {}
  events: {
    close: CustomEvent<any>
  }
}
export declare type ModalProps = typeof __propDef.props
export declare type ModalEvents = typeof __propDef.events
export declare type ModalSlots = typeof __propDef.slots
export default class Modal extends SvelteComponentTyped<
  ModalProps,
  ModalEvents,
  ModalSlots
> {}
export {}
