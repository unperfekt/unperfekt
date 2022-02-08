<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
  import { Button } from "unperfekt"

  const onClick = (e) => console.log("e", e)
</script>

<Meta title="Buttons/Button" component={Button} />

<Template let:args>
  <Button {...args} on:click={args.onClick}>Button</Button>
</Template>

<Story name="Primary" args={{ variant: "primary", onClick }} />

<Story name="Dark" args={{ variant: "dark", onClick }} />

<Story name="Outline" args={{ variant: "outline", onClick }} />

<Story name="Danger" args={{ variant: "danger", onClick }} />
