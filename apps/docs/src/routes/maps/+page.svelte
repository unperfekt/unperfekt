<script lang="ts">
  import Sdk from "$lib/Map/Sdk.svelte"
  import Map from "$lib/Map/index.svelte"
  import CustomMarker from "$lib/Map/CustomMarker.svelte"

  let ready = $state(false)

  /**
   *
   */
  function init() {
    ready = true
  }

  const center = { lat: 52.52, lng: 13.41 }
  const neighborhoods: google.maps.LatLngLiteral[] = [
    { lat: 52.511, lng: 13.447 },
    { lat: 52.549, lng: 13.422 },
    { lat: 52.497, lng: 13.396 },
    { lat: 52.517, lng: 13.394 },
  ]
</script>

<Sdk ready={init} />

<main class="relative z-20 mx-auto max-w-3xl pt-10 xl:max-w-none">
  <header id="header" class="mb-10 md:flex md:items-start">
    <div class="max-w-4xl flex-auto">
      {#if ready}
        <Map center={center}>
          {#each neighborhoods as { lat, lng }, i (i)}
            <CustomMarker lat={lat} lng={lng} />z
          {/each}
        </Map>
      {/if}
    </div>
  </header>
</main>
