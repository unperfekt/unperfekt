export const addEvent = <T extends EventTarget>(
  element: T | null,
  event: string,
  callback: () => void,
) => {
  element?.addEventListener(event, callback)

  return () => element?.removeEventListener(event, callback)
}
