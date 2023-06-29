import { useState } from 'react';

import size from 'lodash/size';

import ButtonGroup from '@mui/material/ButtonGroup';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Box from '@components/Box';
import Button from '@components/Button';
import MenuItem from '@components/Menu/MenuItem';
import MenuList from '@components/Menu/MenuList';
import Popover from '@components/Popover';
import Typography from '@components/Typography';

import { OptionItemsProps, SplitButtonProps } from './props';

export default ({ disabled, primaryLabel, optionItems, onClickPrimary, className }: SplitButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <ButtonGroup aria-label='split button' className={className}>
        <Button disabled={disabled} onClick={onClickPrimary}>
          {primaryLabel}
        </Button>
        <Box width='2px' sx={{ backgroundColor: disabled ? '#D4D4D8' : '#0F6BE6' }} />
        <Button
          disabled={disabled}
          onClick={(e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)}
          style={{ padding: 0, minWidth: 32 }}
        >
          <KeyboardArrowDownIcon fontSize='small' />
        </Button>
      </ButtonGroup>
      {!!size(optionItems) && (
        <Popover
          keepMounted
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
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
            {optionItems.map((item: OptionItemsProps) => {
              const { label, onItemClick, value } = item;

              return (
                <MenuItem
                  key={label}
                  onClick={() => {
                    onItemClick(value);
                    handleClose();
                  }}
                >
                  <Typography variant='bodyLarge' >{label}</Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Popover>
      )}
    </>
  );
};
