import MTypography from '@mui/material/Typography';

import { TypographyProps } from './props';

export default ({ children, ...rest }: TypographyProps) => <MTypography {...rest}>{children}</MTypography>;
