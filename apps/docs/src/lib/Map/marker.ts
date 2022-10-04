type LatLng = google.maps.LatLng | google.maps.LatLngLiteral

// export class CustomMarker extends google.maps.OverlayView {
//   marker: google.maps.Marker | null = null
//   map: google.maps.Map | null = null
//   content: OverlayContent | null = null

//   constructor(options: google.maps.MarkerOptions & any) {
//     super()
//     this.setValues(options)
//     this.marker = new google.maps.Marker(options)
//     // this.marker.setMap(this.get("map"))

//     google.maps.event.addListener(this.marker, "click", (evt: Event) => {
//       evt.stopPropagation?.()

//       google.maps.event.trigger(this, "click")
//     })

//     if (this.get("html")) {
//       this.content = new OverlayContent({
//         map: this.get("map"),
//         // marker: this.marker,
//         position: this.getPosition(),
//         html: this.get("html"),
//         // cssClass: this.get("cssClass"),
//       })
//     }

//     // this.setMap(this.get("map"))
//   }

//   onAdd(): void {
//     this.marker!.bindTo("position", this, "position")
//   }

//   onRemove(): void {
//     this.marker!.setMap(null)
//     this.marker = null

//     if (this.content) {
//       this.content.onRemove()
//     }
//   }

//   draw(): void {
//     if (this.content) {
//       this.getPanes()?.overlayLayer.appendChild(this.content.element!)
//     }
//   }

//   getPosition(): LatLng | null {
//     var position = this.get("position")

//     if (position instanceof google.maps.LatLng) {
//       return position
//     } else if ("object" === typeof position) {
//       return new google.maps.LatLng(position.lat, position.lng)
//     }

//     return null
//   }

//   setPosition(position: LatLng): void {
//     this.set("position", position)

//     if (this.content) {
//       this.content.set("position", position)
//       this.content.draw()
//     }
//   }

//   setMap(map: google.maps.Map | null): void {
//     this.set("map", map)
//   }

//   getMap(): google.maps.Map | null {
//     return this.map
//   }
// }

export class MyMarker extends google.maps.OverlayView {
  /** Container Element. */
  el: HTMLElement | null = null
  pane: keyof google.maps.MapPanes
  html: string
  position: LatLng

  constructor(
    html: string,
    pane: keyof google.maps.MapPanes,
    position: LatLng,
  ) {
    super()
    this.html = html
    this.pane = pane
    this.position = position
    this.el = document.createElement("div")
  }

  /**
   * Function is called when the map's panes are ready and the overlay has been
   * added to the map.
   */
  onAdd() {
    const pane = this.getPanes()?.[this.pane]

    pane?.appendChild(this.el!)
  }

  draw() {
    const projection = this.getProjection()
    const point = projection.fromLatLngToDivPixel(this.position)

    if (point === null) {
      return
    }

    this.el!.innerHTML = this.html
    this.el!.style.position = "absolute"
    // this.el!.style.transform = `translate(${point!.x}px, ${point!.y}px)`
    this.el!.style.left = `${point.x}px`
    this.el!.style.top = `${point.y}px`
  }

  onRemove() {
    this.el?.parentNode?.removeChild(this.el)
    this.el = null
  }
}
