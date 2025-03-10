<script lang="ts">
  import type { LayoutProps } from "./$types"

  import TopNav from "$lib/components/TopNav.svelte"
  import Nav from "$lib/components/Nav.svelte"

  import "../styles/app.css"

  const props: LayoutProps = $props()
</script>

<TopNav />
<div class="overflow-hidden">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <div
      class="fixed inset-0 left-[max(0px,calc(50%-40rem))] right-auto top-16 z-20 hidden w-80 overflow-y-auto px-8 pb-10 lg:block"
    >
      <Nav navigation={props.data.navigation}>
        <!-- <slot name="sidebar" /> -->
      </Nav>
    </div>
    <div class="prose max-w-none pt-8 lg:pl-80">
      {@render props.children?.()}
    </div>
  </div>
</div>
