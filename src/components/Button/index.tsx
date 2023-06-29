import { forwardRef } from 'react';

import { withStyles } from 'tss-react/mui';

import set from 'lodash/set';

import Button, { ButtonTypeMap } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { ButtonProps } from './props';
import styles from './styles';

const MyComponent = forwardRef<HTMLButtonElement, ButtonProps>(({ loading, disabled, variant, disabledWithOpacity = false, ...rest }, ref) => {
  const getType = () => {
    const props: {
      variant: ButtonTypeMap['props']['variant'];
      color: ButtonTypeMap['props']['color'];
    } = {
      variant: 'contained',
      color: 'primary',
    };

    switch (variant) {
      case 'outlined':
        set(props, 'variant', 'outlined');
        break;
      case 'text':
        set(props, 'variant', 'text');
        break;
      case 'warning':
        set(props, 'color', 'warning');
        break;
      case 'danger':
        set(props, 'color', 'error');
        break;
      default:
        break;
    }

    return props;
  };

  return (
    <Button
      ref={ref}
      disableRipple
      disabled={loading || disabledWithOpacity || disabled}
      startIcon={loading && <CircularProgress color='inherit' size={16} />}
      {...getType()}
      {...rest}
    />
  );
});

export default withStyles(MyComponent, styles);
