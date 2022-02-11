import type { Key, SelectionManager } from "../../state/collection/selection"

export const contextKey = "AccordionContext"

export type AccordionContext = SelectionManager<Set<Key>>
