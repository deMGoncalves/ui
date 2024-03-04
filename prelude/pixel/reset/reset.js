import css from '@standard/css'

const style = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ui-form,
  ui-name,
  ui-submit,
  ui-tab {
    display: block;
    width: 100%;
  }
`

export default style
