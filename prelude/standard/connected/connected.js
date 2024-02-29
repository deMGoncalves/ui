const connected = (target, key) => {
  const overridden = target.connectedCallback

  Object.defineProperty(target, 'connectedCallback', {
    value () {
      overridden?.call(this)
      return this[key]()
    },
    writable: true
  })
}

export default connected
