<script lang="ts">
  /**
   * @name Portal
   *
   * Convinient wrapper to use the portal hook, as it also adds the "hidden"
   * attribute to the element for SSR support.
   */
  import { portal } from "./portal.js"

  /** DOM Element or CSS Selector. */
  export let target: HTMLElement | string = "body"
</script>

<div use:portal={target} hidden {...$$restProps}>
  <slot />
</div>
