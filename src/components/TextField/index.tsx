import DatePicker from './DateTimePicker/DatePicker';
import DateTimePicker from './DateTimePicker/DateTimePicker';
import TimePicker from './DateTimePicker/TimePicker';
import Number from './Number';
import Password from './Password';
import Phone from './Phone';
import { TextFieldProps, Types } from './props';
import OutlinedInput from './Text';

export default ({ type, defaultCountry, ...rest }: TextFieldProps) => {
  switch (type) {
    case Types.password:
      return <Password {...rest} />;
    case Types.number:
      return <Number {...rest} />;
    case Types.date:
      return <DatePicker {...rest} />;
    case Types.time:
      return <TimePicker {...rest} />;
    case Types.dateTime:
      return <DateTimePicker {...rest} />;
    case Types.phone:
      return <Phone defaultCountry={defaultCountry} {...rest} />;
    default:
      return <OutlinedInput {...rest} />;
  }
};
