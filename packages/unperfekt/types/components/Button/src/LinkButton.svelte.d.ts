import { SvelteComponentTyped } from "svelte"
declare const __propDef: {
  props: {
    "charset"?: string | undefined
    "coords"?: string | undefined
    "download"?: string | undefined
    "hreflang"?: string | undefined
    "name"?: string | undefined
    "ping"?: string | undefined
    "referrerPolicy"?: string | undefined
    "rel"?: string | undefined
    "relList"?: DOMTokenList | undefined
    "rev"?: string | undefined
    "shape"?: string | undefined
    "target"?: string | undefined
    "text"?: string | undefined
    "type"?: string | undefined
    "addEventListener"?:
      | {
          <K extends keyof HTMLElementEventMap>(
            type: K,
            listener: (
              this: HTMLAnchorElement,
              ev: HTMLElementEventMap[K],
            ) => any,
            options?: boolean | AddEventListenerOptions | undefined,
          ): void
          (
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions | undefined,
          ): void
        }
      | undefined
    "removeEventListener"?:
      | {
          <K_1 extends keyof HTMLElementEventMap>(
            type: K_1,
            listener: (
              this: HTMLAnchorElement,
              ev: HTMLElementEventMap[K_1],
            ) => any,
            options?: boolean | EventListenerOptions | undefined,
          ): void
          (
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | EventListenerOptions | undefined,
          ): void
        }
      | undefined
    "accessKey"?: string | undefined
    "accessKeyLabel"?: string | undefined
    "autocapitalize"?: string | undefined
    "dir"?: string | undefined
    "draggable"?: boolean | undefined
    "hidden"?: boolean | undefined
    "innerText"?: string | undefined
    "lang"?: string | undefined
    "offsetHeight"?: number | undefined
    "offsetLeft"?: number | undefined
    "offsetParent"?: Element | null | undefined
    "offsetTop"?: number | undefined
    "offsetWidth"?: number | undefined
    "outerText"?: string | undefined
    "spellcheck"?: boolean | undefined
    "title"?: string | undefined
    "translate"?: boolean | undefined
    "attachInternals"?: (() => ElementInternals) | undefined
    "click"?: (() => void) | undefined
    "attributes"?: NamedNodeMap | undefined
    "classList"?: DOMTokenList | undefined
    "className"?: string | undefined
    "clientHeight"?: number | undefined
    "clientLeft"?: number | undefined
    "clientTop"?: number | undefined
    "clientWidth"?: number | undefined
    "id"?: string | undefined
    "localName"?: string | undefined
    "namespaceURI"?: string | null | undefined
    "onfullscreenchange"?:
      | ((this: Element, ev: Event) => any)
      | null
      | undefined
    "onfullscreenerror"?: ((this: Element, ev: Event) => any) | null | undefined
    "outerHTML"?: string | undefined
    "ownerDocument"?: Document | undefined
    "part"?: DOMTokenList | undefined
    "prefix"?: string | null | undefined
    "scrollHeight"?: number | undefined
    "scrollLeft"?: number | undefined
    "scrollTop"?: number | undefined
    "scrollWidth"?: number | undefined
    "shadowRoot"?: ShadowRoot | null | undefined
    "slot"?: string | undefined
    "tagName"?: string | undefined
    "attachShadow"?: ((init: ShadowRootInit) => ShadowRoot) | undefined
    "closest"?:
      | {
          <K_2 extends keyof HTMLElementTagNameMap>(selector: K_2):
            | HTMLElementTagNameMap[K_2]
            | null
          <K_3 extends keyof SVGElementTagNameMap>(selector: K_3):
            | SVGElementTagNameMap[K_3]
            | null
          <E extends Element = Element>(selectors: string): E | null
        }
      | undefined
    "getAttribute"?: ((qualifiedName: string) => string | null) | undefined
    "getAttributeNS"?:
      | ((namespace: string | null, localName: string) => string | null)
      | undefined
    "getAttributeNames"?: (() => string[]) | undefined
    "getAttributeNode"?: ((qualifiedName: string) => Attr | null) | undefined
    "getAttributeNodeNS"?:
      | ((namespace: string | null, localName: string) => Attr | null)
      | undefined
    "getBoundingClientRect"?: (() => DOMRect) | undefined
    "getClientRects"?: (() => DOMRectList) | undefined
    "getElementsByClassName"?:
      | ((classNames: string) => HTMLCollectionOf<Element>)
      | undefined
    "getElementsByTagName"?:
      | {
          <K_4 extends keyof HTMLElementTagNameMap>(
            qualifiedName: K_4,
          ): HTMLCollectionOf<HTMLElementTagNameMap[K_4]>
          <K_5 extends keyof SVGElementTagNameMap>(
            qualifiedName: K_5,
          ): HTMLCollectionOf<SVGElementTagNameMap[K_5]>
          (qualifiedName: string): HTMLCollectionOf<Element>
        }
      | undefined
    "getElementsByTagNameNS"?:
      | {
          (
            namespaceURI: "http://www.w3.org/1999/xhtml",
            localName: string,
          ): HTMLCollectionOf<HTMLElement>
          (
            namespaceURI: "http://www.w3.org/2000/svg",
            localName: string,
          ): HTMLCollectionOf<SVGElement>
          (
            namespace: string | null,
            localName: string,
          ): HTMLCollectionOf<Element>
        }
      | undefined
    "hasAttribute"?: ((qualifiedName: string) => boolean) | undefined
    "hasAttributeNS"?:
      | ((namespace: string | null, localName: string) => boolean)
      | undefined
    "hasAttributes"?: (() => boolean) | undefined
    "hasPointerCapture"?: ((pointerId: number) => boolean) | undefined
    "insertAdjacentElement"?:
      | ((where: InsertPosition, element: Element) => Element | null)
      | undefined
    "insertAdjacentHTML"?:
      | ((position: InsertPosition, text: string) => void)
      | undefined
    "insertAdjacentText"?:
      | ((where: InsertPosition, data: string) => void)
      | undefined
    "matches"?: ((selectors: string) => boolean) | undefined
    "releasePointerCapture"?: ((pointerId: number) => void) | undefined
    "removeAttribute"?: ((qualifiedName: string) => void) | undefined
    "removeAttributeNS"?:
      | ((namespace: string | null, localName: string) => void)
      | undefined
    "removeAttributeNode"?: ((attr: Attr) => Attr) | undefined
    "requestFullscreen"?:
      | ((options?: FullscreenOptions | undefined) => Promise<void>)
      | undefined
    "requestPointerLock"?: (() => void) | undefined
    "scroll"?:
      | {
          (options?: ScrollToOptions | undefined): void
          (x: number, y: number): void
        }
      | undefined
    "scrollBy"?:
      | {
          (options?: ScrollToOptions | undefined): void
          (x: number, y: number): void
        }
      | undefined
    "scrollIntoView"?:
      | ((arg?: boolean | ScrollIntoViewOptions | undefined) => void)
      | undefined
    "scrollTo"?:
      | {
          (options?: ScrollToOptions | undefined): void
          (x: number, y: number): void
        }
      | undefined
    "setAttribute"?:
      | ((qualifiedName: string, value: string) => void)
      | undefined
    "setAttributeNS"?:
      | ((
          namespace: string | null,
          qualifiedName: string,
          value: string,
        ) => void)
      | undefined
    "setAttributeNode"?: ((attr: Attr) => Attr | null) | undefined
    "setAttributeNodeNS"?: ((attr: Attr) => Attr | null) | undefined
    "setPointerCapture"?: ((pointerId: number) => void) | undefined
    "toggleAttribute"?:
      | ((qualifiedName: string, force?: boolean | undefined) => boolean)
      | undefined
    "webkitMatchesSelector"?: ((selectors: string) => boolean) | undefined
    "baseURI"?: string | undefined
    "childNodes"?: NodeListOf<ChildNode> | undefined
    "firstChild"?: ChildNode | null | undefined
    "isConnected"?: boolean | undefined
    "lastChild"?: ChildNode | null | undefined
    "nextSibling"?: ChildNode | null | undefined
    "nodeName"?: string | undefined
    "nodeType"?: number | undefined
    "nodeValue"?: string | null | undefined
    "parentElement"?: HTMLElement | null | undefined
    "parentNode"?: ParentNode | null | undefined
    "previousSibling"?: ChildNode | null | undefined
    "textContent"?: string | null | undefined
    "appendChild"?: (<T extends Node>(node: T) => T) | undefined
    "cloneNode"?: ((deep?: boolean | undefined) => Node) | undefined
    "compareDocumentPosition"?: ((other: Node) => number) | undefined
    "contains"?: ((other: Node | null) => boolean) | undefined
    "getRootNode"?:
      | ((options?: GetRootNodeOptions | undefined) => Node)
      | undefined
    "hasChildNodes"?: (() => boolean) | undefined
    "insertBefore"?:
      | (<T_1 extends Node>(node: T_1, child: Node | null) => T_1)
      | undefined
    "isDefaultNamespace"?: ((namespace: string | null) => boolean) | undefined
    "isEqualNode"?: ((otherNode: Node | null) => boolean) | undefined
    "isSameNode"?: ((otherNode: Node | null) => boolean) | undefined
    "lookupNamespaceURI"?:
      | ((prefix: string | null) => string | null)
      | undefined
    "lookupPrefix"?: ((namespace: string | null) => string | null) | undefined
    "normalize"?: (() => void) | undefined
    "removeChild"?: (<T_2 extends Node>(child: T_2) => T_2) | undefined
    "replaceChild"?:
      | (<T_3 extends Node>(node: Node, child: T_3) => T_3)
      | undefined
    "ATTRIBUTE_NODE"?: number | undefined
    "CDATA_SECTION_NODE"?: number | undefined
    "COMMENT_NODE"?: number | undefined
    "DOCUMENT_FRAGMENT_NODE"?: number | undefined
    "DOCUMENT_NODE"?: number | undefined
    "DOCUMENT_POSITION_CONTAINED_BY"?: number | undefined
    "DOCUMENT_POSITION_CONTAINS"?: number | undefined
    "DOCUMENT_POSITION_DISCONNECTED"?: number | undefined
    "DOCUMENT_POSITION_FOLLOWING"?: number | undefined
    "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC"?: number | undefined
    "DOCUMENT_POSITION_PRECEDING"?: number | undefined
    "DOCUMENT_TYPE_NODE"?: number | undefined
    "ELEMENT_NODE"?: number | undefined
    "ENTITY_NODE"?: number | undefined
    "ENTITY_REFERENCE_NODE"?: number | undefined
    "NOTATION_NODE"?: number | undefined
    "PROCESSING_INSTRUCTION_NODE"?: number | undefined
    "TEXT_NODE"?: number | undefined
    "dispatchEvent"?: ((event: Event) => boolean) | undefined
    "ariaAtomic"?: string | null | undefined
    "ariaAutoComplete"?: string | null | undefined
    "ariaBusy"?: string | null | undefined
    "ariaChecked"?: string | null | undefined
    "ariaColCount"?: string | null | undefined
    "ariaColIndex"?: string | null | undefined
    "ariaColSpan"?: string | null | undefined
    "ariaCurrent"?: string | null | undefined
    "ariaDisabled"?: string | null | undefined
    "ariaExpanded"?: string | null | undefined
    "ariaHasPopup"?: string | null | undefined
    "ariaHidden"?: string | null | undefined
    "ariaKeyShortcuts"?: string | null | undefined
    "ariaLabel"?: string | null | undefined
    "ariaLevel"?: string | null | undefined
    "ariaLive"?: string | null | undefined
    "ariaModal"?: string | null | undefined
    "ariaMultiLine"?: string | null | undefined
    "ariaMultiSelectable"?: string | null | undefined
    "ariaOrientation"?: string | null | undefined
    "ariaPlaceholder"?: string | null | undefined
    "ariaPosInSet"?: string | null | undefined
    "ariaPressed"?: string | null | undefined
    "ariaReadOnly"?: string | null | undefined
    "ariaRequired"?: string | null | undefined
    "ariaRoleDescription"?: string | null | undefined
    "ariaRowCount"?: string | null | undefined
    "ariaRowIndex"?: string | null | undefined
    "ariaRowSpan"?: string | null | undefined
    "ariaSelected"?: string | null | undefined
    "ariaSetSize"?: string | null | undefined
    "ariaSort"?: string | null | undefined
    "ariaValueMax"?: string | null | undefined
    "ariaValueMin"?: string | null | undefined
    "ariaValueNow"?: string | null | undefined
    "ariaValueText"?: string | null | undefined
    "animate"?:
      | ((
          keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
          options?: number | KeyframeAnimationOptions | undefined,
        ) => Animation)
      | undefined
    "getAnimations"?:
      | ((options?: GetAnimationsOptions | undefined) => Animation[])
      | undefined
    "after"?: ((...nodes: (string | Node)[]) => void) | undefined
    "before"?: ((...nodes: (string | Node)[]) => void) | undefined
    "remove"?: (() => void) | undefined
    "replaceWith"?: ((...nodes: (string | Node)[]) => void) | undefined
    "innerHTML"?: string | undefined
    "nextElementSibling"?: Element | null | undefined
    "previousElementSibling"?: Element | null | undefined
    "childElementCount"?: number | undefined
    "children"?: HTMLCollection | undefined
    "firstElementChild"?: Element | null | undefined
    "lastElementChild"?: Element | null | undefined
    "append"?: ((...nodes: (string | Node)[]) => void) | undefined
    "prepend"?: ((...nodes: (string | Node)[]) => void) | undefined
    "querySelector"?:
      | {
          <K_6 extends keyof HTMLElementTagNameMap>(selectors: K_6):
            | HTMLElementTagNameMap[K_6]
            | null
          <K_7 extends keyof SVGElementTagNameMap>(selectors: K_7):
            | SVGElementTagNameMap[K_7]
            | null
          <E_1 extends Element = Element>(selectors: string): E_1 | null
        }
      | undefined
    "querySelectorAll"?:
      | {
          <K_8 extends keyof HTMLElementTagNameMap>(selectors: K_8): NodeListOf<
            HTMLElementTagNameMap[K_8]
          >
          <K_9 extends keyof SVGElementTagNameMap>(selectors: K_9): NodeListOf<
            SVGElementTagNameMap[K_9]
          >
          <E_2 extends Element = Element>(selectors: string): NodeListOf<E_2>
        }
      | undefined
    "replaceChildren"?: ((...nodes: (string | Node)[]) => void) | undefined
    "assignedSlot"?: HTMLSlotElement | null | undefined
    "oncopy"?:
      | ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any)
      | null
      | undefined
    "oncut"?:
      | ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any)
      | null
      | undefined
    "onpaste"?:
      | ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any)
      | null
      | undefined
    "style"?: CSSStyleDeclaration | undefined
    "contentEditable"?: string | undefined
    "enterKeyHint"?: string | undefined
    "inputMode"?: string | undefined
    "isContentEditable"?: boolean | undefined
    "onabort"?:
      | ((this: GlobalEventHandlers, ev: UIEvent) => any)
      | null
      | undefined
    "onanimationcancel"?:
      | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
      | null
      | undefined
    "onanimationend"?:
      | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
      | null
      | undefined
    "onanimationiteration"?:
      | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
      | null
      | undefined
    "onanimationstart"?:
      | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
      | null
      | undefined
    "onauxclick"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "onblur"?:
      | ((this: GlobalEventHandlers, ev: FocusEvent) => any)
      | null
      | undefined
    "oncanplay"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "oncanplaythrough"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onchange"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onclick"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "onclose"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "oncontextmenu"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "oncuechange"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "ondblclick"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "ondrag"?:
      | ((this: GlobalEventHandlers, ev: DragEvent) => any)
      | null
      | undefined
    "ondragend"?:
      | ((this: GlobalEventHandlers, ev: DragEvent) => any)
      | null
      | undefined
    "ondragenter"?:
      | ((this: GlobalEventHandlers, ev: DragEvent) => any)
      | null
      | undefined
    "ondragleave"?:
      | ((this: GlobalEventHandlers, ev: DragEvent) => any)
      | null
      | undefined
    "ondragover"?:
      | ((this: GlobalEventHandlers, ev: DragEvent) => any)
      | null
      | undefined
    "ondragstart"?:
      | ((this: GlobalEventHandlers, ev: DragEvent) => any)
      | null
      | undefined
    "ondrop"?:
      | ((this: GlobalEventHandlers, ev: DragEvent) => any)
      | null
      | undefined
    "ondurationchange"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onemptied"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onended"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onerror"?: OnErrorEventHandler | undefined
    "onfocus"?:
      | ((this: GlobalEventHandlers, ev: FocusEvent) => any)
      | null
      | undefined
    "onformdata"?:
      | ((this: GlobalEventHandlers, ev: FormDataEvent) => any)
      | null
      | undefined
    "ongotpointercapture"?:
      | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
      | null
      | undefined
    "oninput"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "oninvalid"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onkeydown"?:
      | ((this: GlobalEventHandlers, ev: KeyboardEvent) => any)
      | null
      | undefined
    "onkeypress"?:
      | ((this: GlobalEventHandlers, ev: KeyboardEvent) => any)
      | null
      | undefined
    "onkeyup"?:
      | ((this: GlobalEventHandlers, ev: KeyboardEvent) => any)
      | null
      | undefined
    "onload"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onloadeddata"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onloadedmetadata"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onloadstart"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onlostpointercapture"?:
      | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
      | null
      | undefined
    "onmousedown"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "onmouseenter"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "onmouseleave"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "onmousemove"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "onmouseout"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "onmouseover"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "onmouseup"?:
      | ((this: GlobalEventHandlers, ev: MouseEvent) => any)
      | null
      | undefined
    "onpause"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onplay"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onplaying"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onpointercancel"?:
      | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
      | null
      | undefined
    "onpointerdown"?:
      | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
      | null
      | undefined
    "onpointerenter"?:
      | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
      | null
      | undefined
    "onpointerleave"?:
      | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
      | null
      | undefined
    "onpointermove"?:
      | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
      | null
      | undefined
    "onpointerout"?:
      | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
      | null
      | undefined
    "onpointerover"?:
      | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
      | null
      | undefined
    "onpointerup"?:
      | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
      | null
      | undefined
    "onprogress"?:
      | ((this: GlobalEventHandlers, ev: ProgressEvent<EventTarget>) => any)
      | null
      | undefined
    "onratechange"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onreset"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onresize"?:
      | ((this: GlobalEventHandlers, ev: UIEvent) => any)
      | null
      | undefined
    "onscroll"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onsecuritypolicyviolation"?:
      | ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any)
      | null
      | undefined
    "onseeked"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onseeking"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onselect"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onselectionchange"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onselectstart"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onslotchange"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onstalled"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onsubmit"?:
      | ((this: GlobalEventHandlers, ev: SubmitEvent) => any)
      | null
      | undefined
    "onsuspend"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "ontimeupdate"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "ontoggle"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "ontouchcancel"?:
      | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
      | null
      | undefined
    "ontouchend"?:
      | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
      | null
      | undefined
    "ontouchmove"?:
      | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
      | null
      | undefined
    "ontouchstart"?:
      | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
      | null
      | undefined
    "ontransitioncancel"?:
      | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
      | null
      | undefined
    "ontransitionend"?:
      | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
      | null
      | undefined
    "ontransitionrun"?:
      | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
      | null
      | undefined
    "ontransitionstart"?:
      | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
      | null
      | undefined
    "onvolumechange"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onwaiting"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onwebkitanimationend"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onwebkitanimationiteration"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onwebkitanimationstart"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onwebkittransitionend"?:
      | ((this: GlobalEventHandlers, ev: Event) => any)
      | null
      | undefined
    "onwheel"?:
      | ((this: GlobalEventHandlers, ev: WheelEvent) => any)
      | null
      | undefined
    "autofocus"?: boolean | undefined
    "dataset"?: DOMStringMap | undefined
    "nonce"?: string | undefined
    "tabIndex"?: number | undefined
    "blur"?: (() => void) | undefined
    "focus"?: ((options?: FocusOptions | undefined) => void) | undefined
    "hash"?: string | undefined
    "host"?: string | undefined
    "hostname"?: string | undefined
    "href"?: string | undefined
    "toString": (() => string) & (() => string)
    "origin"?: string | undefined
    "password"?: string | undefined
    "pathname"?: string | undefined
    "port"?: string | undefined
    "protocol"?: string | undefined
    "search"?: string | undefined
    "username"?: string | undefined
    /** CSS class for the element. */
    "class"?: string | undefined
    "variant"?:
      | "primary"
      | "outline"
      | "dark"
      | "danger"
      | "on-danger"
      | undefined
    "size"?: "sm" | "md" | "lg" | undefined
    "disabled"?: boolean | undefined
    "sveltekit:prefetch"?: boolean | undefined
    "sveltekit:reload"?: boolean | undefined
    "sveltekit:noscroll"?: boolean | undefined
  }
  slots: {
    icon: {}
    default: {}
  }
  getters: {}
  events: {
    click: MouseEvent
    mouseenter: MouseEvent
    mouseleave: MouseEvent
  }
}
export declare type LinkButtonProps = typeof __propDef.props
export declare type LinkButtonEvents = typeof __propDef.events
export declare type LinkButtonSlots = typeof __propDef.slots
export default class LinkButton extends SvelteComponentTyped<
  LinkButtonProps,
  LinkButtonEvents,
  LinkButtonSlots
> {}
export {}
