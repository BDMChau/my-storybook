import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Checkbox from '@components/Checkbox';
import { CheckboxLabelProps } from '@components/Checkbox/props';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    labelPlacement: {
      control: {
        type: 'inline-radio',
        options: ['bottom', 'end', 'start', 'top'],
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const Demo: ComponentStory<typeof Checkbox> = (args: CheckboxLabelProps) => {
  const [checked, setChecked] = useState(false);

  return <Checkbox {...args} checked={checked} onChange={(value: boolean) => setChecked(value)} />;
};

Demo.args = {
  label: 'Label',
  disabled: false,
  labelPlacement: 'end',
  indeterminate: false,
};
