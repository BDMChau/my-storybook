import React from 'react';

import 'material-symbols/rounded.css';

import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import themes from './Themes';

interface ThemeProps {
  children?: React.ReactNode;
}

export default ({ children }: ThemeProps) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={themes}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StyledEngineProvider>
);
