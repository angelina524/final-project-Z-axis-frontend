import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';

import GlobalStyle from './styles/GlobalStyle'
import { Global, css } from '@emotion/react'

ReactDOM.render(
  <React.StrictMode>
    <Global styles={css`${GlobalStyle}`} />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
