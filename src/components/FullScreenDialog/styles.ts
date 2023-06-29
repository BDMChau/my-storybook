import AppBar from '@mui/material/AppBar';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

import Box from '@components/Box';
import Typography from '@components/Typography';

const StyledAppBar = styled(AppBar)(({ theme }: Record<string, any>) => ({
  height: theme.spacing(9),
  background: '#fff',
  boxShadow: theme.elevations.depth01,
  position: 'relative',
  marginBottom: theme.spacing(1),
}));

const Title = styled(Typography)(({ theme }: Record<string, any>) => ({
  color: theme.newColors.gray[800],
  flex: 1,
  marginLeft: theme.spacing(2),
}));

const StyledDialog = styled(Dialog)(({ theme }: Record<string, any>) => ({
  '& .MuiDialog-paperFullScreen': {
    backgroundColor: theme.newColors.gray[50],
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }: Record<string, any>) => ({
  height: '100%',
}));

const Content = styled(Box)(({ theme }: Record<string, any>) => ({
  overflowY: 'auto',
  paddingBottom: theme.spacing(10),
  '&::-webkit-scrollbar': {
    width: 5,
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: theme.borderRadius.default,
    backgroundColor: theme.newColors.gray[300],
  },
}));

export { StyledAppBar, StyledDialog, Title, Content, StyledToolbar };
