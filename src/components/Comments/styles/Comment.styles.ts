import MAvatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

import Box from '@components/Box';
import Popover from '@components/Popover';
import Typography from '@components/Typography';

const Container = styled(Box)<{ edit?: number }>(({ theme, edit }: Record<string, any>) => ({
  display: 'flex',
  padding: theme.spacing(1, 0),
  '& .listAction': {
    padding: theme.spacing(0.75),
    cursor: 'pointer',
    visibility: edit === 1 ? 'visible' : 'hidden',
    '&:hover': {
      // backgroundColor: 'unset',
    },
  },
  '&:hover': {
    '& .listAction': {
      visibility: 'visible',
    },
  },
}));

const GroupComment = styled(Box)(({ theme }: Record<string, any>) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(1),
}));

const Avatar = styled(MAvatar)(({ theme }: Record<string, any>) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
}));

const DateTime = styled(Typography)(({ theme }: Record<string, any>) => ({
  marginTop: theme.spacing(0.5),
  color: theme.newColors.gray[600],
}));

const Message = styled(Typography)(({ theme }: Record<string, any>) => ({
  padding: theme.spacing(1.25),
  border: `1px solid ${theme.newColors.gray[100]}`,
  borderRadius: `${theme.spacing(0.25)} ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)}`,
  color: theme.newColors.gray[800],
  background: theme.newColors.gray[100],
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
}));

const Edited = styled(Typography)(({ theme }: Record<string, any>) => ({
  color: theme.newColors.gray[400],
  paddingLeft: theme.spacing(0.5),
}));

const Modal = styled(Popover)(({ theme }: Record<string, any>) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(2),
    '& ul > li': {
      height: theme.spacing(5.5),
      width: theme.spacing(12.25),
      borderRadius: theme.spacing(1),
      margin: theme.spacing(0.5, 1, 0.5, 1),
      padding: theme.spacing(1.25),
      '&:nth-of-type(2)': {
        color: theme.newColors.red[600],
      },
    },
  },
}));

const FullName = styled(Typography)(({ theme }: Record<string, any>) => ({
  wordBreak: 'break-word',
}));

export { Container, GroupComment, Avatar, DateTime, Edited, Message, Modal, FullName };
