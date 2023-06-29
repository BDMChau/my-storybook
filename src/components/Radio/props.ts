import { FormControlProps } from '../FormControl/props';

export type option = {
  label: string;
  value: unknown;
  disabled?: boolean;
};

export type RadioProps = FormControlProps & {
  row?: boolean;
  options: option[];
  value?: unknown;
  onChange?: (value: unknown) => void;
};
