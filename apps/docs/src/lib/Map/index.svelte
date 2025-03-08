<svelte:options runes={true} />

<script lang="ts">
  import { setContext } from "svelte"

  import { key, type MapContext } from "./context.js"

  let container: HTMLDivElement | undefined = $state()
  let map: google.maps.Map | undefined = $state()

  interface MapProps {
    zoom?: number
    center?: google.maps.LatLngLiteral
    children: () => any
  }

  let { zoom = 12, center = { lat: -34.397, lng: 150.644 }, children }: MapProps =
    $props()

  setContext<MapContext>(key, {
    getMap: () => map!,
    getGoogleMap: () => container!,
  })

  $effect(() => {
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
    map = new window.google.maps.Map(container!, options)
  })
</script>

<div class="gmap" bind:this={container}>
  {#if map && typeof children === "function"}
    {@render children()}
  {/if}
</div>
