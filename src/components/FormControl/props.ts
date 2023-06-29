import { SxProps, Theme } from '@mui/material/styles';

export type FormControlProps = {
  className?: string;
  label?: React.ReactNode;
  fullWidth?: boolean;
  required?: boolean;
  helperLabel?: string;
  helperText?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  sx?: SxProps<Theme>;
};
