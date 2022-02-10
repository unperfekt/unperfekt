<script lang="ts" strictEvents>
  /** @restProps {a | button} */

  import cn from "classnames"

  import { SIZE, VARIANT } from "./constants"

  /** CSS class for the element. */
  let _class: string | null = null
  export { _class as class }

  /** The visual style of the button. */
  export let variant: keyof typeof VARIANT = "primary"

  /** The size of the button. */
  export let size: keyof typeof SIZE = "large"

  /** The behavior of the button when used in an HTML form. */
  export let type: "button" | "submit" | "reset" = "button"

  /** Whether the button is disabled. */
  export let disabled: boolean | undefined = undefined

  /** The URL that the hyperlink points to. **Note**: This turns the button into an `<a>` element. */
  export let href: string | undefined = undefined

  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  export let rel: string | undefined = undefined

  let className = cn("Button", VARIANT[variant], SIZE[size], _class)
</script>

{#if href}
  <a on:click class={className} {href} {rel} {type} {disabled}>
    <slot />
  </a>
{:else}
  <button on:click class={className} {type} {disabled}>
    <slot />
  </button>
{/if}

<!--
@component
@example
<Button variant="primary" size="small">
  Click me
</Button>

<Button href="https://unperfekt.design" rel="prefetch">
  Click me
</Button>
-->
