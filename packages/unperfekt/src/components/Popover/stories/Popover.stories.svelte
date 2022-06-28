<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
  import { Popover } from "../"
  import { Button } from "../../Button"

  let open = false
  const toggle = () => void (open = !open)
</script>

<Meta title="Overlays/Popover" component={Popover} args={{ open: false }} />

<Template let:args>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <Popover {...args} open={open} on:close={toggle}>
    <Button on:click={toggle}>Open</Button>
    <p slot="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nisl
      id libero tincidunt euismod. Nulla euismod, nisl eu consectetur
      consectetur, nisi nisl consectetur, nisi nisl euismod, nisi nisl euismod,
      nisi nisl euismod.
    </p>
  </Popover>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nostrum
    inventore laboriosam repellat, aspernatur minima, impedit animi, excepturi
    distinctio nisi quo provident similique explicabo officia voluptatem maxime
    laudantium facilis? Quas?
  </p>
</Template>

<Story name="Standard" />
