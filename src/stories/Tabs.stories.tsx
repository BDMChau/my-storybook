import { ComponentMeta, ComponentStory } from '@storybook/react';

import range from 'lodash/range';

import Paper from '@components/Paper';
import Tabs from '@components/Tabs';
import { TabsProps } from '@components/Tabs/props';

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

export const Demo: ComponentStory<typeof Tabs> = (args: TabsProps) => <Tabs {...args} />;

Demo.args = {
  divider: true,
  oval: false,
  tabs: range(1, 6).map((idx) => ({
    label: `Tab ${idx}`,
    content: (
      <Paper elevation={2} sx={{ p: 2 }}>
        Content {idx}
      </Paper>
    ),
  })),
};
