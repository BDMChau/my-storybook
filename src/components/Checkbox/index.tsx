import { FC, SyntheticEvent } from 'react';

import { withStyles } from 'tss-react/mui';

import MCheckbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import SvgIcon from '@mui/material/SvgIcon';

import Typography from '@components/Typography';

import { ReactComponent as CheckboxIndeterminate } from '../../assets/images/icn_checkbox_indeterminate.svg';
import { ReactComponent as CheckboxSelected } from '../../assets/images/icn_checkbox_selected.svg';
import { ReactComponent as CheckboxUnselected } from '../../assets/images/icn_checkbox_unselected.svg';

import { CheckboxLabelProps } from './props';
import styles from './styles';

export const Checkbox: FC<CheckboxProps> = withStyles(
  (props) => (
    <MCheckbox
      disableRipple
      checkedIcon={<SvgIcon component={CheckboxSelected} />}
      indeterminateIcon={<SvgIcon component={CheckboxIndeterminate} />}
      icon={<SvgIcon component={CheckboxUnselected} />}
      {...props}
    />
  ),
  styles
);

export default ({ label, indeterminate, onChange, ...rest }: CheckboxLabelProps) => (
  <FormControlLabel
    control={<Checkbox indeterminate={indeterminate} />}
    label={<Typography variant='bodyMedium'>{label}</Typography>}
    onChange={(event: SyntheticEvent, checked: boolean) => !!onChange && onChange(checked)}
    {...rest}
  />
);
