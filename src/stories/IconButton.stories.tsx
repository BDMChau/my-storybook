import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconButtonProps } from '@mui/material/IconButton';

import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

import IconButton from '@components/IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

export const Demo: ComponentStory<typeof IconButton> = (args: IconButtonProps) => (
  <IconButton {...args}>
    <AccessibleForwardIcon />
  </IconButton>
);

Demo.args = {
  size: 'medium',
};
