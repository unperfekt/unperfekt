export const composedPathContains = (event: Event, target: HTMLElement) =>
  event.composedPath().some((node) => node === target)
