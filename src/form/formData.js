import trait from '@standard/trait'

function formData (_target, _prop, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value (event) {
      if (!(event instanceof Event)) {
        return Reflect.apply(next, this, [event])
      }

      const data = Object.fromEntries(
        Array
          .from(this.shadowRoot.querySelectorAll('*'))
          .filter(e => (e.type === trait.control))
          .map(({ name, value }) => [name, value])
      )

      return Reflect.apply(next, this, [data])
    }
  })
}

export default formData
