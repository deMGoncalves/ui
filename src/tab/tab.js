import * as std from '@standard'
import Channel from './channel'
import style from './style'

@std.define('ui-tab')
class Tab extends HTMLElement {
  #channel = Channel.create()

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @std.connected
  @std.paint
  [Symbol('template')] () {
    return `
      <div class='${style.tab}' channel='${this.#channel}'>
        ${this.querySelector('template').innerHTML}
      </div>
    `
  }
}

export default Tab
