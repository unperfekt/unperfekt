<script context="module">
  import { portal } from "../hooks/portal"
</script>

<script lang="ts">
  /**
   * DOM Element or CSS Selector
   */
  export const target: HTMLElement | string = "body"
</script>

<div use:portal={target} hidden>
  <slot />
</div>
