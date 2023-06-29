import { FC, memo, useState } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '@components/Box';
import IconButton from '@components/IconButton';
import MenuItem from '@components/Menu/MenuItem';
import MenuList from '@components/Menu/MenuList';
import Typography from '@components/Typography';

import format from 'date-fns/format';

import { FORMAT, LABELS } from '../constants';
import { useGlobalContext } from '../GlobalContext';
import { Comment, DataProps, _ID } from '../props';
import { Avatar, Container, DateTime, Edited, FullName, GroupComment, Message, Modal } from '../styles/Comment.styles';

import InputComment from './InputComment';

type CommentProps = Comment & {
  loading?: boolean;
  onRemove: (id: _ID) => void;
};

const Component: FC<CommentProps> = ({ id, user, createdAt, message, edited, loading, onRemove }) => {
  const { currentUserId, buttonLabels } = useGlobalContext();
  const [data, setData] = useState<DataProps | undefined>();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const { firstName, lastName, avatar, id: userId } = user || {};

  const isSameUserId = currentUserId === userId;

  const handleCloseMenuList = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <Container edit={open ? 1 : 0}>
      <Avatar alt={firstName} src={avatar}>
        <Typography>{`${firstName?.charAt(0)}${lastName?.charAt(0)}`}</Typography>
      </Avatar>
      <GroupComment>
        <Box
          sx={{
            mb: 0.25,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <FullName variant='labelLarge'>
              {firstName || ''} {lastName || ''}
            </FullName>
          </Box>
          {isSameUserId && (
            <Box height={'10px'} marginTop={'-36px'}>
              <IconButton
                className='listAction'
                onClick={(e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)}
              >
                <MoreVertIcon />
              </IconButton>
              <Modal
                keepMounted
                elevation={10}
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenuList}
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
                  <MenuItem
                    disableRipple
                    onClick={() => {
                      setData({ id, message });
                      handleCloseMenuList();
                    }}
                  >
                    <Typography variant='bodyLarge'>{buttonLabels?.editButton ?? LABELS.EDIT}</Typography>
                  </MenuItem>
                  <MenuItem
                    disableRipple
                    onClick={() => {
                      onRemove(id);
                      handleCloseMenuList();
                    }}
                  >
                    <Typography variant='bodyLarge'>{buttonLabels?.removeButton ?? LABELS.REMOVE}</Typography>
                  </MenuItem>
                </MenuList>
              </Modal>
            </Box>
          )}
        </Box>
        {!data ? (
          <>
            <Message component='div' variant='bodyLarge'>
              {message}
              {edited && <Edited variant='bodyMedium'>{' (edited)'}</Edited>}
            </Message>
            <DateTime component='div' variant='bodySmall'>
              {createdAt}
            </DateTime>
          </>
        ) : (
          <InputComment data={data} loading={loading} onClose={() => setData(undefined)} />
        )}
      </GroupComment>
    </Container>
  );
};

export default memo(Component);
