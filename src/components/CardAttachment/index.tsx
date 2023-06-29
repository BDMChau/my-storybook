import { useMemo, useState } from 'react';

import size from 'lodash/size';

import AudioFileIcon from '@mui/icons-material/AudioFileOutlined';
import CloseIcon from '@mui/icons-material/CloseRounded';
import DocumentFileIcon from '@mui/icons-material/DescriptionOutlined';
import ErrorIcon from '@mui/icons-material/ErrorOutlined';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideoFileIcon from '@mui/icons-material/VideoFileOutlined';

import Box from '@components/Box';
import Button from '@components/Button';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';
import MenuItem from '@components/Menu/MenuItem';
import MenuList from '@components/Menu/MenuList';
import Popover from '@components/Popover';
import Switch from '@components/Switch';
import TooltipDynamic from '@components/TooltipDynamic';
import Typography from '@components/Typography';

import { ReactComponent as IcnAssignment } from '../../assets/images/icn_assignment.svg';
import { ReactComponent as IcnLesson } from '../../assets/images/icn_lesson.svg';
import { ReactComponent as IcnMenu } from '../../assets/images/icn_myCourses.svg';
import { ReactComponent as IcnQuiz } from '../../assets/images/icn_quiz.svg';

import { CardAttachmentProps } from './props';
import { CardAttachment, GroupTitle, LeftBox, ProgressBar, RightBox, SubTitleBox } from './styles';

export default ({
  className,
  sx,
  src,
  icon,
  title,
  subTitle,
  switchProps = {},
  contextMenuProps = {},
  onClick = () => {},
  onRemove,
  onDownload,
  onRetry = () => {},
  endTitle,
  uploadingText,
  tryAgainText,
  percentage,
  uploading = false,
  error = false,
}: CardAttachmentProps) => {
  const [openContextMenu, setOpenContextMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const renderIcon = useMemo(() => {
    if (src) {
      return <img className='google-icon' loading='lazy' width='1em' height='1em' alt='Course image' src={src} />;
    }

    switch (icon) {
      case 'audio':
        return <AudioFileIcon />;
      case 'video':
        return <VideoFileIcon />;
      case 'image':
        return <ImageIcon />;
      case 'document':
        return <DocumentFileIcon />;
      case 'assignment':
        return <IcnAssignment />;
      case 'quiz':
      case 'test':
        return <IcnQuiz />;
      case 'lesson':
        return <IcnLesson />;
      case 'course':
        return <IcnMenu />;
      case 'unknown':
        return <ErrorIcon />;
      default:
        return <IcnMenu />;
    }
  }, [src, icon]);

  const renderSwitch = useMemo(() => {
    if (!size(switchProps)) return null;
    const { label, checked, isButton, isButtonDisabled, onChange = () => {} } = switchProps;

    if (isButton)
      return (
        <Button
          sx={{ whiteSpace: 'nowrap', marginRight: 2, height: 32 }}
          disabled={isButtonDisabled}
          onClick={onChange}
        >
          {label}
        </Button>
      );

    return (
      <Box mr={2} display={'flex'}>
        {label && (
          <Typography noWrap component='div' mr={1} variant='bodyLarge'>
            {label}
          </Typography>
        )}
        <Switch checked={checked} onChange={({ target }) => onChange({ checked: target?.checked })} />
      </Box>
    );
  }, [switchProps]);

  const renderContextMenu = () => {
    if (!size(contextMenuProps?.items)) return null;

    return (
      <Popover
        anchorEl={anchorEl}
        keepMounted
        open={openContextMenu}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuList>
          {contextMenuProps?.items?.map((item) => (
            <MenuItem
              disableRipple
              onClick={(e) => {
                e.stopPropagation();
                item.onClick && item.onClick(e);
                handleClosePopover(e);
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    );
  };

  const handleOpenPopover = (e: any) => {
    e.preventDefault();
    setAnchorEl(e.target);
    setOpenContextMenu(true);
  };

  const handleClosePopover = (e: any) => {
    if (anchorEl && anchorEl.contains(e.target)) {
      return;
    }
    setAnchorEl(null);
    setOpenContextMenu(false);
  };

  return (
    <>
      {renderContextMenu()}

      <CardAttachment
        className={className}
        sx={sx}
        elevation={0}
        onClick={(e) => !error && !uploading && onClick && onClick(e)}
      >
        <LeftBox sx={{ flexGrow: 1 }} uploading={uploading} error={error}>
          {renderIcon}
          <Divider sx={{ height: 60, ml: 3, mr: 2 }} orientation='vertical' />
          <GroupTitle>
            <Box className='title'>
              <TooltipDynamic title={title} placement='top'>
                <Typography variant='titleSmall'>
                  {title}
                </Typography>
              </TooltipDynamic>
            </Box>
            <SubTitleBox className='subTitle'>
              <Typography noWrap component='div' variant='bodySmall'>
                {uploading ? uploadingText : subTitle}
              </Typography>
              {error && (
                <Typography
                  noWrap
                  component='div'
                  variant='bodySmall'
                  onClick={() => {
                    onRetry && onRetry();
                  }}
                >
                  {tryAgainText}
                </Typography>
              )}
            </SubTitleBox>
          </GroupTitle>
        </LeftBox>
        <RightBox onClick={(e) => e.stopPropagation()}>
          {renderSwitch}
          {endTitle && (
            <Typography noWrap component='div' mr={1} variant='bodyLarge'>
              {endTitle}
            </Typography>
          )}
          {onDownload && (
            <IconButton sx={{ ml: 1 }} onClick={() => onDownload()}>
              <Icon icon='download' />
            </IconButton>
          )}
          {onRemove && (
            <IconButton sx={{ ml: 1 }} onClick={() => onRemove()}>
              <CloseIcon fontSize='small' />
            </IconButton>
          )}
          {!!size(contextMenuProps) && (
            <IconButton sx={{ ml: 1 }} onClick={(e) => handleOpenPopover(e)}>
              <MoreVertIcon fontSize='small' />
            </IconButton>
          )}
        </RightBox>
        {uploading && <ProgressBar variant='determinate' value={percentage} />}
      </CardAttachment>
    </>
  );
};
