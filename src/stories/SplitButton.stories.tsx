import { ComponentMeta, ComponentStory } from '@storybook/react';

import SplitButton from '@components/SplitButton';
import { SplitButtonProps } from '@components/SplitButton/props';

export default {
  title: 'Split Button',
  component: SplitButton,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    optionItems: {
      control: {
        type: 'object',
      },
    },
    onClickPrimary: {
      control: {
        disable: false,
      },
    },
  },
} as ComponentMeta<typeof SplitButton>;

export const Demo: ComponentStory<typeof SplitButton> = (args: SplitButtonProps) => <SplitButton {...args} />;

Demo.args = {
  disabled: false,
  primaryLabel: 'Split Button',
  optionItems: [
    {
      label: 'label 01',
      onItemClick: () => {},
      value: 'value 01',
    },
    {
      label: 'label 02',
      onItemClick: () => {},
      value: 'value 02',
    },
  ],
};
