<script lang="ts" strictEvents>
  import { Combobox } from "unperfekt"

  interface Character {
    id: string
    name: string
    gender: string
    url: string
  }

  interface StarWarsResponse {
    results: Character[]
  }
  type LoadingState = "idle" | "loading" | "loaded" | "error"

  interface AsyncListStateUpdate<T> {
    /** The new items to append to the list. */
    items: T[]
    /** The updated filter text for the list. */
    filterText?: string
  }

  interface AsyncListLoadOptions<T> {
    /** The items currently in the list. */
    items: T[]
    /** The current filter text used to perform server side filtering. */
    filterText?: string
    /** The current loading state of the list. */
    loadingState?: LoadingState
  }

  type AsyncListLoadFunction<T> = (
    state: AsyncListLoadOptions<T>,
  ) => AsyncListStateUpdate<T> | Promise<AsyncListStateUpdate<T>>
  interface AsyncList<T> {
    items: T[]
    loadingState: LoadingState
    loading: boolean
    filterText: string
    setFilterText: (event: CustomEvent<string>) => void
    error?: Error
    load: AsyncListLoadFunction<T>
  }

  let list: AsyncList<Character> = {
    items: [],
    loadingState: "idle",
    loading: false,
    filterText: "",
    setFilterText: (event) => {
      console.log("setFilterText", event)
      list.filterText = event.detail
      void list.load({
        items: list.items,
        filterText: list.filterText,
      })
    },
    error: undefined,
    load: async ({ filterText }) => {
      list.loading = true
      list.loadingState = "loading"
      try {
        const response = await fetch(`https://swapi.dev/api/people?search=${filterText}`)
        const data = (await response.json()) as StarWarsResponse
        list.items = data.results
        list.loadingState = "loaded"
      } catch (err: unknown) {
        console.log("err", err)
        list.error = err as Error
        list.loadingState = "error"
      } finally {
        list.loading = false
      }

      return {
        items: list.items,
        filterText: list.filterText,
      }
    },
  }
</script>

<h1>Combobox</h1>

<div class="block">
  <Combobox
    label="Star Wars Character Lookup"
    items={list.items}
    on:input={list.setFilterText}
    bind:value={list.filterText}
  >
    <span slot="item" let:item>
      <span>{item.name}</span>
      <span>{item.gender}</span>
    </span>
  </Combobox>
</div>
