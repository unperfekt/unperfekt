<script lang="ts" strictEvents>
  /**
   * @name ButtonGroup
   *
   * ButtonGroup is a container for buttons.
   */
  import cn from "classnames"

  /** Space-separated list of the case-sensitive classes of the element. */
  let _class: string | undefined = undefined
  export { _class as class }

  /** Whether the buttons are disabled. */
  export let disabled: boolean | undefined = undefined
</script>

<div
  class={cn(
    "ButtonGroup",
    {
      "is-disabled": disabled,
    },
    _class,
  )}
  disabled={disabled}
  {...$$restProps}
>
  <slot />
</div>
