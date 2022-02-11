import type { Readable } from "svelte/store"
export declare type Key = string | number
export interface SelectionManager<T> extends Readable<T> {
  toggleSelect(key: Key): void
  reset(): void
}
export interface SelectionManagerProps {
  multiple?: boolean
  selectedKeys?: Set<Key>
}
export declare const createSelectionManager: ({
  multiple,
  selectedKeys,
}: SelectionManagerProps) => SelectionManager<Set<Key>>
