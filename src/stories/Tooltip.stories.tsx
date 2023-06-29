import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TooltipProps } from '@mui/material/Tooltip';

import Button from '@components/Button';
import Tooltip from '@components/Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>;

export const Demo: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <>
    <Tooltip {...args} title='Tooltip Bottom'>
      <Button>Hover Me</Button>
    </Tooltip>
  </>
);

Demo.args = {
  placement: 'bottom',
};
