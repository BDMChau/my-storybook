import { ComponentMeta, ComponentStory } from '@storybook/react';

import Alert from '@components/Alert';
import { AlertProps } from '@components/Alert/props';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    severity: {
      control: {
        type: 'inline-radio',
        options: ['success', 'info', 'warning', 'error'],
      },
    },
  },
} as ComponentMeta<typeof Alert>;

export const Demo: ComponentStory<typeof Alert> = (args: AlertProps) => <Alert {...args}>This is a message.</Alert>;

Demo.args = {
  severity: 'success',
};
