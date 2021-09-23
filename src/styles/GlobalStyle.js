import { css } from '@emotion/react'

// reset CSS
const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  body,
  html,
  #root {
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
