import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '@components/Button';
import { ButtonProps } from '@components/Button/props';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    endIcon: {
      control: {
        disable: true,
      },
    },
    startIcon: {
      control: {
        disable: true,
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    disabledWithOpacity: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium'],
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'outlined', 'text', 'warning', 'danger'],
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Demo: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args}>Button {`${args.variant}`}</Button>
);

Demo.args = {
  children: 'Actions',
  loading: false,
  disabled: false,
  disabledWithOpacity: false,
  size: 'medium',
  variant: 'primary',
};
