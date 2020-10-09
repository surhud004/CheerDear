import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { theme } from './theme/theme';
import Routes from './routes/routes';
import './App.css';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;
