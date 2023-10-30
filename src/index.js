import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    white: '#fff',
    black: '#212121',
    error: 'red',
    primaryColor: '#6d9510',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  spacing: value => `${value * 4}px`,
};

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  root.render(
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

renderApp();
