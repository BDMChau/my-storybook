import { ReactourProps as TourProps } from 'reactour';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import TblTour from '@components/Tour';

export default {
  title: 'Tour',
  component: TblTour,
  argTypes: {},
} as ComponentMeta<typeof TblTour>;

export const Demo: ComponentStory<typeof TblTour> = (args: TourProps) => (
  <TblTour {...args} onRequestClose={() => {}} />
);

Demo.args = {
  isOpen: true,
  onFinish: () => alert('Tour Completed.'),
  lastStepNextButton: 'Ok, I got it !',
  steps: [
    {
      content: 'This is 1 Step',
    },
    {
      content: 'This is 2 Step',
    },
    {
      content: 'This is 3 Step',
    },
    {
      content: 'This is 4 Step',
    },
  ],
};
