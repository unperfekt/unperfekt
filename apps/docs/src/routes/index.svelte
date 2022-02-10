<script lang="ts" strictEvents>
  import { Accordion, Dialog, Button, Combobox } from "unperfekt"

  const items = [
    { id: "1", title: "Dark Souls", description: "Lorem Ipsum" },
    { id: "2", title: "Dark Souls 2", description: "Lorem Ipsum" },
    { id: "3", title: "Dark Souls 3", description: "Lorem Ipsum" },
  ]

  const colors = [
    { id: 1, name: "White", code: "#FFFFFF" },
    { id: 2, name: "Red", code: "#FF0000" },
    { id: 3, name: "Yellow", code: "#FF00FF" },
    { id: 4, name: "Green", code: "#00FF00" },
    { id: 5, name: "Blue", code: "#0000FF" },
    { id: 6, name: "Black", code: "#000000" },
  ]

  let isOpen = false

  const open = (e: MouseEvent) => {
    console.log(e.target)
    isOpen = true
  }

  const close = () => {
    isOpen = false
  }

  let name = ""

  $: {
    console.log(name)
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Accordion {items} />

<Button on:click={(e) => {
  console.log("e", e)
}} variant="danger">Button</Button>
<Button on:click={open} type="submit" variant="primary">Primary</Button>
<Button on:click={open} size="small" type="button" variant="dark">Dark</Button>

<button>{isOpen} show modal</button>

<div class="block">
  <Combobox items={colors} bind:value={name} id="asdd">
    <span slot="item" let:item>
      <span>{item.name}</span>
      <span>{item.id}</span>
      <span>{item.code}</span>
    </span>
  </Combobox>
</div>

<Dialog {isOpen} on:close={close}>
  <h2 slot="header">
    modal
    <small><em>adjective</em> mod&middot;al \&#x2C8;m&omacr;-d&#x259;l\</small>
  </h2>

  <ol class="pl-4 ml-4 list-disc">
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

  <a href="https://www.merriam-webster.com/dictionary/modal">
    merriam-webster.com
  </a>

  <div class="grid grid-cols-2 gap-x-4" slot="buttongroup">
    <Button variant="outline" on:click={close}>Close</Button>
    <Button on:click={close}>OK</Button>
  </div>
</Dialog>
