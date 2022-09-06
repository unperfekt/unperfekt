<script lang="ts" strictEvents>
  import type { PageData } from "./$types"

  export let data: PageData
</script>

<svelte:component this={data.component} />
