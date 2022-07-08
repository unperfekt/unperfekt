<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
  import { CheckboxGroup } from "../"

  let values = ["Apple", "Banana", "Orange"]
  let scoops = values.slice(0, 2)

  const items = [
    { id: "1", value: "Apple", label: "Apple" },
    { id: "2", value: "Banana", label: "Banana" },
    { id: "3", value: "Orange", label: "Orange" },
  ]

  $: console.log("scoops", scoops)
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Input/CheckboxGroup" component={CheckboxGroup} args={{ items }} />

<!-- Variants (primary, secondary) - Sizes (sm, md, lg) - States (disabled, readonly) - Accessibility (focus, hover) -->

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <CheckboxGroup bind:group={scoops} {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Default" />
<Story name="Group">
  <CheckboxGroup items={items} />
</Story>
