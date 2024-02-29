import css from '@standard/css'

const style = css`
  .submit {
    align-items: center;
    background-color: var(--color-primary);
    border: var(--border-width-hairline) solid var(--color-primary);
    border-radius: var(--border-radius-sm);
    color: var(--color-pure-white);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-medium);
    gap: var(--spacing_inset-nano);
    height: 42px;
    justify-content: center;
    line-height: var(--line-height-default);
    padding: var(--spacing_inset-nano) var(--spacing_inset-sm);
    width: 100%;
  }
`

export default style
