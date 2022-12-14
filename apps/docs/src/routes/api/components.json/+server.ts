import { json } from "@sveltejs/kit"

import type { RequestHandler } from "./$types"

import { getComponents } from "$lib/components/getComponents.js"

export const GET = (async () => {
  const components = await getComponents()
  const data = components.map(({ metadata }) => metadata)

  return json(data)
}) satisfies RequestHandler
