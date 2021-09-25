import { css } from '@emotion/react'

// reset CSS
const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Noto Sans TC', sans-serif;
  }

  body,
  html,
  #root {
    width: 100%;
    letter-spacing: 0.05rem;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
