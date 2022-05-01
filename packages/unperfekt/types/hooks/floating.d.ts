import { type ComputePositionConfig } from "@floating-ui/dom"
export declare const createFloating: (
  options?: Partial<ComputePositionConfig>,
) => ((node: HTMLElement) => {
  destroy: () => void
})[]
