import * as std from '@standard'
import Input from '@elements/input'
import style from './style'
import validity from './validity'

@std.define('ui-name')
class Name extends Input {
  #validity = validity.VALID
  #value = ''

  @std.attributeChanged('value')
  @std.repaint
  [Symbol('changeValue')] (value) {
    this.#value = value
    return this
  }

  @std.connected
  @std.paint
  [Symbol('template')] () {
    return `
      <div class='${style.input__container}'>
        <label class='${style.input__label}' for='name'>Name</label>
        <input class='${style.input}' id='name' name='name' value='${this.#value}' autocomplete='off' required />
        <span class='${style.input__supporting}' ${this.#validity}>Name is required</span>
      </div>
    `
  }

  @std.on.change('*')
  @std.repaint
  [Symbol('onChange')] (event) {
    this.#value = event.target.value
    this.#validity = event.target.value
      ? validity.VALID
      : validity.INVALID
    return this
  }

  @std.onInvalid
  @std.repaint
  [Symbol('onInvalid')] () {
    this.#validity = validity.INVALID
    return this
  }
}

export default Name
