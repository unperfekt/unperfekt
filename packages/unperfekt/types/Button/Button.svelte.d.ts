/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ButtonProps {
  /**
   * Variant of the Button
   * @default "danger"
   */
  variant?: string;

  /**
   * Size of the Button
   * @default "large"
   */
  size?: string;
}

/**
 * @example
 * <Button variant="primary" size="small">
 *   Yahoo
 * </Button>
 */
export default class Button extends SvelteComponentTyped<
  ButtonProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
