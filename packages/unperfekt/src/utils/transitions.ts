import { linear } from "svelte/easing"

export const scaleIn = {
  start: 0.8,
  opacity: 0.001,
  easing: linear,
  duration: 150,
}
export const fadeIn = { easing: linear, duration: 150 }
export const fadeOut = { easing: linear, duration: 75 }
