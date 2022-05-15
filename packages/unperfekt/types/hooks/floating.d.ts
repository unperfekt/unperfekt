import {
  type ComputePositionConfig,
  type ReferenceElement,
} from "@floating-ui/dom"
import type { Action } from "svelte/action"
export declare const createFloating: (
  options?: Partial<ComputePositionConfig>,
) => readonly [Action<ReferenceElement, any>, Action<HTMLElement, any>]
