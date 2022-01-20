<script lang="ts">
  import { SIZE, VARIANT } from "./constants"

  /** Variant of the Button */
  export let variant: keyof typeof VARIANT = "danger"

  /** Size of the Button */
  export let size: keyof typeof SIZE = "large"

  // eslint workaround
  // https://github.com/sveltejs/eslint-plugin-svelte3#installation-with-typescript
  let className: string
  $: className = `Button ${VARIANT[variant]} ${SIZE[size]}`
</script>

<!-- @component
@example
<Button variant="primary" size="small">
  Yahoo
</Button>
-->

<button on:click class={className}>
  <slot />
</button>
