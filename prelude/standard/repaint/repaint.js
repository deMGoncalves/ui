import trait from '@standard/trait'

const repaint = (_target, _key, descriptor) => {
  const overridden = descriptor.value

  Object.assign(descriptor, {
    value (...args) {
      requestAnimationFrame(() => this[trait.paint]?.())
      return overridden.call(this, ...args)
    }
  })
}

export default repaint
