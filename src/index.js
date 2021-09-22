import React from 'react'
import ReactDOM from 'react-dom'
import App from './components'

import GlobalStyle from './styles/GlobalStyle'
import { Global, ThemeProvider, css } from '@emotion/react'
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${GlobalStyle}
      `}
    />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
