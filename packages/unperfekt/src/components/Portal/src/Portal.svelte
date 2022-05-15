<script lang="ts" strictEvents>
  import { portal } from "./portal"

  /**
   * @name Portal
   *
   * Convinient wrapper to use the portal hook, as it also adds the "hidden"
   * attribute to the element for SSR support.
   */

  /** DOM Element or CSS Selector. */
  export let target: HTMLElement | string = "body"
</script>

<div use:portal={target} hidden {...$$restProps}>
  <slot />
</div>
