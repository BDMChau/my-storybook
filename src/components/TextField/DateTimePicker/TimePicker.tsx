import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

import { TextFieldProps } from '../props';
import OutlinedInput from '../Text';

export default ({ value, onChange, className, ...rest }: TextFieldProps) => (
  <DesktopTimePicker
    className={className}
    value={value}
    onChange={(date) =>
      onChange && onChange({ target: { value: date } } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    }
    renderInput={({ inputRef, inputProps, InputProps }) => (
      <OutlinedInput
        onChange={inputProps?.onChange}
        value={inputProps?.value}
        inputRef={inputRef}
        endAdornment={InputProps?.endAdornment}
        {...rest}
      />
    )}
  />
);
