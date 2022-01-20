<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
  import Dialog from "../Dialog.svelte"
</script>

<Meta title="Overlay/Dialog" component={Dialog} />

<Template let:args>
  <Dialog {...args} />
</Template>

<Story name="Standard" />
