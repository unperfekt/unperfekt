import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    /** CSS class for the element. */ class?: string | null | undefined
    /** The visual style of the button. */ variant?:
      | "primary"
      | "outline"
      | "dark"
      | "danger"
      | "on-danger"
      | undefined
    /** The size of the button. */ size?:
      | "fixed"
      | "small"
      | "large"
      | "fill"
      | undefined
    /** The behavior of the button when used in an HTML form. */ type?:
      | "reset"
      | "submit"
      | "button"
      | undefined
    /** Whether the button is disabled. */ disabled?: boolean | undefined
    /** The URL that the hyperlink points to. **Note**: This turns the button into an `<a>` element. */ href?:
      | string
      | undefined
    /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */ rel?:
      | string
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
export declare type ButtonProps = typeof __propDef.props
export declare type ButtonEvents = typeof __propDef.events
export declare type ButtonSlots = typeof __propDef.slots
/**
 * @example
 * <Button variant="primary" size="small">
 * Click me
 * </Button>
 *
 * <Button href="https://unperfekt.design" rel="prefetch">
 * Click me
 * </Button>
 */
export default class Button extends SvelteComponentTyped<
  ButtonProps,
  ButtonEvents,
  ButtonSlots
> {}
export {}
