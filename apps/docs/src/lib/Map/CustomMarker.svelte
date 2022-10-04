<script lang="ts" strictEvents>
  import { onMount, getContext, onDestroy } from "svelte"

  import { key, type MapContext } from "./context.js"

  import type { MyMarker } from "./marker.js"

  export let lat: number
  export let lng: number

  const { getMap } = getContext<MapContext>(key)
  const map = getMap()

  const svg = `
    <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" fill="#000000" r="17" stroke="white" stroke-width="2"></circle>
      <text class="text-sm font-sans" fill="white" text-anchor="middle" x="50%" y="60%">${1}</text>
    </svg>
  `

  let overlay: MyMarker

  onMount(async () => {
    const { MyMarker } = await import("./marker.js")

    overlay = new MyMarker(
      svg,
      "overlayLayer",
      new window.google.maps.LatLng(lat, lng),
    )

    overlay.setMap(map)
  })

  onDestroy(() => {
    overlay.setMap(null)
  })
</script>
