/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DialogProps {
  /**
   * Wheter the dialog is open or not
   * @default false
   */
  isOpen?: boolean;
}

export default class Dialog extends SvelteComponentTyped<
  DialogProps,
  { close: CustomEvent<any> },
  { default: {}; header: {} }
> {}
