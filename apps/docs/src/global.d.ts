/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

declare global {
  interface Window {
    initMap?: () => void
  }
}

export {}
