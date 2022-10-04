<script lang="ts" strictEvents>
  import { onDestroy, getContext } from "svelte"

  import { key, type MapContext } from "./context.js"

  export let lat: number
  export let lng: number

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
