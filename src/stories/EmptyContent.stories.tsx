import { ComponentMeta, ComponentStory } from '@storybook/react';

import EmptyContent from '@components/EmptyContent';
import { EmptyContentProps } from '@components/EmptyContent/props';

export default {
  title: 'EmptyContent',
  component: EmptyContent,
  argTypes: {
   
  },
} as ComponentMeta<typeof EmptyContent>;

export const Demo: ComponentStory<typeof EmptyContent> = (args: EmptyContentProps) => (
  <EmptyContent {...args} />
);

Demo.args = {
    title: 'No content',
    subTitle: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or',
};
