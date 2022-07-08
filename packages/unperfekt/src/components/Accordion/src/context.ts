import type {
  Key,
  SelectionManager,
} from "../../../state/collection/selection.js"

export const contextKey = "AccordionContext"

export type AccordionContext = SelectionManager<Set<Key>>
