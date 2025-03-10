import type { PageLoad } from "./$types"

import { getComponents } from "$lib/api/getComponents.js"

export const load = (async () => {
  const components = await getComponents()
  const body = components.map(({ metadata }) => metadata)
  console.log("components", components)
  return {
    components: body,
  }
}) satisfies PageLoad
