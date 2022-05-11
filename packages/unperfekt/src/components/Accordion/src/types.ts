import type { Key } from "../../../state/collection/selection"

export interface Item {
  id: Key
  title: string
  description: unknown
}
