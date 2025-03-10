import type { PageLoad } from "./$types"

import { getComponent } from "$lib/api/getComponent.js"

export const load = (async ({ params }) => {
  const component = await getComponent(params)
  console.log("componentttttttttttttttttttttttt", component)
  return {
    component: component.default,
    metadata: component.metadata,
  }
}) satisfies PageLoad
