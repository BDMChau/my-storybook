import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SwitchProps } from '@mui/material/Switch';

import Switch from '@components/Switch';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Switch>;

export const Demo: ComponentStory<typeof Switch> = (args: SwitchProps) => <Switch {...args} />;

Demo.args = {
  onChange: () => {},
  disabled: false,
  checked: false,
};
