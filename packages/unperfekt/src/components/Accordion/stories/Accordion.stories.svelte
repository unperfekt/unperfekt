<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
  import { Accordion, AccordionItem } from "../index.js"

  const items = [
    { id: "1", title: "Dark Souls", description: "Lorem Ipsum" },
    { id: "2", title: "Dark Souls 2", description: "Lorem Ipsum" },
    { id: "3", title: "Dark Souls 3", description: "Lorem Ipsum" },
  ]
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Content/Accordion"
  component={Accordion}
  subcomponents={[AccordionItem]}
  args={{ items }}
/>

<!-- Variants (primary, secondary) - Sizes (sm, md, lg) - States (disabled, readOnly, loading) - Accessibility (focus, hover) -->

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Accordion {...args} />
</Template>

<Story name="Standard" />
<Story name="Multiple" args={{ multiple: true }} />
<Story name="Custom Children">
  <Accordion>
    {#each items as item (item.id)}
      <AccordionItem key={item.id} title={item.title}>
        {item.description}
      </AccordionItem>
    {/each}
  </Accordion>
</Story>
