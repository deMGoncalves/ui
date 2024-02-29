function prevent (_target, _key, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value (event) {
      event instanceof Event && event.preventDefault()
      return next.apply(this, arguments)
    }
  })
}

export default prevent
