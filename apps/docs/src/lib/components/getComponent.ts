import { getComponents } from "./getComponents.js"

export const getComponent = async (params: {
  slug: string
}): Promise<unknown> => {
  const components = await getComponents()
  const component = components.find(
    ({ metadata }) => metadata.slug === params.slug,
  )

  return component 
}
