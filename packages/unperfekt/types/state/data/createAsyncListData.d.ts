import { type Readable, type Writable } from "svelte/store"
import { type ListData, type ListOptions } from "./createListData.js"
import type { LoadingState } from "../collection/loadingState.js"
export type ActionType =
  | "success"
  | "error"
  | "loading"
  | "loadingMore"
  | "sorting"
  | "filtering"
  | "update"
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
export declare const createAsyncList: <T>(
  options: AsyncListOptions<T>,
) => AsyncListData<T>
export {}
