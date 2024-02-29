import trait from '@standard/trait'

const paint = (target, key) => {
  Object.defineProperty(target, trait.onInvalid, {
    value () {
      return this[key]()
    }
  })
}

export default paint
