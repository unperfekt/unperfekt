<script lang="ts" strictEvents>
  import TopNav from "../components/TopNav.svelte"
  import Nav from "../components/Nav.svelte"

  import type { PageData } from "./$types"

  import "../styles/global.css"

  export let data: PageData
</script>

<TopNav />
<div class="overflow-hidden">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <div
      class="fixed inset-0 top-16 left-[max(0px,calc(50%-40rem))] right-auto z-20 hidden w-80 overflow-y-auto px-8 pb-10 lg:block"
    >
      <Nav navigation={data.navigation}>
        <slot name="sidebar" />
      </Nav>
    </div>
    <div class="prose max-w-none pt-8 lg:pl-80">
      <slot />
    </div>
  </div>
</div>
