import { useState } from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

import Box from '@components/Box';
import Button from '@components/Button';
import ListItemIcon from '@components/List/ListItemIcon';
import ListItemText from '@components/List/ListItemText';
import MenuItem from '@components/Menu/MenuItem';
import MenuList from '@components/Menu/MenuList';
import Popover from '@components/Popover';
import Switch from '@components/Switch';
import Typography from '@components/Typography';

export default {
  title: 'Context Menu',
};

export const Demo = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [showIcon, setShowIcon] = useState<boolean>(true);

  const handleCloseMenuList = () => setAnchorEl(null);

  return (
    <>
      <Box sx={{ marginBottom: 1 }}>
        <Typography mr={1} variant='bodyLarge'>
          Show Icon
        </Typography>
        <Switch checked={showIcon} onChange={() => setShowIcon((prev) => !prev)} />
      </Box>
      <Button onClick={(e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)}>Open Context Menu</Button>
      <Popover
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
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
          <MenuItem disableRipple onClick={handleCloseMenuList}>
            {showIcon && (
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
            )}
            <ListItemText>
              <Typography variant='bodyLarge'>Edit Item</Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem disableRipple onClick={handleCloseMenuList}>
            {showIcon && (
              <ListItemIcon>
                <DeleteOutlineIcon sx={{ color: (theme: any) => theme.newColors.red[600] }} />
              </ListItemIcon>
            )}
            <ListItemText>
              <Typography variant='bodyLarge' sx={{ color: (theme: any) => theme.newColors.red[600] }}>
                Remove Item
              </Typography>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
};
