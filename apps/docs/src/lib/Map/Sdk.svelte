<script lang="ts" strictEvents>
  import { createEventDispatcher, onMount } from "svelte"
  
  import { mapsLoaded } from "./store.js"
  
  import { browser } from "$app/environment"

  const dispatch = createEventDispatcher()

  $: $mapsLoaded && dispatch("ready")

  if (browser) {
    onMount(() => {
      if ($mapsLoaded) {
        dispatch("ready")
      } else {
        window.initMap = () => {
          mapsLoaded.set(true)
          delete window.initMap
        }
      }
    })
  }
</script>

<svelte:head>
  {#if browser && !$mapsLoaded}
    <script
      defer
      async
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAt-0uP25GzNcKrIbdZotic5VLOB0E46cs&callback=initMap">
    </script>
  {/if}
</svelte:head>
