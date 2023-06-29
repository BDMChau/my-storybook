import DialogContentText from '@mui/material/DialogContentText';
import { DialogContentTextProps } from '@mui/material/DialogContentText';
import { styled } from '@mui/material/styles';

const StyledDialogContentText = styled(DialogContentText)(({ theme }: Record<string, any>) => ({
  ...theme.typography.bodyLarge,
}));

export default (props: DialogContentTextProps) => <StyledDialogContentText {...props} />;
