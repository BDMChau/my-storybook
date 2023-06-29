import Popover, { PopoverProps } from '@mui/material/Popover';
import { styled } from '@mui/material/styles';

const StyledPopover = styled(Popover)(({ theme, elevation }: Record<string, any>) => {
  const defaults: Record<string, any> = {
    borderRadius: theme.borderRadius.default,
  };

  if (elevation === undefined) {
    defaults.boxShadow = theme.elevations.depth02;
  }

  return {
    '& .MuiPaper-root': defaults,
  };
});

export default (props: PopoverProps) => <StyledPopover {...props} />;
