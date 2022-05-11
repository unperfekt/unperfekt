<script lang="ts" context="module">
  // eslint-disable-next-line import/order
  import type { Load } from "@sveltejs/kit"

  export const load: Load = async ({ fetch }) => {
    const components = await (await fetch("/api/components.json")).json()
    const navigation = components.reduce((acc: any, component: any) => {
      if (!acc[component.category]) acc[component.category] = []
      acc[component.category].push(component)
      return acc as unknown as { [key: string]: any[] }
    }, {})

    return {
      props: {
        navigation,
      },
    }
  }
</script>

<script lang="ts" strictEvents>
  import "../styles/global.css"
  import TopNav from "../components/TopNav.svelte"
  import Nav from "../components/Nav.svelte"

  export let navigation = {}
</script>

<TopNav />
<div class="overflow-hidden">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <div
      class="fixed inset-0 top-16 left-[max(0px,calc(50%-40rem))] right-auto z-20 hidden w-80 overflow-y-auto px-8 pb-10 lg:block"
    >
      <Nav {navigation}>
        <slot name="sidebar" />
      </Nav>
    </div>
    <div class="prose max-w-none pt-8 lg:pl-80">
      <slot />
    </div>
  </div>
</div>
