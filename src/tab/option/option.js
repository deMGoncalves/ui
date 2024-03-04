import * as std from '@standard'
import onSelect from './onSelect'
import Option from '@elements/option'
import selectity from './selectity'
import style from './style'

@std.define('ui-tab-option')
class Opt extends Option {
  #selectity = selectity.UNSELECTED

  @std.connected
  @std.paint
  [Symbol('template')] () {
    return `
      <div class='${style.option}' ${this.#selectity}>${this.innerHTML}</div>
    `
  }

  @std.on.click('*')
  [Symbol('onClick')] () {
    const init = { detail: { value: this.value } }
    const event = new CustomEvent('select', init)
    this.parentElement.dispatchEvent(event)
    return this
  }

  @onSelect
  @std.repaint
  [Symbol('onSelect')] (event) {
    this.#selectity = (this.value === event.detail.value)
      ? selectity.SELECTED
      : selectity.UNSELECTED
    return this
  }
}

export default Opt
