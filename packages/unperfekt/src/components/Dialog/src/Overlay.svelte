<script lang="ts" strictEvents>
  import { Portal } from "../../Portal/index.js"

  /** Wheter to show the overlay or not. */
  export let open: boolean = false

  /** DOM Element or CSS Selector. */
  export let target: HTMLElement | string = "body"
</script>

{#if open}
  <Portal target={target} class="isolate bg-transparent">
    <slot />
  </Portal>
{/if}
