import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './router';
import theme from './themes/default.theme';
import GlobalStyles from '@hotel/assets/style/Global.style';
import AuthProvider from './context/AuthProvider';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
