/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PortalProps {}

export default class Portal extends SvelteComponentTyped<
  PortalProps,
  {},
  { default: {} }
> {
  /**
   * DOM Element or CSS Selector
   */
  target: string;
}
