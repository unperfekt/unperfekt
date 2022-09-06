import { getComponents, type ComponentModule } from "./getComponents.js"

export const getComponent = async (
  params: Record<string, unknown>,
): Promise<ComponentModule> => {
  const components = await getComponents()
  const component = components.find(
    ({ metadata }) => metadata.slug === params.slug,
  )

  if (!component) throw new Error("No such component!")

  return component
}
