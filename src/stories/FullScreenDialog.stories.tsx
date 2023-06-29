import { ComponentMeta, ComponentStory } from '@storybook/react';

import FullScreenDialog from '@components/FullScreenDialog';
import Paper from '@components/Paper';
import SplitButton from '@components/SplitButton';

import { FullScreenDialogProps } from '../components/FullScreenDialog/props';

export default {
  title: 'FullScreenDialog',
  component: FullScreenDialog,
  argTypes: {},
} as ComponentMeta<typeof FullScreenDialog>;

export const Demo: ComponentStory<typeof FullScreenDialog> = (props: FullScreenDialogProps) => (
  <FullScreenDialog {...props}>
    <Paper sx={{ m: 2, padding: 2 }}>Param 1</Paper>
    <Paper sx={{ m: 2, padding: 2 }}>Param 2</Paper>
    <Paper sx={{ m: 2, padding: 2 }}>Param 3</Paper>
  </FullScreenDialog>
);

Demo.args = {
  open: true,
  onClose: () => {},
  title: 'Headline',
  groupButtons: (
    <SplitButton
      primaryLabel='Action'
      optionItems={[
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
      ]}
    />
  ),
};
