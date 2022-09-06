// @migration task: Check imports
import { json } from "@sveltejs/kit"

import { getComponents } from "$lib/components/getComponents.js"

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
  const components = await getComponents()
  const data = components.map(({ metadata }) => metadata)

  return json(data)
}
