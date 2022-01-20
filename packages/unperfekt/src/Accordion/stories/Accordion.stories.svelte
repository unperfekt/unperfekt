<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
  import Accordion from "../Accordion.svelte"
  import type { IAccordionItem } from "../types"

  const items: IAccordionItem[] = [
    { id: "1", title: "Dark Souls", description: "Lorem Ipsum" },
    { id: "2", title: "Dark Souls 2", description: "Lorem Ipsum" },
    { id: "3", title: "Dark Souls 3", description: "Lorem Ipsum" },
  ]
</script>

<Meta title="Content/Accordion" component={Accordion} />

<Template let:args>
  <Accordion {...args} />
</Template>

<Story
  name="Standard"
  args={{
    items,
  }}
/>

<Story
  name="Multiple"
  args={{
    multiple: true,
    items,
  }}
/>
