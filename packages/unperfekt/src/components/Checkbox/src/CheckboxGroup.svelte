<script lang="ts" strictEvents>
  /**
   * @name CheckboxGroup
   */
  import cn from "classnames"

  import Checkbox from "./Checkbox.svelte"

  /** Space-separated list of the case-sensitive classes of the element. */
  let _class: string | undefined = undefined
  export { _class as class }

  /** The id of the element. */
  export let id: string = Math.random().toString(36).substring(2, 15)

  /** The label of the checkbox. */
  export let label: string = ""

  export let group: any[] = []

  /** Chekbox objects in the collection. */
  export let items: any[] = []

  /** The value of the checkbox. */
  // export let value: string = ""

  /** Additional descriptive text. */
  // export let description: string = ""

  /** Whether the checkbox is checked. */
  // export let checked: boolean | undefined = undefined

  /** Whether the checkbox is indeterminate. */
  // export let indeterminate: boolean | undefined = undefined

  /** Whether the checkbox is disabled. */
  // export let disabled: boolean | undefined = undefined

  /** The name of the checkbox. */
  // export let name: string = id

  // const descId = id + "-desc"

  $: console.log("group", group)
</script>

<fieldset aria-labelledby={id} class={cn("CheckboxGroup", _class)}>
  <legend id={id}>{label}</legend>
  {#each items as item (item.id)}
    <Checkbox {...item} id={item.id} bind:group />
  {:else}
    <slot />
  {/each}
</fieldset>
