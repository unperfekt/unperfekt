<script>
  export let components
</script>

<h1>Hallo</h1>

{#each components as component}
  <h2>{component.title}</h2>
  <a sveltekit:prefetch href={component.href}>{component.title}</a>
{/each}
