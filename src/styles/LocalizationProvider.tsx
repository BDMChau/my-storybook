import React from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface ThemeProps {
  children?: React.ReactNode;
}

export default ({ children }: ThemeProps) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>
);
