<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"

  import { Button } from "unperfekt"
</script>

<Meta title="Example/Button" component={Button} />

<Template let:args>
  <Button {...args} on:click={args.onClick}>Button</Button>
</Template>

<Story name="Primary" args={{ variant: "primary" }} />

<Story name="Dark" args={{ variant: "dark" }} />

<Story name="Outline" args={{ variant: "outline" }} />

<Story name="Danger" args={{ variant: "danger" }} />
