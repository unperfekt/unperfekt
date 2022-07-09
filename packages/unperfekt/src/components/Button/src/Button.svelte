<script lang="ts" strictEvents>
  /**
   * @name Button
   *
   * Buttons allow users to perform an action or to navigate to another page.
   * They have multiple styles for various needs, and are ideal for calling
   * attention to where a user needs to do something in order to move forward
   * in a flow.
   */
  import { default as cn } from "classnames"

  import { SIZE, VARIANT } from "./constants.js"

  /** Space-separated list of the case-sensitive classes of the element. */
  let _class: string | undefined = undefined
  export { _class as class }

  /** The visual appeareance of the button. */
  export let variant: keyof typeof VARIANT = "primary"

  /** The size of the button. */
  export let size: keyof typeof SIZE = "md"

  /** Whether the button is disabled. */
  export let disabled: boolean | undefined = undefined
</script>

<button
  class={cn(
    "Button",
    {
      "is-disabled": disabled,
    },
    VARIANT[variant],
    SIZE[size],
    _class,
  )}
  disabled={disabled}
  on:click
  on:mouseenter
  on:mouseleave
  {...$$restProps}
>
  <slot name="icon" />
  <slot />
</button>
