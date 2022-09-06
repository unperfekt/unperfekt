import type { PageLoad } from "./$types"

import { getComponents } from "$lib/components/getComponents.js"

export const load: PageLoad = async () => {
  const components = await getComponents()
  const body = components.map(({ metadata }) => metadata)

  return {
    components: body,
  }
}
