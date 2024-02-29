import textContent from './textContent'

function style () {
  return `<style>${textContent.join(' ')}</style>`
}

export default style
