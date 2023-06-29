import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '@components/Button';
import Dialog from '@components/Dialog';
import { DialogProps } from '@components/Dialog/props';

import { DialogContentText } from '@mui/material';

export default {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    header: {
      control: {
        disable: true,
      },
    },
    footer: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

export const Demo: ComponentStory<typeof Dialog> = (args: DialogProps) => (
  <Dialog {...args} footer={<Button variant='primary'>Button</Button>}>
    <DialogContentText>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </DialogContentText>
    <DialogContentText>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </DialogContentText>
    <DialogContentText>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </DialogContentText>
    <DialogContentText>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </DialogContentText>
    <DialogContentText>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </DialogContentText>
    <DialogContentText>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </DialogContentText>
  </Dialog>
);

Demo.args = {
  open: true,
  title: 'Dialog Title',
  maxWidth: 'md',
};
