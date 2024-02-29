import trait from '@standard/trait'

function validity (_target, _prop, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value () {
      const inputs = Array
        .from(this.shadowRoot.querySelectorAll('*'))
        .filter(e => (e.type === trait.control))

      const valid = inputs
        .every((input) => input.validity.valid)

      if (valid) return Reflect.apply(next, this, arguments)

      inputs
        .find((input) => !input.validity.valid)
        .dispatchEvent(new Event('invalid'))
    }
  })
}

export default validity
