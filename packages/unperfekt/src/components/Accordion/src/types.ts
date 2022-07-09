import type { Key } from "../../../state/collection/selection.js"

export interface Item {
  id: Key
  title: string
  description: unknown
}
