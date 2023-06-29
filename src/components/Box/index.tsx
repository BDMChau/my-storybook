import { forwardRef } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

export default forwardRef<HTMLDivElement, BoxProps>((props, ref) => <Box ref={ref} {...props} />);
