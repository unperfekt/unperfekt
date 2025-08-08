/**
 * Recursively merges two values (objects, arrays, strings).
 * - Objects: deep-merge with right-most (obj2) taking precedence on conflicts.
 * - Arrays: concatenates (left then right).
 * - Strings: concatenates (left then right).
 * - Other/mismatched types: right-most (obj2) replaces left.
 *
 * Does not mutate inputs; returns a new value.
 * @param {*} object1 A
 * @param {*} object2 B
 * @returns {*} A merged with B
 */
export function merge(object1, object2) {
  if (object1 === object2) return object1

  if (isPlainObject(object1) && isPlainObject(object2)) {
    const out = {}
    const a = object1
    const b = object2

    // Keys from left
    const aKeys = Object.keys(a)
    for (const k of aKeys) {
      out[k] = Object.prototype.hasOwnProperty.call(b, k) ? merge(a[k], b[k]) : clone(a[k])
    }
    // Keys only in right
    const bKeys = Object.keys(b)
    for (const k of bKeys) {
      if (!Object.prototype.hasOwnProperty.call(a, k)) {
        out[k] = clone(b[k])
      }
    }
    return out
  }

  if (Array.isArray(object1) && Array.isArray(object2)) {
    // Concatenate with deep-cloned elements to avoid leaking references
    const out = []
    for (let index = 0; index < object1.length; index++) out.push(clone(object1[index]))
    for (let index = 0; index < object2.length; index++) out.push(clone(object2[index]))
    return out
  }

  if (typeof object1 === "string" && typeof object2 === "string") {
    return object2
  }

  // Fallback: right-most wins (including type mismatches)
  return object2 === undefined ? clone(object1) : clone(object2)
}

/**
 * Checks if a value is a plain object (i.e., not an array or a non-plain object).
 * @param {*} x The value to check.
 * @returns {boolean} True if x is a plain object, false otherwise.
 */
function isPlainObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]"
}

/**
 * Clones a value (deeply for objects and arrays).
 * @param {*} v The value to clone.
 * @returns {*} A deep clone of the input value.
 */
function clone(v) {
  if (Array.isArray(v)) {
    const out = Array.from({ length: v.length })
    for (let index = 0; index < v.length; index++) out[index] = clone(v[index])
    return out
  }
  if (isPlainObject(v)) {
    const out = {}
    const keys = Object.keys(v)
    for (const k of keys) {
      out[k] = clone(v[k])
    }
    return out
  }
  // Primitives and non-plain objects are returned as-is
  return v
}

/**
 * Merges multiple objects into one.
 * @param  {...any} objects The objects to merge.
 * @returns {*} The merged object.
 */
export function mergeAll(...objects) {
  // eslint-disable-next-line unicorn/no-array-reduce
  return objects.reduce((accumulator, object) => merge(accumulator, object), {})
}
