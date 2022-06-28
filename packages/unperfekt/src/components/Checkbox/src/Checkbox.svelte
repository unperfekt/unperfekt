<script lang="ts" strictEvents>
  /**
   * @name Checkbox
   */
  import cn from "classnames"

  /** Space-separated list of the case-sensitive classes of the element. */
  let _class: string | undefined = undefined
  export { _class as class }

  /** The id of the element. */
  export let id: string = Math.random().toString(36).substring(2, 15)

  /** The label of the checkbox. */
  export let label: string = ""

  /** The value of the checkbox. */
  export let value: string = ""

  /** Additional descriptive text. */
  export let description: string = ""

  /** Whether the checkbox is checked. */
  export let checked: boolean | undefined = undefined

  /** Binds the checkbox checked state to a group. */
  export let group: unknown[] | null = null

  /** Whether the checkbox is indeterminate. */
  export let indeterminate: boolean | undefined = undefined

  /** Whether the checkbox is disabled. */
  export let disabled: boolean | undefined = undefined

  /** The name of the checkbox. */
  export let name: string = id

  const descId = id + "-desc"

  $: if (!label) console.log("a label is required")
  $: console.log(group)
</script>

<div class="Checkbox">
  <div class="Checkbox-box">
    <input
      class={cn(
        "Checkbox-input",
        {
          disabled,
          indeterminate,
          checked,
        },
        _class,
      )}
      aria-checked={indeterminate ? "mixed" : checked}
      aria-describedby={description ? descId : undefined}
      disabled={disabled}
      id={id}
      indeterminate={indeterminate}
      name={name}
      type="checkbox"
      value={value}
      checked={checked}
      on:input
      {...$$restProps}
    />
  </div>
  <div class="Checkbox-text">
    <label class="Checkbox-label" for={name}>{label}</label>
    {#if description}
      <p class="Checkbox-desc" id={descId}>{description}</p>
    {/if}
  </div>
</div>
