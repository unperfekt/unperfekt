import { getComponent } from "../../lib/components/getComponent.js"

import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async ({ params }) => {
  const component: any = await getComponent(
    params as unknown as { slug: string },
  )

  return {
    body: {
      component: component.default,
      meta: component.metadata,
    },
  }
}
