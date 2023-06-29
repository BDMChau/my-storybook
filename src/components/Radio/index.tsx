import { FC } from 'react';

import { withStyles } from 'tss-react/mui';

import size from 'lodash/size';

import FormControlLabel from '@mui/material/FormControlLabel';
import MRadio, { RadioProps as MRadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import SvgIcon from '@mui/material/SvgIcon';

import FormControl from '@components/FormControl';

import { ReactComponent as RadioUncheck } from '../../assets/images/icn_radio.svg';
import { ReactComponent as RadioChecked } from '../../assets/images/icn_radio_checked.svg';
import { ReactComponent as RadioDisabledUncheck } from '../../assets/images/icn_radio_disabled.svg';
import { ReactComponent as RadioDisabledChecked } from '../../assets/images/icn_radio_disabled_checked.svg';

import { RadioProps, option } from './props';
import styles from './styles';

const StyledRadio: FC<MRadioProps> = ({ disabled, ...rest }) => (
  <MRadio
    disableRipple
    checkedIcon={<SvgIcon component={!disabled ? RadioChecked : RadioDisabledChecked} />}
    icon={<SvgIcon component={!disabled ? RadioUncheck : RadioDisabledUncheck} />}
    disabled={disabled}
    {...rest}
  />
);

const Radio: FC<RadioProps> = ({ options, value, row = true, onChange, ...rest }) => (
  <FormControl {...rest}>
    <RadioGroup
      row={row}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>, value: unknown) => onChange && onChange(value)}
    >
      {!!size(options) &&
        options.map((props: option, idx: number) => (
          <FormControlLabel key={`${props.value}-${idx}`} control={<StyledRadio />} {...props} />
        ))}
    </RadioGroup>
  </FormControl>
);

export default withStyles(Radio, styles);
