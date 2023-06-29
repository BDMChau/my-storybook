import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { DEFAULTS } from '../constant';
import { TextFieldProps } from '../props';
import OutlinedInput from '../Text';

export default ({ value, mask, inputFormat, onChange, ...rest }: TextFieldProps) => (
  <DesktopDatePicker
    value={value}
    onChange={(date) =>
      onChange && onChange({ target: { value: date } } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    }
    mask={mask || DEFAULTS.DATE_MASK}
    inputFormat={inputFormat || DEFAULTS.DATE}
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
