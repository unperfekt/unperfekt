<script lang="ts" strictEvents>
  import { onMount, setContext } from "svelte"

  import { key, type MapContext } from "./context.js"

  let container: HTMLDivElement
  let map: google.maps.Map

  export let zoom = 12
  export let center = { lat: -34.397, lng: 150.644 }

  setContext<MapContext>(key, {
    getMap: () => map,
    getGoogleMap: () => container,
  })

  onMount(() => {
    const options: google.maps.MapOptions = {
      // disableDefaultUI: true,
      fullscreenControl: false,
      // scrollwheel: false,
      gestureHandling: "cooperative",
      mapTypeControl: false,
      streetViewControl: false,
      zoom,
      center,
      mapId: "d2c30be342f3b206",
    }
    map = new window.google.maps.Map(container, options)
  })
</script>

<div class="gmap" bind:this={container}>
  {#if map}
    <slot />
  {/if}
</div>
