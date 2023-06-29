import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import useStyles from './styles';

export default (props: TooltipProps) => {
  const { classes } = useStyles();

  return <Tooltip {...props} classes={classes} TransitionComponent={Zoom} arrow />;
};
