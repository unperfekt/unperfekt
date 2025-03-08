<svelte:options runes={true} />

<script lang="ts" >
  import type { PageData } from "./$types"

  let { component }: PageData = $props()
  let Comp: any = $derived(component)
</script>

<Comp />
