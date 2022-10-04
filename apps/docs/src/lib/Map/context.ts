const key = "GoogleMaps"

export { key }

export interface MapContext {
  getMap: () => google.maps.Map
  getGoogleMap: () => HTMLDivElement
}
