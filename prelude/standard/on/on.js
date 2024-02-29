const on = new Proxy({}, {
  get: (_, event) =>
    (query) =>
      (target, key) => {
        const method = target.connectedCallback
        Object.defineProperty(target, 'connectedCallback', {
          value () {
            requestAnimationFrame(() => {
              this.shadowRoot.addEventListener(event, (e) => (
                e.target.matches(query) && Reflect.apply(this[key], this, [e])
              ))
            })
            return method?.call(this)
          },
          writable: true
        })
      }
})

export default on
