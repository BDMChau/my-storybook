import { makeStyles } from 'tss-react/mui';

import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';

import IconButton from '@components/IconButton';

const StyledIconButton = styled(IconButton)(({ theme }: Record<string, any>) => ({
  '&:hover': {
    backgroundColor: 'unset !important',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '14px !important',
    color: `${theme.newColors.gray[500]} !important`,
    ':hover': {
      color: `${theme.newColors.gray[700]} !important`,
    },
  },
}));

const StyledOutlinedInput = styled(OutlinedInput)(({ theme, disabled, error }: Record<string, any>) => ({
  fontSize: theme.fontSize.xMedium,
  backgroundColor: disabled ? theme.newColors.gray[100] : 'white',
  borderRadius: theme.borderRadius.default,
  '&:has(textarea)': {
    paddingRight: theme.spacing(1),
  },
  '& textarea': {
    '::-webkit-scrollbar': {
      // display: 'none',
    },
  },
  '& .Mui-focused': {
    '.MuiOutlinedInput-notchedOutline': {
      borderWidth: `${theme.spacing(0.1875)} !important`,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    minHeight: theme.spacing(5),
    borderRadius: theme.borderRadius.default,
    borderWidth: `${theme.spacing(0.1875)}`,
    transition: theme.transitionDefault,
    borderColor: `${
      !disabled ? (error ? theme.newColors.red[600] : theme.newColors.gray[200]) : theme.newColors.gray[100]
    } !important`,
  },
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: `${disabled ? 'none' : error ? theme.newColors.red[600] : theme.newColors.primary[500]} !important`,
    },
  },
  '&:focus-within': {
    '.MuiOutlinedInput-notchedOutline': {
      borderWidth: `${theme.spacing(0.1875)}`,
      borderColor: `${error ? theme.newColors.red[600] : theme.newColors.primary[500]} !important`,
      boxShadow: `${theme.spacing(0, 0, 0, 0.5)} ${error ? theme.newColors.red[50] : theme.newColors.primary[50]}`,
    },
  },
}));

const useStyles = makeStyles()(() => ({
  textarea: {
    resize: 'both',
  },
}));

export { StyledIconButton, StyledOutlinedInput, useStyles };
