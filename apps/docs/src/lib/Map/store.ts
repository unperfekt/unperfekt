import { writable } from "svelte/store"

export const mapsLoading = writable(false)
export const mapsLoaded = $state(false)
//
