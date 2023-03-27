# Button

Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.

<Showcase />

#### Features

- Can be turn into an anchor tag but visibly represent a button
- Accepts any children
- Can hold icons

* (Healthy) Version: x.x.x (latest)
* Size: x.xx kB

---

- View Source
- View on NPM
- Report an issue
- WAI-ARIA design pattern

## Introduction

**introduction**

## Examples / Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

When to use

When not to use

**examples**

## Accessibility

- [WAI-ARIA - Combobox](https://www.w3.org/TR/wai-aria-practices-1.2/#combobox)
- WCAG 2.1 AA Compliance 100%

### Keyboard Interactions

- Space: Activates the button.
- Enter: Activates the button.

## Component API

### Props

| Prop name | Type | Default value | Description |
| --- | --- | --- | --- |
| `variant` | `"primary"`, `"outline"`, `"dark"`, `"danger"`, `"on-danger"` | `"primary"` | Visual appeareance of the button. |
| `size` | `"sm"`, `"md"`, `"lg"` | `"md"` | The size of the button. |
| `disabled` | `boolean` | `false` | Whether the button is disabled. |

### Typedefs / Generics

```ts
type Key = string | number | symbol

interface ComboBoxItem {
  id: Key
  text: string
}
```

### Slots

- default

### Dispatched Events

None.

### Forwarded Events

- on:click
- on:mouseenter
- on:mouseleave

### $$restProps

Spreads onto the `button` element.
