import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DividerProps } from '@mui/material/Divider';

import Divider from '@components/Divider';

export default {
  title: 'Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Demo: ComponentStory<typeof Divider> = (args: DividerProps) => <Divider {...args} />;
