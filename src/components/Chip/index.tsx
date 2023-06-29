import CloseIcon from '@mui/icons-material/Close';

import { ChipProps } from './props';
import StyledChip from './styles';

export default (props: ChipProps) => <StyledChip deleteIcon={<CloseIcon />} {...props} />;
