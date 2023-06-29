import { FC, useEffect, useMemo, useRef } from 'react';

import { withStyles } from 'tss-react/mui';

import MDialog from '@mui/material/Dialog';
import MDialogActions from '@mui/material/DialogActions';
import MDialogContent from '@mui/material/DialogContent';
import MDialogTitle from '@mui/material/DialogTitle';

import CloseIcon from '@mui/icons-material/Close';

import Box from '@components/Box';
import IconButton from '@components/IconButton';
import Skeleton from '@components/Skeleton';
import Typography from '@components/Typography';

import { DialogProps } from './props';
import styles from './styles';
import TooltipDynamic from '@components/TooltipDynamic';

const Dialog: FC<DialogProps> = ({
  onClose,
  open,
  loading,
  title,
  subtitle,
  subtitle2,
  header,
  footer,
  children,
  contentProps,
  actionsProps,
  titleProps,
  ...rest
}) => {
  const descriptionElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;

      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const renderTitle = useMemo(() => {
    if (loading)
      return (
        <>
          <Skeleton width={150} />
          <Skeleton width={100} />
        </>
      );

    return (
      <>
        <MDialogTitle {...titleProps}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: title ? 'space-between' : 'flex-end',
              alignItems: 'center',
            }}
          >
            {title && (
              <TooltipDynamic title={title} placement='top' >
                <Typography className='titleDialog' variant='titleLarge' noWrap>
                  {title}
                </Typography>
              </TooltipDynamic>
            )}
            <Box>
              <IconButton aria-label='close' className='closeButton' size='large' onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </MDialogTitle>
        {!!subtitle && <Typography className='subtitleDialog'>{subtitle}</Typography>}
        {!!subtitle2 && <Typography className='subtitle2Dialog'>{subtitle2}</Typography>}
      </>
    );
  }, [loading, title, subtitle, subtitle2, titleProps]);

  const renderContent = useMemo(() => {
    if (loading) return <Skeleton height={200} />;
    if (!children) return null;

    return (
      <MDialogContent id='scroll-description' ref={descriptionElementRef}>
        {children}
      </MDialogContent>
    );
  }, [loading, children, contentProps]);

  return (
    <MDialog {...rest} disableEscapeKeyDown aria-describedby='scroll-description' open={open}>
      {renderTitle}
      {!!header && <Box className='header'>{header}</Box>}
      {renderContent}
      {!!footer && <MDialogActions {...actionsProps}>{footer}</MDialogActions>}
    </MDialog>
  );
};

export default withStyles(Dialog, styles);
