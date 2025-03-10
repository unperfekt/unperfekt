<script lang="ts">
  import { onMount } from "svelte"

  import { mapsLoaded } from "./store.js"

  import { browser } from "$app/environment"

  interface SdkProps {
    ready: () => void
  }

  const { ready }: SdkProps = $props()

  onMount(() => {
    if ($mapsLoaded) {
      ready()
    } else {
      window.initMap = () => {
        mapsLoaded.set(true)
        ready()
        delete window.initMap
      }
    }
  })
</script>

<svelte:head>
  {#if browser && !$mapsLoaded}
    <script
      defer
      async
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAt-0uP25GzNcKrIbdZotic5VLOB0E46cs&callback=initMap"
    >
    </script>
  {/if}
</svelte:head>
