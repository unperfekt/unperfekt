export interface ComponentMetadata {
  aria: string
  title: string
  category: string
  href: string
  slug: string
}

export interface ComponentModule {
  default: string
  metadata: ComponentMetadata
}

export const getComponents = async () => {
  const modules = import.meta.glob(
    "../../../node_modules/unperfekt/src/components/*/docs/*.svx",
  )
  const components = (await Promise.all(
    Object.entries(modules).map(([_path, mod]) => mod()),
  )) as ComponentModule[]

  return components
}
