import type {
  Key,
  SelectionManager,
} from "../../../state/collection/selection.js"
export declare const contextKey = "AccordionContext"
export declare type AccordionContext = SelectionManager<Set<Key>>
