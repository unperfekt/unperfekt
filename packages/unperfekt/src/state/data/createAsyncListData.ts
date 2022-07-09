import {
  derived,
  get,
  writable,
  type Readable,
  type Writable,
} from "svelte/store"

import {
  createListData,
  type ListData,
  type ListOptions,
} from "./createListData.js"

import type { LoadingState } from "../collection/loadingState.js"

export type ActionType =
  | "success"
  | "error"
  | "loading"
  | "loadingMore"
  | "sorting"
  | "filtering"
  | "update"

// export interface AsyncListAction<T> {
//   type: ActionType
//   items: T[]
//   error?: Error
//   filterText?: string
// }

export interface AsyncListStateUpdate<T> {
  /** The new items to append to the list. */
  items: T[]
  /** The updated filter text for the list. */
  filterText?: string
}

export interface AsyncListOptions<T> extends ListOptions<T> {
  /** The current loading state. */
  loadingState?: LoadingState
  /** A function that loads the data for the items in the list. */
  load: AsyncListLoadFunction<T>
}

export interface AsyncListLoadOptions<T> {
  /** The items currently in the list. */
  items: T[]
  /** The current filter text used to perform filtering. */
  filterText?: string
  /** The current loading state of the list. */
  loadingState?: LoadingState
  /** An abort signal used to notify the load function that the request has been aborted. */
  signal: AbortSignal
}

export type AsyncListLoadFunction<T> = (
  state: AsyncListLoadOptions<T>,
) => AsyncListStateUpdate<T> | Promise<AsyncListStateUpdate<T>>

export interface AsyncListData<T> extends ListData<T> {
  /** The current loading state of the list. */
  loadingState: Writable<LoadingState>
  /** Wheter data is currently being loaded. */
  loading: Readable<boolean>
  /** The current error state of the list. */
  error?: Writable<Error | null>
}

export const createAsyncList = <T>(
  options: AsyncListOptions<T>,
): AsyncListData<T> => {
  const { load, initialItems, ...listOptions } = options
  const { filterText, setFilterText, selectedKeys, setSelectedKeys } =
    createListData(listOptions)
  const items = writable(initialItems)
  const loadingState = writable<LoadingState>("idle")
  const error = writable<Error | null>(null)
  const loading = derived(loadingState, ($x) => $x === "loading")
  const abortController = writable<AbortController | null>(null)

  const handler = async () => {
    const prevAbort = get(abortController)
    if (prevAbort) prevAbort.abort()
    const abort = new AbortController()
    abortController.set(abort)

    loadingState.set("loading")
    error.set(null)

    try {
      const result = await load({
        items: get(items),
        filterText: get(filterText),
        loadingState: get(loadingState),
        signal: abort.signal,
      })

      loadingState.set("idle")
      abortController.set(null)

      if (result.items) items.set(result.items)
      if (result.filterText) filterText.set(result.filterText)
    } catch (err: unknown) {
      abort.abort()
      loadingState.set("error")
      console.log("err", (err as Error).message)
      error.set(err as Error)
    }
  }

  void handler()

  return {
    items,
    filterText,
    setFilterText(text: string) {
      setFilterText(text)

      void handler()
    },
    selectedKeys,
    setSelectedKeys,
    loadingState,
    loading,
    error,
  }
}

export {}
