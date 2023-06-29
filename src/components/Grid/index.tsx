import { forwardRef } from 'react';

import Grid, { GridProps } from '@mui/material/Grid';

export default forwardRef<HTMLDivElement, GridProps>((props, ref) => <Grid ref={ref} {...props} />);
