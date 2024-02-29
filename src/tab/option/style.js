import css from '@standard/css'

const style = css`
  .option {
    align-items: center;
    background-color: var(--color-master-lightest);
    border-radius: var(--border-radius-pill);
    color: var(--color-master-dark);
    cursor: pointer;
    display: flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-regular);
    gap: var(--spacing_inset-nano);
    height: 34px;
    justify-content: center;
    line-height: var(--line-height-default);
    min-width: 140px;
    padding: var(--spacing_inset-quarck) var(--spacing_inset-xs);
  }

  .option[selected],
  .option:hover {
    background-color: var(--color-primary-lighter);
    color: var(--color-primary);
  }
`

export default style
