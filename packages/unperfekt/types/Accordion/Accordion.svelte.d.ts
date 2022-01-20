/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AccordionProps {
  /**
   * Wheter to allow multiple items to be open at the same time or not.
   * @default false
   */
  multiple?: boolean;

  /**
   * Item objects in the collection.
   * @default []
   */
  items?: [];

  /**
   * The currently selected keys in the collection.
   * @default undefined
   */
  selectedKeys?: undefined;
}

export default class Accordion extends SvelteComponentTyped<
  AccordionProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
