<script lang="ts" >
  /**
   * @name ButtonGroup
   *
   * ButtonGroup is a container for buttons.
   */
  import { default as cn } from "classnames"
  interface ButtonGroupProps {
    /** Space-separated list of the case-sensitive classes of the element. */
    class?: string
    /** Whether the buttons are disabled. */
    disabled?: boolean
    /** The children to render inside the button group. */
    children?: () => any
  }

  let { class: _class, disabled, children, ...restProps }: ButtonGroupProps = $props()
</script>

<div
  class={cn(
    "ButtonGroup",
    {
      "is-disabled": disabled,
    },
    _class,
  )}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>
