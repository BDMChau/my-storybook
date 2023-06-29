import { SxProps, Theme } from '@mui/material/styles';

export type FullScreenDialogProps = {
  sx?: SxProps<Theme>;
  className?: string;
  open?: boolean;
  children?: React.ReactNode;
  groupButtons?: React.ReactNode;
  title?: string;
  onClose: () => void;
  displayAppBar: Boolean;
};
