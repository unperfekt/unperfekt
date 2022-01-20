<script lang="ts">
  import { Accordion, Dialog, Button } from "unperfekt"

  const items = [
    { id: "1", title: "Dark Souls", description: "Lorem Ipsum" },
    { id: "2", title: "Dark Souls 2", description: "Lorem Ipsum" },
    { id: "3", title: "Dark Souls 3", description: "Lorem Ipsum" },
  ]

  let isOpen = false

  const open = () => {
    isOpen = true
  }

  const close = () => {
    console.log("close")
    isOpen = false
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Accordion {items} />

<Button on:click={open} variant="danger">Button</Button>
<button > {isOpen} show modal </button>

<Dialog {isOpen} on:close={close}>
  <h2 slot="header">
    modal
    <small><em>adjective</em> mod·al \ˈmō-dəl\</small>
  </h2>

  <ol class="list-disc">
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
</Dialog>
