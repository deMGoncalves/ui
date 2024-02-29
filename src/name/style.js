import css from '@standard/css'

const style = css`
  .input__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    position: relative;
    width: 100%;
  }

  .input__label {
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-md);
  }

  .input {
    appearance: none;
    background-color: transparent;
    border: var(--border-width-hairline) solid var(--color-master);
    border-radius: var(--border-radius-sm);
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    height: 42px;
    line-height: var(--line-height-default);
    padding: 0 var(--spacing_inset-xs);
    width: 100%;
  }

  .input[readonly] {
    background-color: var(--color-master-lightest);
  }

  .input:active,
  .input:focus,
  .input:hover {
    outline: 0;
  }

  .input:-webkit-autofill,
  .input:-webkit-autofill:hover, 
  .input:-webkit-autofill:focus, 
  .input:-webkit-autofill:active {
    transition: background-color 9999999999s ease-in-out 0s
  }

  .input::placeholder {
    color: var(--color-master);
  }

  .input__supporting {
    color: var(--color-master);
    display: none;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-md);
  }

  .input__supporting[invalid]{
    color: var(--color-danger);
    display: inline;
  }
`

export default style
