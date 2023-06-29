import { useState } from 'react';

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import IconButton from '@components/IconButton';

import { TextFieldProps, Types } from '../props';
import TextDefault from '../Text';

export default ({ disabled, ...props }: TextFieldProps) => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <TextDefault
      {...props}
      disabled={disabled}
      type={visible ? Types.password : Types.text}
      endAdornment={
        <IconButton
          disabled={disabled}
          sx={{ ':hover': { backgroundColor: 'unset !important' } }}
          onClick={() => setVisible((prev) => !prev)}
        >
          {visible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
        </IconButton>
      }
    />
  );
};
