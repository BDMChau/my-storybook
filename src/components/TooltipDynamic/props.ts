import { ReactNode } from 'react';

import { TooltipProps } from '@mui/material';

export type TooltipDynamicProps = TooltipProps & {
  children?: ReactNode,
  lineHeightText?: number,
  lines?: number,
  compareLines?: boolean,// custom for text truncated in multiple lines
};