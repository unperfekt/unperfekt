<script context="module">
  import { portal } from "../../hooks/portal"
</script>

<script lang="ts" strictEvents>
  /**
   * DOM Element or CSS Selector.
   *
   * @default "body"
   */
  export const target: HTMLElement | string = "body"
</script>

<div use:portal={target} hidden>
  <slot />
</div>
