import { SxProps, Theme } from '@mui/material/styles';

export type Status = 'active' | 'pending' | 'suspended' | 'locked' | 'choice';

export type ChipProps = {
  className?: string;
  label?: string;
  status?: Status;
  size?: 'small' | 'medium';
  onDelete?: (event?: any) => void;
  onClick?: () => void;
  icon?: React.ReactElement;
  sx?: SxProps<Theme>;
  selected?: boolean;
};
