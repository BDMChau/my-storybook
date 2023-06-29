import { FC } from 'react';

import { withStyles } from 'tss-react/mui';

import Alert from '@mui/material/Alert';

import Icon from '@components/Icon';

import { AlertProps } from './props';
import styles from './styles';

const TblAlert: FC<AlertProps> = ({ children, ...rest }) => (
  <Alert
    iconMapping={{
      error: <Icon icon='error' />,
      success: <Icon icon='check_circle' />,
      warning: <Icon icon='warning' />,
      info: <Icon icon='info' />,
    }}
    {...rest}
  >
    {children}
  </Alert>
);

export default withStyles(TblAlert, styles);
