import { ComponentMeta, ComponentStory } from '@storybook/react';

import Chip from '@components/Chip';
import { ChipProps } from '@components/Chip/props';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['active', 'pending', 'suspended', 'locked', 'choice'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium'],
      },
    },
    selected: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Chip>;

export const Demo: ComponentStory<typeof Chip> = (args: ChipProps) => <Chip {...args} />;

Demo.args = {
  label: 'Chip demo',
  status: 'active',
  size: 'medium',
  selected: false,
};
