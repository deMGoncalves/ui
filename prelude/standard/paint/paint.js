import { style } from '@standard/css'
import trait from '@standard/trait'

const paint = (target, key, descriptor) => {
  const overridden = descriptor.value

  Object.defineProperty(target, trait.paint, {
    value () {
      return this[key]()
    }
  })

  Object.assign(descriptor, {
    value (this, ...args) {
      return (this.shadowRoot.innerHTML = `${style()} ${overridden.call(this, ...args)}`)
    }
  })
}

export default paint
