import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

import TextField from '@components/TextField';
import { TextFieldProps, Types } from '@components/TextField/props';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    startAdornment: {
      control: {
        disable: true,
      },
    },
    endAdornment: {
      control: {
        disable: true,
      },
    },
    inputRef: {
      control: {
        disable: true,
      },
    },
    value: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args: TextFieldProps) => {
  const [value, setValue] = useState<unknown>();

  return <TextField {...args} value={value} onChange={(val) => setValue(val?.target?.value)} />;
};

export const TextInput = Template.bind({});

export const Password = Template.bind({});

export const NumberInput: ComponentStory<typeof TextField> = ({ inputProps, ...args }: TextFieldProps) => {
  const [value, setValue] = useState<unknown>();

  return (
    <TextField
      {...args}
      value={value}
      onChange={(val) => setValue(val?.target?.value)}
      inputProps={{
        ...inputProps,
        onStep: (val) => setValue(val),
      }}
    />
  );
};

export const PhoneNumber = Template.bind({});

export const DatePicker = Template.bind({});

export const TimePicker = Template.bind({});

export const DateTimePicker = Template.bind({});

const defaultProps = {
  placeholder: 'This is placeholder',
  helperText: 'Helper Text',
  fullWidth: true,
  required: false,
  disabled: false,
  error: false,
};

TextInput.args = {
  type: Types.text,
  label: 'TextInput',
  helperLabel: 'description',
  startAdornment: <AirportShuttleIcon />,
  endAdornment: <span>.tabula.com</span>,
  rows: 5,
  multiline: false,
  onClear: () => alert('Clear value ??'),
  ...defaultProps,
};

NumberInput.args = {
  type: Types.number,
  label: 'NumberInput',
  startAdornment: <span>Max</span>,
  endAdornment: <span>Min</span>,
  inputProps: {
    min: 4,
    max: 10,
    step: 2,
    maxLength: 3,
    thousandSeparator: true,
    allowDecimal: true
  },
  ...defaultProps,
};

PhoneNumber.args = {
  type: Types.phone,
  label: 'Phone Number',
  ...defaultProps,
};

Password.args = {
  type: Types.password,
  label: 'Password',
  ...defaultProps,
};

DatePicker.args = {
  type: Types.date,
  label: 'DatePicker',
  ...defaultProps,
};

TimePicker.args = {
  type: Types.time,
  label: 'TimePicker',
  ...defaultProps,
};

DateTimePicker.args = {
  type: Types.dateTime,
  label: 'DateTimePicker',
  ...defaultProps,
};
