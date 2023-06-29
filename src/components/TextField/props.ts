import { OutlinedInputProps } from '@mui/material/OutlinedInput';

import { InputBaseComponentProps } from '@mui/material';

import { FormControlProps } from '../FormControl/props';

import Countries from './Phone/country/phone_numbers.json';

export type CountryCode = keyof typeof Countries;

export enum Positions {
  start = 'start',
  end = 'end',
}

export enum Types {
  text = 'text',
  phone = 'phone',
  number = 'number',
  password = 'password',
  date = 'date',
  time = 'time',
  dateTime = 'dateTime',
}

export type PhoneProps = {
  defaultCountry?: CountryCode;
};

export type DateTimeProps = {
  mask?: string;
  inputFormat?: string;
};

type NumberInputProps = {
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  thousandSeparator?: boolean;
  allowDecimal?: boolean;
  onStep?: (value: unknown) => void;
};

export type TextFieldProps = OutlinedInputProps &
  DateTimeProps &
  FormControlProps &
  PhoneProps & {
    type?: keyof typeof Types;
    inputComponent?: React.ElementType<InputBaseComponentProps>;
    onClear?: () => void;
    inputProps?: InputBaseComponentProps &
      NumberInputProps & {
        enableAreaCodes?: boolean;
        autoResize?: boolean;
      };
  };
