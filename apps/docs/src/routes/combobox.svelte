<script lang="ts" strictEvents>
  import { Button, Combobox, createAsyncList } from "unperfekt"

  // import json from "./countries.json"

  interface Character {
    id: string
    name: string
    gender: string
    // url: string
  }

  // interface Country {
  //   id: string
  //   name: string
  //   independent: boolean
  //   // url: string
  // }

  interface StarWarsResponse {
    results: Character[]
  }

  // let isOpen = false

  // const open = (e: MouseEvent) => {
  //   console.log(e.target)
  //   isOpen = true
  // }

  // const close = () => {
  //   isOpen = false
  // }

  // let list: AsyncList<Character> = {
  //   items: [],
  //   loadingState: "idle",
  //   loading: false,
  //   filterText: "",
  //   setFilterText: (event) => {
  //     console.log("setFilterText", event)
  //     list.filterText = event.detail
  //     void list.load({
  //       items: list.items,
  //       filterText: list.filterText,
  //     })
  //   },
  //   error: undefined,
  //   load: async ({ filterText }) => {
  //     list.loading = true
  //     list.loadingState = "loading"
  //     try {
  //       const response = await fetch(
  //         `https://swapi.dev/api/people?search=${filterText}`,
  //       )
  //       const data = (await response.json()) as StarWarsResponse
  //       list.items = data.results
  //       list.loadingState = "loaded"
  //     } catch (err: unknown) {
  //       console.log("err", err)
  //       list.error = err as Error
  //       list.loadingState = "error"
  //     } finally {
  //       list.loading = false
  //     }

  //     return {
  //       items: list.items,
  //       filterText: list.filterText,
  //     }
  //   },
  // }

  // const { items, filterText } = createListData({
  //   initialItems: characters,
  //   filter: (item, filterText) => {
  // 		console.log('item', item, 'filterText', filterText)
  // 		return item.name.includes(filterText)
  // 	}
  // })

  // const countries: Country[] = json.map((x, i) => ({
  //   ...x,
  //   id: `${i}`,
  // }))

  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms))

  // const toLower = (str: string) => str.toLowerCase()

  const { items, filterText, setFilterText, loadingState } =
    createAsyncList<Character>({
      // initialItems: countries,
      // initialFilterText: "L",
      async load(state) {
        // console.log("state", state)
        const swapi = new URL("https://swapi.dev/api/people")
        swapi.searchParams.set("search", state.filterText as string)
        const response = await fetch(swapi.toString(), { signal: state.signal })
        const data = (await response.json()) as unknown as StarWarsResponse
        // await delay(2000)

        return { items: data.results }
      },
      // filter: (item, filterText) => {
      // 	// console.log('item', item, 'filterText', filterText)
      // 	return toLower(item.name).includes(toLower(filterText))
      // }
    })

  // const { items, filterText, setFilterText } = createListData<Country>({
  //   initialItems: countries,
  //   // initialFilterText: "L",
  //   // async load(_state) {
  //   //   // console.log("state", state)
  //   //   // const swapi = new URL("https://swapi.dev/api/people")
  //   //   // swapi.searchParams.set("search", state.filterText as string)
  //   //   // const response = await fetch(swapi.toString(), { signal: state.signal })
  //   //   // const data = (await response.json()) as unknown as StarWarsResponse
  //   //   await delay(2000)

  //   //   return { items: countries }
  //   // },
  //   filter: (item, filterText) => {
  //     // console.log('item', item, 'filterText', filterText)
  //     return toLower(item.name).includes(toLower(filterText))
  //   },
  // })

  const _setFilterText = (event: CustomEvent<string>) => {
    const text: string = event.detail

    setFilterText(text)
  }

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault()
    console.log("submit", event)
    // const formData = new FormData(event.target as HTMLFormElement)
    // let obj = {}
    // for (var key of formData.keys()) {
    //   obj[key] = formData.get(key)
    // }
    // console.log("formData", obj)
  }

  // $: console.log("loadingState", $loadingState, $loading)
</script>

<form on:submit={onSubmit}>
  <div class="mx-auto w-64 pt-6">
    <h1 class="mb-6 font-sans text-2xl">Combobox</h1>
    <div class="mb-4 block">
      <Combobox
        label="Star Wars Character Lookup"
        items={$items}
        loadingState={$loadingState}
        on:input={_setFilterText}
        bind:value={$filterText}
      >
        <span slot="item" let:item>
          <span>{item.name}</span>
          <span>{item.id}</span>
        </span>
      </Combobox>
    </div>

    <div class="mb-4 block">
      <Combobox
        label="Countries"
        items={$items}
        placeholder="Type a name"
        loadingState={$loadingState}
        on:input={_setFilterText}
        bind:value={$filterText}
      >
        <span slot="item" let:item>
          <div class="flex">
            <!-- Selected: "font-semibold" -->
            <span class="truncate">{item.name}</span>
            <!-- Active: "text-indigo-200", Not Active: "text-gray-500" -->
            <span class="ml-2 truncate text-gray-500">{item.gender}</span>
          </div>
        </span>
      </Combobox>
    </div>
    <Button type="submit" size="fill">Submit</Button>
  </div>
</form>

<!-- <button on:click={open}>{isOpen} show modal</button>

<Dialog {isOpen} on:close={close}>
  <h2 slot="header">
    modal
    <small><em>adjective</em> mod&middot;al \&#x2C8;m&omacr;-d&#x259;l\</small>
  </h2>

  <ol class="ml-4 list-disc pl-4">
    <li>of or relating to modality in logic</li>
    <li>
      containing provisions as to the mode of procedure or the manner of taking
      effect —used of a contract or legacy
    </li>
    <li>of or relating to a musical mode</li>
    <li>of or relating to structure as opposed to substance</li>
    <li>
      of, relating to, or constituting a grammatical form or category
      characteristically indicating predication
    </li>
    <li>of or relating to a statistical mode</li>
  </ol>

  <div class="block">
    <Combobox
      label="Countries"
      items={$items}
      placeholder="Type a name"
      on:input={_setFilterText}
      bind:value={$filterText}
    >
      <span slot="item" let:item>
        <span>{item.name}</span>
        <span>{item.independent}</span>
      </span>
    </Combobox>
  </div>

  <a href="https://www.merriam-webster.com/dictionary/modal">
    merriam-webster.com
  </a>

  <div class="grid grid-cols-2 gap-x-4" slot="buttongroup">
    <Button variant="outline" on:click={close}>Close</Button>
    <Button on:click={close}>OK</Button>
  </div>
</Dialog> -->

<!-- <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla
  phasellus faucibus. Egestas dui id ornare arcu odio. Amet facilisis magna
  etiam tempor orci eu lobortis. Nibh cras pulvinar mattis nunc sed. Maecenas
  sed enim ut sem viverra aliquet eget sit. Fames ac turpis egestas maecenas
  pharetra convallis. Sed adipiscing diam donec adipiscing tristique risus nec
  feugiat. Placerat duis ultricies lacus sed. Erat velit scelerisque in dictum
  non consectetur a. Massa tincidunt nunc pulvinar sapien et ligula. Fames ac
  turpis egestas integer eget aliquet nibh.
</p>
<p>
  Lectus quam id leo in vitae turpis massa sed elementum. Pellentesque nec nam
  aliquam sem et tortor consequat. Id semper risus in hendrerit gravida rutrum
  quisque non tellus. Elementum nibh tellus molestie nunc non blandit massa
  enim. Velit laoreet id donec ultrices tincidunt. Nunc faucibus a pellentesque
  sit amet porttitor. Mauris ultrices eros in cursus turpis massa tincidunt dui.
  Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
  Varius quam quisque id diam vel quam. Donec ac odio tempor orci dapibus
  ultrices in iaculis nunc. Leo urna molestie at elementum eu facilisis sed
  odio. Dictum at tempor commodo ullamcorper a. Mauris augue neque gravida in
  fermentum. Porttitor leo a diam sollicitudin tempor id eu.
</p>

<p>
  Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ipsum
  dolor sit amet consectetur adipiscing. Quis hendrerit dolor magna eget est
  lorem ipsum dolor sit. Sit amet consectetur adipiscing elit pellentesque
  habitant. Lorem ipsum dolor sit amet consectetur adipiscing. Interdum varius
  sit amet mattis vulputate enim nulla aliquet. Molestie a iaculis at erat
  pellentesque adipiscing commodo elit at. Interdum velit laoreet id donec
  ultrices. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Amet
  tellus cras adipiscing enim eu. Nibh cras pulvinar mattis nunc sed blandit.
  Quis hendrerit dolor magna eget. Id aliquet risus feugiat in ante metus dictum
  at. Nibh praesent tristique magna sit. In cursus turpis massa tincidunt dui ut
  ornare. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Amet massa
  vitae tortor condimentum lacinia quis vel eros donec. In fermentum et
  sollicitudin ac. Tincidunt augue interdum velit euismod.
</p>

<p>
  Elementum nisi quis eleifend quam adipiscing vitae. Elementum nisi quis
  eleifend quam adipiscing vitae proin. Sodales ut etiam sit amet nisl purus in
  mollis nunc. Risus feugiat in ante metus dictum at tempor commodo ullamcorper.
  Commodo quis imperdiet massa tincidunt. Ut sem nulla pharetra diam sit amet
  nisl suscipit. Urna id volutpat lacus laoreet non. Tortor consequat id porta
  nibh venenatis cras sed felis. Non consectetur a erat nam at. Aliquam ut
  porttitor leo a diam sollicitudin tempor id eu.
</p>

<p>
  Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Eu mi bibendum neque
  egestas congue quisque egestas diam in. Malesuada bibendum arcu vitae
  elementum curabitur vitae nunc sed velit. Lectus proin nibh nisl condimentum
  id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Natoque
  penatibus et magnis dis parturient. Vulputate sapien nec sagittis aliquam
  malesuada bibendum arcu. Consequat semper viverra nam libero justo laoreet sit
  amet. Etiam sit amet nisl purus in mollis nunc. Et odio pellentesque diam
  volutpat commodo sed egestas. Orci a scelerisque purus semper. Bibendum arcu
  vitae elementum curabitur vitae nunc sed. Posuere sollicitudin aliquam
  ultrices sagittis orci a scelerisque purus. Porta lorem mollis aliquam ut
  porttitor leo a diam sollicitudin. Dolor magna eget est lorem ipsum dolor sit.
</p> -->
