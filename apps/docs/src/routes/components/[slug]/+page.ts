import type { PageLoad } from "./$types"

import { getComponent } from "$lib/components/getComponent.js"

export const load: PageLoad = async ({ params }) => {
  const component = await getComponent(params)

  return {
    component: component.default,
    metadata: component.metadata,
  }
}
