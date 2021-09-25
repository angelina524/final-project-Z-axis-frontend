import { css } from '@emotion/react'

const WebApiTestPageStyle = css`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 20rem;
    margin: auto;
  }

  form + form {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px dotted black;
  }

  input {
    width: 12rem;
    padding: 0.5rem;
  }

  textarea {
    width: 12rem;
    padding: 0.5rem;
    height: 5rem;
  }

  h2 {
    background-color: black;
    color: white;
    text-align: center;
  }
`

export default WebApiTestPageStyle
