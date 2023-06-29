import { forwardRef } from 'react';

import Paper, { PaperProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }: Record<string, any>) => ({
  '& ::-webkit-scrollbar': {
    width: 5,
  },
  '& ::-webkit-scrollbar-track': {
    borderRadius: theme.borderRadius.default,
    marginBlock: 5,
  },
  '& ::-webkit-scrollbar-thumb': {
    borderRadius: theme.borderRadius.default,
    backgroundColor: theme.newColors.gray[300],
  },
}));

export default forwardRef<HTMLDivElement, PaperProps>((props, ref) => <StyledPaper ref={ref} {...props} />);
