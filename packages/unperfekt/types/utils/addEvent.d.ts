export declare const addEvent: <T extends EventTarget>(
  element: T | null,
  event: string,
  callback: () => void,
) => () => void | undefined
