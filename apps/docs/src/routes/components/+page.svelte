<script lang="ts" strictEvents>
  import type { PageData } from "./$types"

  export let data: PageData
</script>

<h1>Hallo</h1>

{#each data.components as component}
  <h2>{component.title}</h2>
  <a href={component.href}>{component.title}</a>
{/each}
