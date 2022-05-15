<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
  import { ButtonGroup } from "../"
  import { Button } from "../../Button"
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Buttons/ButtonGroup"
  component={ButtonGroup}
  subcomponents={[Button]}
  argTypes={{
    disabled: { control: "boolean" },
  }}
/>

<!-- Variants (primary, secondary) - Sizes (sm, md, lg) - States (disabled, readonly) - Accessibility (focus, hover) -->

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <ButtonGroup {...args}>
    <Button>Alpha</Button>
    <Button>Beta</Button>
  </ButtonGroup>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Standard" />
