import { DialogProps as DefaultProps } from '@mui/material/Dialog';
import { DialogActionsProps } from '@mui/material/DialogActions';
import { DialogContentProps } from '@mui/material/DialogContent';
import { DialogTitleProps } from '@mui/material/DialogTitle';

export type DialogProps = DefaultProps & {
  onClose: () => void;
  loading?: boolean;
  title?: string;
  subtitle?: string;
  subtitle2?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  contentProps?: DialogContentProps;
  actionsProps?: DialogActionsProps;
  titleProps?: DialogTitleProps;
  maxWidth?: 'sm' | 'md' | 'lg' | false;
};
