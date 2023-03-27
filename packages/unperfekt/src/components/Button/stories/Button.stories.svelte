<script lang="ts">
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
  import { Button } from "../index.js"
</script>

<Meta title="Button" tags={["autodocs"]} component={Button} />

<!-- Variants (primary, secondary) - Sizes (sm, md, lg) - States (disabled, readonly) - Accessibility (focus, hover) -->

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Button {...args} on:click={args.onClick}>Button</Button>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Variant - Primary" />
<Story name="Variant - Outline" args={{ variant: "outline" }} />
<Story name="Variant - Dark" args={{ variant: "dark" }} />
<Story name="Variant - Danger" args={{ variant: "danger" }} />
<Story name="Variant - On-Danger" args={{ variant: "on-danger" }} />

<Story name="Type - Button" args={{ type: "button" }} />
<Story name="Type - Submit" args={{ type: "submit" }} />
<Story name="Type - Reset" args={{ type: "reset" }} />

<Story name="Disabled" args={{ disabled: true }} />
<Story name="Loading" args={{ loading: true }} />
<Story name="Link - Disabled" args={{ href: "#", disabled: true }} />
<Story name="Loading" args={{ loading: true }} />
<Story name="Href" args={{ href: "#" }} />
<Story name="Download" args={{ href: "#", download: "#" }} />

<Story name="Size - lg" args={{ size: "lg" }} />
<Story name="Size - md" args={{ size: "md" }} />
<Story name="Size - sm" args={{ size: "sm" }} />

<Story let:args name="Icon">
  <Button {...args}>
    <svg
      slot="icon"
      class="h-5 w-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    Button
  </Button>
</Story>
