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
    href?: string | undefined
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
export type LinkButtonProps = typeof __propDef.props
export type LinkButtonEvents = typeof __propDef.events
export type LinkButtonSlots = typeof __propDef.slots
export default class LinkButton extends SvelteComponentTyped<
  LinkButtonProps,
  LinkButtonEvents,
  LinkButtonSlots
> {}
export {}
