<svelte:options runes={true} />

<div
  class="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 h-16 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10"
>
  <div class="mx-auto h-full max-w-7xl">
    <div
      class="mx-4 h-full border-b border-slate-900/10 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8"
    >
      <div class="relative flex h-full items-center">
        <a
          class="mr-3 w-[2.0625rem] flex-none overflow-hidden md:w-auto"
          href="/"
        >
          Unperfekt Design System
        </a>

        <div class="relative ml-auto hidden items-center lg:flex">
          <nav
            class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200"
          >
            <ul class="flex space-x-8">
              <li>
                <a class="hover:text-sky-500 dark:hover:text-sky-400" href="/"
                  >Docs</a
                >
              </li>
              <li>
                <a
                  href="/components"
                  class="hover:text-sky-500 dark:hover:text-sky-400"
                  >Components</a
                >
              </li>
              <li>
                <a class="hover:text-sky-500 dark:hover:text-sky-400" href="/"
                  >Blog</a
                >
              </li>
            </ul>
          </nav>
          <div
            class="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800"
          >
            <a
              href="https://github.com/unperfekt/unperfekt"
              class="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              ><span class="sr-only">Tailwind CSS on GitHub</span><svg
                viewBox="0 0 16 16"
                class="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                /></svg
              ></a
            >
          </div>
        </div>
        <button
          type="button"
          class="-my-1 ml-auto flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 lg:hidden"
          ><span class="sr-only">Search</span><svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            ><path d="m19 19-3.5-3.5" /><circle cx="11" cy="11" r="6" /></svg
          ></button
        >
        <div class="-my-1 ml-2 lg:hidden">
          <button
            type="button"
            class="flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            ><span class="sr-only">Navigation</span><svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              ><path
                d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            ></button
          >
        </div>
      </div>
    </div>
    <div
      class="flex items-center border-b border-slate-900/10 p-4 dark:border-slate-50/[0.06] lg:hidden"
    >
      <button
        type="button"
        class="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        ><span class="sr-only">Navigation</span><svg width="24" height="24"
          ><path
            d="M5 6h14M5 12h14M5 18h14"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          /></svg
        ></button
      >
      <ol class="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
        <li class="flex items-center">
          Getting Started<svg
            width="3"
            height="6"
            aria-hidden="true"
            class="mx-3 overflow-visible text-slate-400"
            ><path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            /></svg
          >
        </li>
        <li class="truncate font-semibold text-slate-900 dark:text-slate-200">
          Installation: Tailwind CLI
        </li>
      </ol>
    </div>
  </div>
</div>
