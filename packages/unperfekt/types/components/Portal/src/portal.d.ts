import type { Action } from "svelte/action"
/**
 * Creates a portal to another node on the document.
 *
 * @param {HTMLElement} node The anchor to create the portal on.
 * @param {HTMLElement | string} target The target node to append the portal to.
 */
export declare const portal: Action<HTMLElement, HTMLElement | string>
