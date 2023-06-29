import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledFormControl = styled(FormControl)(({ theme, error }: Record<string, any>) => ({
  '& .MuiInputBase-root': {
    fontSize: theme.fontSize.xMedium,
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: error ? theme.newColors.red[600] : theme.newColors.gray[600],
  },
}));

const StyledFormLabel = styled(FormLabel)(({ theme, disabled }: Record<string, any>) => ({
  fontWeight: theme.fontWeight.semi,
  lineHeight: theme.spacing(2.5),
  color: `${theme.newColors.gray[600]} ${disabled ? '!important' : ''}`,
}));

const StyledFormHelperText = styled(FormHelperText)(({ theme, disabled }: Record<string, any>) => ({
  marginTop: theme.spacing(0.5),
  marginLeft: theme.spacing(0),
  marginRight: theme.spacing(0),
  color: `${theme.newColors.gray[400]} ${disabled ? '!important' : ''}`,
  ...theme.typography.bodyMedium,
}));

const Optional = styled(Typography)(({ theme }: Record<string, any>) => ({
  letterSpacing: '0.1px',
  lineHeight: theme.spacing(2.5),
  color: theme.newColors.gray[400],
  padding: theme.spacing(0.1875, 0.25, 0, 0.25),
}));

export { StyledFormControl, StyledFormLabel, StyledFormHelperText, Optional };
