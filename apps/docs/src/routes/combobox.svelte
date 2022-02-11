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

  // const items = [
  //   { id: 1, name: "White", code: "#FFFFFF" },
  //   { id: 2, name: "Red", code: "#FF0000" },
  //   { id: 3, name: "Yellow", code: "#FF00FF" },
  //   { id: 4, name: "Green", code: "#00FF00" },
  //   { id: 5, name: "Blue", code: "#0000FF" },
  //   { id: 6, name: "Black", code: "#000000" },
  // ]
  const items: Character[] = []

  let value = ""

  /**
   * @param keyword Search keyword.
   * @returns {Promise<Character[]>} Promise of search results.
   */
  async function searchStarWars(keyword: string): Promise<Character[]> {
    const url = `https://swapi.dev/api/people/?search=${keyword}`
    const res = await fetch(url)
    const json = (await res.json()) as StarWarsResponse

    return json.results
  }
</script>

<h1>Combobox</h1>

<div class="block">
  <Combobox
    {items}
    label="Star Wars Character"
    searchFn={searchStarWars}
    bind:value
  >
    <span slot="item" let:item>
      <span>{item.name}</span>
      <span>{item.gender}</span>
    </span>
  </Combobox>
</div>
