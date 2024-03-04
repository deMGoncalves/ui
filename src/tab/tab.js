import * as std from '@standard'
import style from './style'

@std.define('ui-tab')
class Tab extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @std.connected
  @std.paint
  [Symbol('template')] () {
    return `
      <div class='${style.tab}'>
        ${this.innerHTML}
      </div>
    `
  }
}

export default Tab
