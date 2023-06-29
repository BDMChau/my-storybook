import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Radio from '@components/Radio';
import { RadioProps } from '@components/Radio/props';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    label: {
      control: {
        disable: false,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    row: {
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Radio>;

export const Demo: ComponentStory<typeof Radio> = (props: RadioProps) => {
  const [value, setValue] = useState<unknown>(props.value);

  return <Radio {...props} value={value} onChange={(value) => setValue(value)} />;
};

Demo.args = {
  label: 'Radio Label',
  disabled: false,
  fullWidth: false,
  value: 'value 01',
  row: true,
  options: [
    {
      label: 'Label 01',
      value: 'value 01',
    },
    {
      label: 'Label 02',
      value: 'value 02',
    },
  ],
};
