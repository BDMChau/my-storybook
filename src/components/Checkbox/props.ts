import { SxProps, Theme } from '@mui/material/styles';

export type CheckboxLabelProps = {
  className?: string;
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top';
  indeterminate?: boolean;
  sx?: SxProps<Theme>;
};
