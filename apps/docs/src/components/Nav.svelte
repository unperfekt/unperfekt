<svelte:options runes={true} />

<script lang="ts">
  import { default as cn } from "classnames"

  interface Nav {
    navigation: {
      [key: string]: {
        href: string
        title: string
      }[]
    }
    children: () => any
  }

  let props: Nav = $props()

  let mobile = false
</script>

<nav id="nav" class="relative lg:text-sm lg:leading-6">
  <ul>
    <!-- <TopLevelNav mobile={mobile} /> -->
    {#if props.children}
      {@render props.children()}
    {/if}
    {#each Object.entries(props.navigation) as [title, category]}
      <li class="mt-12 lg:mt-8">
        <h5
          class={cn("mb-8 font-semibold lg:mb-3", {
            "text-slate-900 dark:text-slate-200": true,
            "text-slate-400": false,
          })}
        >
          {title}
        </h5>
        <ul
          class={cn(
            "space-y-6 border-l border-slate-100 lg:space-y-2",
            mobile ? "dark:border-slate-700" : "dark:border-slate-800",
          )}
        >
          {#each category as item}
            <a
              class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
              href={item.href}
            >
              {item.title}
            </a>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</nav>
