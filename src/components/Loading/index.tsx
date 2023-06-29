import CircularProgress from '@mui/material/CircularProgress';

import Box from '@components/Box';

export default () => (
  <Box
    display='flex'
    width='100%'
    height='100%'
    alignContent='center'
    justifyContent='center'
    justifyItems='center'
    alignItems='center'
  >
    <CircularProgress />
  </Box>
);
