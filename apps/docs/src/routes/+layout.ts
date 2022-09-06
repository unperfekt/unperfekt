import type { LayoutLoad } from "./$types"
import type { ComponentMetadata } from "$lib/components/getComponents.js"

interface Navigation {
  [key: string]: ComponentMetadata[]
}

export const load: LayoutLoad = async ({ fetch }) => {
  const components = await fetch("/api/components.json")
  const json: ComponentMetadata[] = await components.json()
  const navigation = json.reduce((acc, component) => {
    if (!acc[component.category]) acc[component.category] = []
    acc[component.category].push(component)
    return acc
  }, {} as Navigation)

  return {
    navigation,
  }
}

export const csr = false
export const prerender = true
