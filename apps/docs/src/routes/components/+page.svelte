<script lang="ts">
  import type { PageData } from "./$types"

  const data: PageData = $props()
</script>

<h1>Hallo</h1>

{#each data.components as component (component.title)}
  <h2>{component.title}</h2>
  <a href={component.href}>{component.title}</a>
{/each}
