// import FormControl from '@mui/material/FormControl';
import { makeStyles } from 'tss-react/mui';

import { styled } from '@mui/material/styles';

import FormControl from '@components/FormControl';

const StyledFormControl = styled(FormControl)(({ theme, disabled, error }: Record<string, any>) => {
  const space_4 = theme.spacing(0.5);
  const space_8 = theme.spacing(1);

  return {
    '& .MuiInputBase-root': {
      backgroundColor: 'white',
      borderRadius: theme.borderRadius.default,
      minHeight: 40,
      transition: theme.transitionDefault,
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderWidth: `${theme.spacing(0.1875)}`,
      borderColor: `${
        !disabled ? (error ? theme.newColors.red[600] : theme.newColors.gray[200]) : theme.newColors.gray[100]
      } !important`,
      transition: theme.transitionDefault,
    },
    '&:hover': {
      '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: `${
          disabled ? 'none' : error ? theme.newColors.red[600] : theme.newColors.primary[500]
        } !important`,
      },
    },
    '&:focus-within': {
      '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderWidth: `${theme.spacing(0.1875)}`,
        borderColor: `${error ? theme.newColors.red[600] : theme.newColors.primary[500]} !important`,
        boxShadow: `${theme.spacing(0, 0, 0, 0.5)} ${error ? theme.newColors.red[50] : theme.newColors.primary[50]}`,
      },
    },
    '& .MuiAutocomplete-root .Mui-disabled': {
      backgroundColor: theme.newColors.gray[100],
      border: theme.newColors.gray[100],
    },
    '& .MuiAutocomplete-option': {
      marginTop: space_4,
      marginBottom: space_4,
      borderRadius: space_4,
      height: 40,
      justifyContent: 'space-between !important',
    },
    '& .MuiAutocomplete-listbox.MuiAutocomplete-option[aria-selected="true"]': {
      backgroundColor: 'unset',
    },
    '& .MuiAutocomplete-option[aria-selected="true"]': {
      backgroundColor: 'unset !important',
      marginLeft: space_8,
      marginRight: space_8,
      paddingLeft: space_8,
      paddingRight: space_8,
      '&:hover': {
        backgroundColor: `${theme.newColors.gray[100]} !important`,
      },
    },
    '& .MuiAutocomplete-option.Mui-focused': {
      padding: space_8,
      marginLeft: space_8,
      marginRight: space_8,
    },
    '& .MuiAutocomplete-paper': {
      paddingRight: space_4,
      marginTop: space_8,
      borderRadius: theme.borderRadius.default,
      boxShadow: `${theme.elevations.depth02}`,
      '& ::-webkit-scrollbar': {
        width: 5,
      },
      '& ::-webkit-scrollbar-track': {
        borderRadius: theme.borderRadius.default,
        marginBlock: 5,
      },
      '& ::-webkit-scrollbar-thumb': {
        borderRadius: theme.borderRadius.default,
        backgroundColor: theme.newColors.gray[300],
      },
    },
  };
});

export default StyledFormControl;

export const useStyles = makeStyles()((theme: Record<string, any>) => ({
  customAvatar: {
    width: theme.spacing(6),
    minWidth: theme.spacing(6),
    height: theme.spacing(6),
    background: theme.newColors.gray[100],
    color: theme.mainColors.gray[6],
    fontSize: theme.fontSize.normal,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));