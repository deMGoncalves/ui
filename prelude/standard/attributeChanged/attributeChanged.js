import trait from '@standard/trait'

const attributeChanged = (name) =>
  (target, key) => {
    target[trait.attribute] = { [name]: key, ...(target[trait.attribute] ?? {}) }

    Object.defineProperty(target, 'attributeChangedCallback', {
      value (name, oldValue, value) {
        this[target[trait.attribute][name]]?.(value, oldValue)
      },
      writable: true
    })
  }

export default attributeChanged
