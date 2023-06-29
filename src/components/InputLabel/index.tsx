import MInputLabel, { InputLabelProps } from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

const MyInputLabel = (props: InputLabelProps) => <MInputLabel {...props} />;

const InputLabel = styled(MyInputLabel)(({ theme }: Record<string, any>) => ({
  fontSize: theme.fontSize.medium,
  fontWeight: theme.fontWeight.semi,
  lineHeight: theme.spacing(2.5),
  color: theme.mainColors.primary1[0],
  letterSpacing: '0.1px',
  textAlign: 'left',
  '&.Mui-required': {
    '& .MuiInputLabel-asterisk': {
      color: theme.palette.error.main,
    },
  },
  textTransform: 'capitalize',
  overflow: 'hidden!important',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: 'auto',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 1, 0, 0.2),
  '&::first-letter': {
    textTransform: 'uppercase',
  },
}));

export default InputLabel;
