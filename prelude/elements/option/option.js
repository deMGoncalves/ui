import * as std from '@standard'

class Option extends HTMLElement {
  #value = ''

  get value () {
    return (this.#value ??= '')
  }

  static get observedAttributes () {
    return ['value']
  }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @std.attributeChanged('value')
  [Symbol('changeValue')] (value) {
    this.#value = value
    return this
  }
}

export default Option
