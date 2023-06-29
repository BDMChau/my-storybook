import { FilterOptionsState } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

export type option = Record<string, any> & {
  value: string | number;
  label: string;
  img?: string;
  email?: string;
  disabled?: boolean;
  renderOptionLabel?: () => string;
};

export type selectedOption = option | option[] | null;

export type DropdownProps = {
  options: option[];
  disabled?: boolean;
  loading?: boolean;
  multiple?: boolean;
  error?: boolean;
  disableCloseOnSelect?: boolean;
  noOptionsText?: React.ReactNode;
  loadingText?: React.ReactNode;
  limitTags?: number;
  placeholder?: string;
  helperText?: string;
  value?: selectedOption;
  onChange?: (values: selectedOption) => void;
  sx?: SxProps<Theme>;
  label?: string;
  width?: number | string;
  required?: boolean;
  disableFilter?: boolean;
  className?: string;
  disablePortal?: boolean;
  disableClearable?: boolean;
  isUserTags?: boolean;
  filterOptions?: (options: option[], state: FilterOptionsState<option>) => option[]

};
