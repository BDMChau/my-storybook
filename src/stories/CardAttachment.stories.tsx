import { ComponentMeta, ComponentStory } from '@storybook/react';

import AccessibleIcon from '@mui/icons-material/Accessible';

import CardAttachment from '@components/CardAttachment';
import { CardAttachmentProps } from '@components/CardAttachment/props';
import Typography from '@components/Typography';

export default {
  title: 'CardAttachment',
  component: CardAttachment,
  argTypes: {},
} as ComponentMeta<typeof CardAttachment>;

export const Demo: ComponentStory<typeof CardAttachment> = (args: CardAttachmentProps) => <CardAttachment {...args} />;

Demo.args = {
  icon: 'unknown',
  title:
    'Assignment 1: Loren hahahaha Assignment 1: Loren hahahaha Assignment 1: Loren hahahaha Assignment 1: Loren hahahaha Assignment 1: Loren hahahaha',
  subTitle:
    'Document Document Document Document Document Document Document Document Document Document Document Document Document Document Document',
  onClick: () => alert('onClick!!'),
  onRemove: () => alert('onRemove!!'),
  onRetry: () => alert('onRetry!!'),
  onDownload: () => alert('download!!'),
  uploading: false,
  error: false,
  percentage: 30,
  uploadingText: 'Uploading...',
  tryAgainText: 'Try Again',
  switchProps: {
    label: 'Use as template',
    checked: true,
    onChange: () => alert('onChange!!'),
    isButton: true,
    isButtonDisabled: true,
  },
  contextMenuProps: {
    items: [
      {
        onClick: () => alert('context menu 01 click!!'),
        label: (
          <>
            <AccessibleIcon />
            <Typography variant='bodyLarge' ml={1.5}>
              label 01
            </Typography>
          </>
        ),
      },
      {
        onClick: () => alert('context menu 02 click!!'),
        label: (
          <>
            <AccessibleIcon />
            <Typography variant='bodyLarge' ml={1.5}>
              label 02
            </Typography>
          </>
        ),
      },
    ],
  },
};
