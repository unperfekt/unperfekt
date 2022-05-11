import { getComponents } from "../../../lib/components/getComponents"

import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async () => {
  const components = await getComponents()
  const body: any = components.map(({ metadata }) => metadata as unknown)

  return {
    body,
  }
}
