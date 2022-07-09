<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
  import { Checkbox } from "../index.js"

  let flavours = [
    { id: "1", value: "Vanilla", label: "Vanilla" },
    { id: "2", value: "Chocolate", label: "Chocolate" },
    { id: "3", value: "Strawberry", label: "Strawberry" },
  ]

  let checked = flavours.map((x) => x.value).slice(2)

  const onInput = (e) => {
    if (checked.includes(e.target.value)) {
      checked = checked.filter((value) => value !== e.target.value)
    } else {
      checked = checked.concat(e.target.value)
    }
  }

  $: console.log(checked)
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Input/Checkbox"
  component={Checkbox}
  args={{
    label: "Comments",
    // checked: true
  }}
/>

<!-- Variants (primary, secondary) - Sizes (sm, md, lg) - States (disabled, readonly) - Accessibility (focus, hover) -->

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Checkbox {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Default" />
<Story name="Checked" args={{ checked: true }} />
<Story name="Indeterminate" args={{ indeterminate: true }} />
<Story
  name="With Description"
  args={{
    description: "Get notified when someones posts a comment on a posting.",
  }}
/>
<Story name="Group">
  {#each flavours as flavour (flavour.id)}
    <Checkbox
      {...flavour}
      on:input={onInput}
      checked={checked.includes(flavour.value)}
    />
  {/each}
</Story>

<Story name="Bind - Group">
  {#each flavours as flavour (flavour.id)}
    <Checkbox {...flavour} bind:group={checked} />
  {/each}
</Story>
