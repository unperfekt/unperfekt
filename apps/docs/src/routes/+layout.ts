import type { LayoutLoad } from "./$types"
import type { ComponentMetadata } from "$lib/api/getComponents.js"

type Navigation = Record<string, ComponentMetadata[]>

export const load: LayoutLoad = async ({ fetch }) => {
  const components = await fetch("/api/components.json")
  const json = (await components.json()) as ComponentMetadata[]
  const navigation = json.reduce((acc, component) => {
    if (!acc[component.category]) acc[component.category] = []
    acc[component.category].push(component)
    return acc
  }, {} as Navigation)

  return {
    navigation,
  }
}

// export const csr = false
export const prerender = true
// export const ssr = true
