import { SxProps, Theme } from '@mui/system';

export type Tab = {
  key?: any;
  content?: React.ReactNode;
  label?: React.ReactNode;
  disabled?: boolean;
  wrapped?: boolean;
  sx?: SxProps<Theme>;
  icon?: string | React.ReactElement;
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
};

export type TabsProps = {
  variant?: 'scrollable' | 'standard';
  oval?: boolean;
  tabs?: Tab[];
  orientation?: 'horizontal' | 'vertical';
  defaultTab?: number;
  scrollButtons?: boolean;
  divider?: boolean;
  height?: number | string;
  width?: number | string;
  handleChangeTab?: (tab?: any) => void;
};

export interface TabPanelProps {
  children?: React.ReactNode;
  hidden?: boolean;
  index?: string | number;
}
