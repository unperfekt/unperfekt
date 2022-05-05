<script lang="ts" strictEvents>
  import cn from "classnames"

  import { SIZE, VARIANT } from "./constants"

  /** CSS class for the element. */
  let _class: string | null = null
  export { _class as class }

  /** The visual style of the button. */
  export let variant: keyof typeof VARIANT = "primary"

  /** The size of the button. */
  export let size: keyof typeof SIZE = "md"

  /** The behavior of the button when used in an HTML form. */
  export let type: "button" | "submit" | "reset" = "button"

  /** Whether the button is disabled. */
  export let disabled: boolean | undefined = undefined

  /** The URL that the hyperlink points to. **Note**: This turns the button into an `<a>` element. */
  export let href: string | undefined = undefined

  /** Causes the browser to treat the linked URL as a download. Can be used with or without a value. */
  export let download: string | undefined = undefined

  /**
   * The relationship between the linked resource and the current page.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
   */
  export let rel: string | undefined = undefined

  let className = cn("Button", VARIANT[variant], SIZE[size], _class)
</script>

{#if href}
  <a
    sveltekit:prefetch
    class={className}
    {disabled}
    {download}
    {href}
    {rel}
    on:click
  >
    <slot name="icon-start" />
    <slot />
    <slot name="icon-end" />
  </a>
{:else}
  <button class={className} {disabled} {type} on:click>
    <slot name="icon-start" />
    <slot />
    <slot name="icon-end" />
  </button>
{/if}
