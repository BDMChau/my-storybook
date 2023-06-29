import { ComponentMeta, ComponentStory } from '@storybook/react';

import Typography from '@components/Typography';
import { TypographyProps } from '@components/Typography/props';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'subtitle1',
          'subtitle2',
          'body1',
          'body2',
          'caption',
          'button',
          'overline',
          'bodyLarge',
          'bodyMedium',
          'bodySmall',
          'caption',
          'display',
          'headingLarge',
          'headingMedium',
          'headingSmall',
          'labelLarge',
          'labelMedium',
          'labelSmall',
          'titleLarge',
          'titleMedium',
          'titleSmall',
        ],
      },
    },
  },
} as ComponentMeta<typeof Typography>;

export const Demo: ComponentStory<typeof Typography> = (args: TypographyProps) => (
  <Typography {...args}>This is a {`${args.variant}`}.</Typography>
);

Demo.args = {
  component: 'div',
  variant: 'bodyMedium',
  noWrap: true,
};
