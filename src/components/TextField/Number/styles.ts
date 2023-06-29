import { styled } from '@mui/material/styles';

import Box from '@components/Box';

const ArrowIcon = styled(Box)(({ theme }: Record<string, any>) => ({
  height: theme.spacing(1.75),

  '& .MuiSvgIcon-root': {
    color: theme.newColors.gray[600],
    cursor: 'pointer',
    fontSize: theme.fontSize.xMedium,
    ':hover': {
      color: theme.newColors.gray[400],
    },
  },
}));

export default ArrowIcon;
