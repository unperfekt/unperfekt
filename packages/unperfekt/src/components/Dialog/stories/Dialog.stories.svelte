<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
  import { Dialog } from "../"
  import { Button } from "../../Button"
  import { ButtonGroup } from "../../ButtonGroup"

  let open = false
  const toggle = () => void (open = !open)
  let openx = false
  const togglex = () => void (openx = !openx)

  let dialogEl
  let dialogElx

  const toggleEl = () => {
    dialogEl.showModal()
  }
  const closeEl = () => {
    dialogEl.close()
  }
  const toggleElx = () => {
    dialogElx.showModal()
  }
  const closeElx = () => {
    dialogElx.close()
  }
</script>

<Meta title="Overlays/Dialog" component={Dialog} args={{ open: false }} />

<Template let:args>
  <Button on:click={toggle}>Open</Button>
  <Dialog {open} on:close={toggle} {...args}>
    <h1 slot="header">Dialog</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisl
      id libero tincidunt euismod. Nulla euismod, nisl eu consectetur
      consectetur, nisi nisl consectetur, nisi nisl euismod, nisi nisl euismod,
      nisi nisl euismod.
    </p>
    <ButtonGroup slot="buttongroup">
      <Button variant="outline" on:click={toggle}>Close</Button>
      <Button on:click={toggle}>Open</Button>
    </ButtonGroup>
  </Dialog>
</Template>

<Story name="Standard" />

<Story name="Size - SM" args={{ size: "sm" }} />
<Story name="Size - MD" args={{ size: "md" }} />
<Story name="Size - LG" args={{ size: "lg" }} />
<Story name="Size - Fullscreen" args={{ size: "fullscreen" }} />
<Story name="Size - FullscreenTakeover" args={{ size: "fullscreenTakeover" }} />
<Story name="Scrolling Content">
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <Button on:click={toggle}>Open Long</Button>
  <Button on:click={togglex}>Open Short</Button>
  <p class="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan
    augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur
    justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
    facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu
    rutrum.
  </p>
  <div class="h-96" />
  <Dialog {open} on:close={toggle}>
    <h1 slot="header">Dialog</h1>
    <div class="overflow-y-auto overscroll-y-contain">
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
        accumsan augue. Phasellus consequat augue vitae tellus tincidunt
        posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices
        condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.
      </p>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
        accumsan augue. Phasellus consequat augue vitae tellus tincidunt
        posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices
        condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.
      </p>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
        accumsan augue. Phasellus consequat augue vitae tellus tincidunt
        posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices
        condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.
      </p>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
        accumsan augue. Phasellus consequat augue vitae tellus tincidunt
        posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices
        condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.
      </p>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
        accumsan augue. Phasellus consequat augue vitae tellus tincidunt
        posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices
        condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
        accumsan augue. Phasellus consequat augue vitae tellus tincidunt
        posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices
        condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.
      </p>
    </div>

    <ButtonGroup slot="buttongroup">
      <Button variant="outline" on:click={toggle}>Close</Button>
      <Button on:click={toggle}>Open</Button>
    </ButtonGroup>
  </Dialog>
  <Dialog open={openx} on:close={togglex}>
    <h1 slot="header">Dialog</h1>
    <div class="overflow-y-auto overscroll-y-contain">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
        accumsan augue. Phasellus consequat augue vitae tellus tincidunt
        posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices
        condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus.
        Quisque consectetur non risus eu rutrum.
      </p>
    </div>

    <ButtonGroup slot="buttongroup">
      <Button variant="outline" on:click={togglex}>Close</Button>
      <Button on:click={togglex}>Open</Button>
    </ButtonGroup>
  </Dialog>
</Story>

<Story name="DialogEl">
  <Button on:click={toggleEl}>Open</Button>
  <dialog bind:this={dialogEl}>
    <h1>Dialog</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisl
      id libero tincidunt euismod. Nulla euismod, nisl eu consectetur
      consectetur, nisi nisl consectetur, nisi nisl euismod, nisi nisl euismod,
      nisi nisl euismod.
    </p>
    <Button on:click={toggleElx}>Open 2</Button>
    <Button on:click={closeEl}>Close</Button>
  </dialog>
  <dialog bind:this={dialogElx}>
    <h1>Dialog</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisl
      id libero tincidunt euismod. Nulla euismod, nisl eu consectetur
      consectetur, nisi nisl consectetur, nisi nisl euismod, nisi nisl euismod,
      nisi nisl euismod.
    </p>
    <Button on:click={closeElx}>Close</Button>
  </dialog>
</Story>

<Story name="Stacking">
  <Button on:click={toggle}>Open</Button>
  <Dialog {...args} {open} on:close={toggle}>
    <h1 slot="header">Dialog</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisl
      id libero tincidunt euismod. Nulla euismod, nisl eu consectetur
      consectetur, nisi nisl consectetur, nisi nisl euismod, nisi nisl euismod,
      nisi nisl euismod.
    </p>
    <ButtonGroup slot="buttongroup">
      <Button variant="outline" on:click={toggle}>Close</Button>
      <Button on:click={togglex}>Open</Button>
    </ButtonGroup>
  </Dialog>
  <Dialog {...args} open={openx} on:close={togglex}>
    <h1 slot="header">Dialog</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisl
      id libero tincidunt euismod. Nulla euismod, nisl eu consectetur
      consectetur, nisi nisl consectetur, nisi nisl euismod, nisi nisl euismod,
      nisi nisl euismod.
    </p>
    <Button slot="buttongroup" on:click={togglex}>Close</Button>
  </Dialog>
</Story>
