import { forwardRef, useCallback, useMemo } from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import Box from '@components/Box';
import Divider from '@components/Divider';
import InputAdornment from '@components/InputAdornment';

import { KEYCODE } from '../constant';
import { TextFieldProps } from '../props';
import TextDefault from '../Text';

import ArrowIcon from './styles';

interface CustomProps {
  onChange: (event: { target: { value: number | undefined } }) => void;
  mask?: 'string';
  format?: 'string';
  decimalScale?: number;
}

const NumberFormatCustom = forwardRef<NumberFormat<InputAttributes>, CustomProps>(
  ({ decimalScale = 0, onChange, ...rest }, ref) => (
    <NumberFormat
      {...rest}
      decimalScale={decimalScale}
      getInputRef={ref}
      onValueChange={({ floatValue }) => onChange({ target: { value: floatValue } })}
    />
  )
);

export default ({ value, inputProps, endAdornment, ...rest }: TextFieldProps) => {
  const { onStep, min, max, step, ...IProps } = inputProps || {};

  const countValue = useCallback(
    (_value, add?: boolean) => {
      if (onStep) {
        let parseValue = _value ? parseFloat(_value as string) : 0;
        const _step = step || 1;

        parseValue = add ? parseValue + _step : parseValue - _step;

        if (max && parseValue > max) parseValue = max;
        if (min && parseValue < min) parseValue = min;

        onStep(parseValue.toString());
      }
    },
    [onStep, min, max, step]
  );

  const renderEndAdornment = useMemo(() => {
    if (!onStep && !endAdornment) return null;

    return (
      <>
        {!!onStep && (
          <InputAdornment position='end'>
            <Box sx={{ flexDirection: 'row-reverse' }}>
              <ArrowIcon>
                <KeyboardArrowUpRoundedIcon fontSize='small' onClick={() => countValue(value, true)} />
              </ArrowIcon>
              <ArrowIcon>
                <KeyboardArrowDownRoundedIcon fontSize='small' onClick={() => countValue(value)} />
              </ArrowIcon>
            </Box>
          </InputAdornment>
        )}
        {!!onStep && !!endAdornment && <Divider sx={{ height: 24, m: 1 }} orientation='vertical' />}
        {endAdornment}
      </>
    );
  }, [endAdornment, countValue, onStep]);

  return (
    <TextDefault
      {...rest}
      value={value}
      inputComponent={NumberFormatCustom as any}
      inputProps={IProps}
      onKeyDown={({ code }) => {
        switch (code) {
          case KEYCODE.ARROW_UP:
            countValue(value, true);
            break;
          case KEYCODE.ARROW_DOWN:
            countValue(value);
            break;
          default:
            break;
        }
      }}
      endAdornment={renderEndAdornment}
    />
  );
};
