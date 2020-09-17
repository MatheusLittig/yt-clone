import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Home from './pages/Home/index';

import theme from './themes/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
