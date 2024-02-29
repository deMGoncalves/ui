import * as std from '@standard'
import style from './style'

@std.define('ui-submit')
class Submit extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @std.connected
  @std.paint
  [Symbol('template')] () {
    return `
      <button class='${style.submit}'>Save</button>
    `
  }

  @std.on.click('*')
  [Symbol('onClick')] () {
    const init = { bubbles: true, cancelable: true }
    const event = new Event('submit', init)
    this.parentElement.dispatchEvent(event)
    return this
  }
}

export default Submit
