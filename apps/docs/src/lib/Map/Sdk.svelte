<svelte:options runes={true} />

<script lang="ts">
  import { mapsLoaded } from "./store.js"

  import { browser } from "$app/environment"
  import { onMount } from "svelte"

  interface SdkProps {
    ready: () => void
  }

  let { ready }: SdkProps = $props()

  onMount(() => {
    if ($mapsLoaded) {
      ready()
    } else {
      window.initMap = () => {
        mapsLoaded.set(true)
        delete window.initMap
        ready()
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
