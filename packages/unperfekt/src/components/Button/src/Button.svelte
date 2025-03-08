<svelte:options runes={true} />

<script lang="ts" >
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
  import type { HTMLAttributes } from "svelte/elements"

  interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Space-separated list of the case-sensitive classes of the element. */
    class?: string
    /** The visual appeareance of the button. */
    variant?: keyof typeof VARIANT
    /** The size of the button. */
    size?: keyof typeof SIZE
    /** Whether the button is disabled. */
    disabled?: boolean
    /** The icon to display on the button. */
    icon?: () => any
    /** The children to render inside the button. */
    children?: () => any
  }

  let { variant = "primary", size = "md", disabled, class: classname, icon, children, onclick, onmouseenter, onmouseleave, ...restProps }: ButtonProps = $props()
</script>

<button
  class={cn(
    "Button",
    {
      "is-disabled": disabled,
    },
    VARIANT[variant],
    SIZE[size],
    classname,
  )}
  disabled={disabled}
  {onclick}
  {onmouseenter}
  {onmouseleave}
  {...restProps}
>
  {#if icon}
    {@render icon()}
  {/if}
  {#if children}
    {@render children()}
  {/if}
</button>
