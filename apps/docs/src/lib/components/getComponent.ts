import { getComponents } from "./getComponents"

export const getComponent = async (params: { slug: string }) => {
  const components = await getComponents()
  const component = components.find(
    ({ metadata }) => metadata.slug === params.slug,
  )

  return component
}
