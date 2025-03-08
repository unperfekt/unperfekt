<script lang="ts" >
  import { default as cn } from "classnames"

  import { SIZE, VARIANT } from "./constants.js"

  /** CSS class for the element. */
  let _class: string | undefined = undefined
  export { _class as class }

  /** The visual style of the button. */
  export let variant: keyof typeof VARIANT = "primary"

  /** The size of the button. */
  export let size: keyof typeof SIZE = "md"

  /** Whether the link is disabled. */
  export let disabled: boolean | undefined = undefined

  /**
   * The URL that the hyperlink points to.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href
   */
  export let href: string | undefined = undefined

  let className = cn(
    "Button",
    {
      "is-disabled": disabled,
    },
    VARIANT[variant],
    SIZE[size],
    _class,
  )
</script>

<a
  class={className}
  href={disabled ? undefined : href}
  on:click
  on:mouseenter
  on:mouseleave
  {...$$restProps}
>
  <slot name="icon" />
  <slot />
</a>
