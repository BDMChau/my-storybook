import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from '@components/Icon';
import { IconProps } from '@components/Icon/props';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Demo: ComponentStory<typeof Icon> = (args: IconProps) => <Icon {...args} />;

Demo.args = {
  icon: 'face',
};
