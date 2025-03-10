<script lang="ts">
  import type { PageData } from "./$types"

  const props: PageData = $props()
  console.log("component", props)
  // const Comp: any = $derived(props.component)
</script>

<!-- <Comp /> -->
