<svelte:options runes={true} />

<script lang="ts">
  import { onDestroy, getContext } from "svelte"

  import { key, type MapContext } from "./context.js"

  interface MarkerProps {
    lat: number
    lng: number
    [key: string]: unknown
  }

  const { lat, lng }: MarkerProps = $props()

  const { getMap } = getContext<MapContext>(key)
  const map = getMap()

  const marker = new window.google.maps.Marker({
    position: { lat, lng },
    map,
  })

  onDestroy(() => {
    marker.setMap(null)
  })
</script>
