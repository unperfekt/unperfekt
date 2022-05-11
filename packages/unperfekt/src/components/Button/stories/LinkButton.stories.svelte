<script lang="ts">
  import { LinkButton } from "unperfekt"
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf"
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Example/LinkButton"
  component={LinkButton}
  argTypes={{
    onClick: { action: "onClick" },
    href: { control: "text" },
    download: { control: "text" },
    disabled: { control: "boolean" },
    variant: {
      control: { type: "select" },
      options: ["primary", "outline", "dark", "danger", "on-danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  }}
/>

<!-- Variants (primary, secondary) - Sizes (sm, md, lg) - States (disabled, readOnly, loading) - Accessibility (focus, hover) -->

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <LinkButton {...args} on:click={args.onClick}>Button</LinkButton>
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
<Story name="Link - Disabled" args={{ href: "#", disabled: true }} />
<Story name="Loading" args={{ loading: true }} />
<Story name="Href" args={{ href: "#" }} />
<Story name="Download" args={{ href: "#", download: "#" }} />

<Story name="Size - lg" args={{ size: "lg" }} />
<Story name="Size - md" args={{ size: "md" }} />
<Story name="Size - sm" args={{ size: "sm" }} />

<Story name="Icon">
  <LinkButton>
    <svg
      slot="icon"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
    Button
  </LinkButton>
</Story>
