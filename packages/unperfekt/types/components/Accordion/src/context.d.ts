import type {
  Key,
  SelectionManager,
} from "../../../state/collection/selection.js"
export declare const contextKey = "AccordionContext"
export type AccordionContext = SelectionManager<Set<Key>>
