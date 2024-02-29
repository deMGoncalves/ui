import trait from '@standard/trait'

class Input extends HTMLElement {
  get name () {
    return (this.shadowRoot.querySelector('input')?.name ?? '')
  }

  get type () {
    return trait.control
  }

  get validity () {
    return (this.shadowRoot.querySelector('input')?.validity ?? true)
  }

  get value () {
    return (this.shadowRoot.querySelector('input').value ?? '')
  }

  static get observedAttributes () {
    return ['value']
  }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.addEventListener('invalid', this[trait.onInvalid].bind(this))
    return this
  }

  [trait.onInvalid] (_event) {
    return this
  }
}

export default Input
