/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AccordionItemProps {
  /**
   * Unique identifier for this row
   * @default undefined
   */
  key?: undefined;

  /**
   * Accordion title for this row
   * @default undefined
   */
  title?: undefined;
}

export default class AccordionItem extends SvelteComponentTyped<
  AccordionItemProps,
  { click: WindowEventMap["click"] },
  { default: {}; title: {} }
> {}
