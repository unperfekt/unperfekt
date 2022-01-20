import { writable } from "svelte/store"

import type { Readable } from "svelte/store"

export type Key = string | number

export interface SelectionManager<T> extends Readable<T> {
  // subscribe(v: any): Unsubscriber
  // selectedKeys: Set<Key>
  toggleSelect(key: Key): void
  reset(): void
}

export interface SelectionManagerProps {
  multiple?: boolean
  selectedKeys?: Set<Key>
}

export const createSelectionManager = ({
  multiple = false,
  selectedKeys = new Set(),
}: SelectionManagerProps): SelectionManager<Set<Key>> => {
  const { subscribe, set, update } = writable(selectedKeys)

  return {
    subscribe,
    toggleSelect: (key: Key) => {
      if (multiple) {
        update((prev) => {
          const next = new Set(prev)
          next.has(key) ? next.delete(key) : next.add(key)
          return next
        })
      } else {
        set(new Set([key]))
      }
    },
    reset: () => set(new Set()),
  }
}
