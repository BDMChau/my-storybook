import { SxProps, Theme } from '@mui/material/styles';

type ItemContextMenu = {
  label: React.ReactNode | string;
  onClick?: (e: any) => void;
};

export type CardAttachmentProps = {
  className?: string;
  src?: string;
  icon?: 'document' | 'video' | 'image' | 'audio' | 'assignment' | 'quiz' | 'test' | 'lesson' | 'course' | 'unknown';
  title?: string;
  subTitle?: string;
  onClick?: (e: any) => void;
  onRemove?: () => void;
  onDownload?: () => void;
  onRetry?: () => void;
  sx?: SxProps<Theme>;
  switchProps?: {
    label?: string;
    checked?: boolean;
    isButton?: boolean;
    isButtonDisabled?: boolean;
    onChange?: (value?: any) => void;
  };
  contextMenuProps?: {
    items?: ItemContextMenu[];
  };
  endTitle?: string;
  uploading?: boolean;
  error?: boolean;
  uploadingText?: string;
  tryAgainText?: string;
  percentage?: number;
};
