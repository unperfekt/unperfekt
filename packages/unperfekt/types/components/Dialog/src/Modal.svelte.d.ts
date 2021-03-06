import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    /** Wheter the modal is open or not. */ isOpen?: boolean | undefined
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
