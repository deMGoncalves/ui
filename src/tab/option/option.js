import * as std from '@standard'
import onSelect from './onSelect'
import selectity from './selectity'
import style from './style'

@std.define('ui-tab-option')
class Option extends HTMLElement {
  #label = ''
  #selectity = selectity.UNSELECTED
  #value = ''

  static get observedAttributes () {
    return ['label', 'value']
  }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @std.attributeChanged('label')
  [Symbol('changeLabel')] (value) {
    this.#label = value
    return this
  }

  @std.attributeChanged('value')
  [Symbol('changeValue')] (value) {
    this.#value = value
    return this
  }

  @std.connected
  @std.paint
  [Symbol('template')] () {
    return `
      <div class='${style.option}' ${this.#selectity}>${this.#label}</div>
    `
  }

  @std.on.click('*')
  @std.repaint
  [Symbol('onClick')] () {
    this.#selectity = selectity.SELECTED
    this.parentElement.dispatchEvent(new CustomEvent('select', { detail: this.#value }))
    return this
  }

  @onSelect
  @std.repaint
  [Symbol('onSelect')] (event) {
    (this.#value !== event.detail) && (this.#selectity = selectity.UNSELECTED)
    return this
  }
}

export default Option
