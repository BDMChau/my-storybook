import { ReactNode, useCallback } from 'react';

import CancelIcon from '@mui/icons-material/Cancel';

import Divider from '@components/Divider';
import FormControl from '@components/FormControl';
import InputAdornment from '@components/InputAdornment';

import { Positions, TextFieldProps, Types } from '../props';

import { StyledIconButton, StyledOutlinedInput, useStyles } from './styles';

export default ({
  value,
  label,
  fullWidth,
  required,
  disabled,
  error,
  helperText,
  helperLabel,
  startAdornment,
  endAdornment,
  sx,
  type,
  inputProps,
  onClear,
  ...rest
}: TextFieldProps) => {
  const { classes } = useStyles();

  const { autoResize, ...IProps } = inputProps || {};

  const renderAdornment = useCallback(
    (adornment: ReactNode, position: keyof typeof Positions) => {
      if (!adornment && !onClear) return undefined;
      const isShowClearIcon = onClear && position === Positions.end;

      return (
        <>
          {isShowClearIcon && (
            <InputAdornment position='end'>
              <StyledIconButton disabled={disabled} onClick={() => onClear && onClear()}>
                <CancelIcon />
              </StyledIconButton>
            </InputAdornment>
          )}
          {adornment && isShowClearIcon && <Divider sx={{ height: 24, mt: 1, mb: 1, ml: 1 }} orientation='vertical' />}
          {adornment && <InputAdornment position={position}>{adornment}</InputAdornment>}
        </>
      );
    },
    [onClear]
  );

  return (
    <FormControl
      label={label}
      fullWidth={fullWidth}
      required={required}
      helperLabel={helperLabel}
      helperText={helperText}
      disabled={disabled}
      error={error}
      sx={sx}
    >
      <StyledOutlinedInput
        fullWidth
        size='small'
        error={error}
        disabled={disabled}
        value={value}
        type={type || Types.text}
        startAdornment={renderAdornment(startAdornment, Positions.start)}
        endAdornment={renderAdornment(endAdornment, Positions.end)}
        inputProps={{ ...IProps, className: autoResize ? classes.textarea : '' }}
        {...rest}
      />
    </FormControl>
  );
};
