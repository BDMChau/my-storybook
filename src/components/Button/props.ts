import { ButtonPropsVariantOverrides, ButtonProps as Defaults } from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    warning: true;
    danger: true;
  }
}

export type Sizes = 'small' | 'medium';

export type ButtonProps = Defaults & {
  loading?: boolean;
  size?: Sizes;
  disabledWithOpacity?: boolean;
  variant?: keyof ButtonPropsVariantOverrides | Defaults['variant'];
};
