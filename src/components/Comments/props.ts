import { TextFieldProps } from '../TextField/props';

export type _ID = string | number;

export type DataProps = {
  id?: _ID;
  message?: string;
};

export type User = {
  id: number;
  firstName?: string;
  lastName?: string;
  avatar?: string;
};

export type Comment = {
  id: _ID;
  createdAt: string;
  user: User;
  message?: string;
  edited?: boolean;
};

export type Actions = {
  onRemove?: (id?: _ID) => void;
  onSubmit?: (values?: DataProps) => void;
};

export type ButtonLabels = {
  editButton?: string;
  removeButton?: string;
  submitButton?: string;
  cancelButton?: string;
  saveButton?: string;
};

export type ConfirmProps = {
  title?: string;
  message?: string;
};

export type CommentsProps = Actions & {
  required?: boolean;
  className?: string;
  comments?: Comment[];
  currentUserId?: number;
  loading?: boolean;
  maxLength?: number;
  maxHeightScroll?: number;
  enableScroll?: boolean;
  placeholder?: string;
  label?: string;
  helperText?: string;
  buttonLabels?: ButtonLabels;
  confirmProps?: ConfirmProps;
  minRows?: number;
  maxRows?: number;
  rows?: number;
  inputProps?: TextFieldProps['inputProps'];
};
