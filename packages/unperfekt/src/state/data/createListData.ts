import { derived, writable, type Readable, type Writable } from "svelte/store"

export type Key = string | number | symbol

export interface ListOptions<T> {
  /** Inital items in the list. */
  initialItems?: T[]
  /** The keys of the initially selected items. */
  initialSelectedKeys?: Key[]
  /** The initial filter text used to perform filtering. */
  initialFilterText?: string
  /** A function that returns whether an item matches the current filter text. */
  filter?: (item: T, filterText: string) => boolean
  /** A function that returns a unique key from an item object. */
  getKey?: (item: T) => Key
}

export interface ListData<T> {
  /** The items in the list. */
  items: Readable<T[]>
  /** The keys of the currently selected items in the list. */
  selectedKeys: Writable<Key[]>
  /** Sets the selected keys. */
  setSelectedKeys: (keys: Key[]) => void
  /** The current filter text. */
  filterText: Writable<string>
  /** Sets the filter text. */
  setFilterText: (text: string) => void
}

export interface ListState<T> {
  items: T[]
  selectedKeys: Key[]
  filterText: string
}

export const createListData = <T>(
  options: ListOptions<T> = {},
): ListData<T> => {
  const {
    initialItems = [],
    initialSelectedKeys = [],
    initialFilterText = "",
    filter,
    // getKey = (item: any) => item.id || item.key,
  } = options
  const _items = writable(initialItems)
  const selectedKeys = writable(initialSelectedKeys)
  const filterText = writable(initialFilterText)
  const setSelectedKeys = (keys: Key[]) => {
    selectedKeys.set(keys)
  }
  const setFilterText = (text: string) => {
    filterText.set(text)
  }
  const items = derived([filterText, _items], ([$filterText, $items]) => {
    if ($filterText && filter) {
      return $items.filter((item) => filter(item, $filterText))
    } else {
      return $items
    }
  })

  return {
    items,
    selectedKeys,
    filterText,
    setSelectedKeys,
    setFilterText,
  }
}

// const reducible = (state, reducer) => {
//   const { update, subscribe } = writable<S>(state)
//   const dispatch = (action) =>
//     update((nextState) => reducer(nextState, action))

//   return [{ subscribe }, dispatch]
// }
