import { ReactElement, Ref, forwardRef } from 'react';

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import CloseIcon from '@mui/icons-material/CloseRounded';

import IconButton from '@components/IconButton';

import { FullScreenDialogProps } from './props';
import { Content, StyledAppBar, StyledDialog, StyledToolbar, Title } from './styles';

const Transition = forwardRef((props: TransitionProps & { children: ReactElement }, ref: Ref<unknown>) => (
  <Slide direction='up' ref={ref} {...props} />
));

export default ({ children, groupButtons, title, open, onClose, displayAppBar = true, ...rest }: FullScreenDialogProps) => (
  <StyledDialog fullScreen open={!!open} onClose={onClose} TransitionComponent={Transition} {...rest}>
    {
      displayAppBar &&
      <StyledAppBar>
        <StyledToolbar>
          <IconButton aria-label='close' size='medium' onClick={onClose}>
            <CloseIcon />
          </IconButton>
          {!!title && (
            <Title component='div' variant='titleLarge'>
              {title}
            </Title>
          )}
          {groupButtons}
        </StyledToolbar>
      </StyledAppBar>
    }
    <Content>{children}</Content>
  </StyledDialog>
);
