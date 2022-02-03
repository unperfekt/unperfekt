<script lang="ts">
  /**
   * @restProps {a | button}
   */
  import cn from "classnames"

  import { SIZE, VARIANT } from "./constants"

  let _class: string | null = null
  export { _class as class }

  /** The visual style of the button. */
  export let variant: keyof typeof VARIANT = "primary"

  /** The size of the button. */
  export let size: keyof typeof SIZE = "large"

  /** The behavior of the button when used in an HTML form. */
  export let type: "button" | "submit" | "reset" = "button"

  /** Whether the button is disabled. */
  export let disabled: boolean | null = null

  /** A URL to link to. **Note**: This turns the button into an anchor element. */
  export let href: string | null = null

  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  export let rel: string | null = null

  let className = cn("Button", VARIANT[variant], SIZE[size], _class)
</script>

{#if href}
  <a on:click class={className} {href} {rel} {type} {disabled} {...$$restProps}>
    <slot />
  </a>
{:else}
  <button on:click class={className} {type} {disabled} {...$$restProps}>
    <slot />
  </button>
{/if}

<!--
@component
@example
<Button variant="primary" size="small">
  Yahoo
</Button>
-->
