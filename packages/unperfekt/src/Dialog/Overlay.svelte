<script lang="ts">
  import { Portal } from "../Portal"

  /** Wheter the portal is open or not. */
  export let isOpen = false
</script>

{#if isOpen}
  <Portal>
    <div class="isolate bg-transparent">
      <slot />
    </div>
  </Portal>
{/if}
