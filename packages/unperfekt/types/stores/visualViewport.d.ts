export declare const createVisualViewport: () =>
  | {
      subscribe: (
        this: void,
        run: import("svelte/store").Subscriber<{
          width: number
          height: number
        }>,
        invalidate?:
          | ((
              value?:
                | {
                    width: number
                    height: number
                  }
                | undefined,
            ) => void)
          | undefined,
      ) => import("svelte/store").Unsubscriber
    }
  | undefined
export declare const visualViewport:
  | {
      subscribe: (
        this: void,
        run: import("svelte/store").Subscriber<{
          width: number
          height: number
        }>,
        invalidate?:
          | ((
              value?:
                | {
                    width: number
                    height: number
                  }
                | undefined,
            ) => void)
          | undefined,
      ) => import("svelte/store").Unsubscriber
    }
  | undefined
