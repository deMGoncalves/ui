import * as std from '@standard'
import formData from './formData'
import style from './style'
import validity from './validity'

@std.define('ui-form')
class Form extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @std.connected
  @std.paint
  [Symbol('template')] () {
    return `
      <form class='${style.form}' novalidate>
        ${this.querySelector('template').innerHTML}
      </form>
    `
  }

  @std.on.submit('*')
  @std.filter.prevent
  @validity
  @formData
  [Symbol('onSubmit')] (data) {
    this.dispatchEvent(new CustomEvent('submit', { detail: data }))
    return this
  }
}

export default Form
