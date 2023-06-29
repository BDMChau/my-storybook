import { forwardRef } from 'react';

import { withStyles } from 'tss-react/mui';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import styles from './styles';

const MyComponent = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => (
  <IconButton disableRipple disableFocusRipple ref={ref} {...props} />
));

export default withStyles(MyComponent, styles);
