import React from 'react'
import ReactDOM from 'react-dom'
import App from './components'

import GlobalStyle from './styles/GlobalStyle'
import { Global, ThemeProvider, css } from '@emotion/react'
import theme from './styles/theme'

ReactDOM.render(
  <>
    <Global
      styles={css`
        ${GlobalStyle}
      `}
    />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
)
