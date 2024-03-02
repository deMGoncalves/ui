const onSelect = (target, key) => {
  const overridden = target.connectedCallback

  Object.defineProperty(target, 'connectedCallback', {
    value () {
      this.parentElement.addEventListener('change', this[key].bind(this))
      return overridden?.call(this)
    },
    writable: true
  })
}

export default onSelect
