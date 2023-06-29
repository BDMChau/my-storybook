import { FC, memo, useMemo, useState } from 'react';

import Box from '@components/Box';
import Button from '@components/Button';
import TextField from '@components/TextField';

import { LABELS, MAX, MESSAGE } from '../constants';
import { useGlobalContext } from '../GlobalContext';
import { DataProps } from '../props';

interface InputCommentProps {
  loading?: boolean;
  data?: DataProps;
  onClose?: () => void;
}

const InputComment: FC<InputCommentProps> = ({ data, loading, onClose = () => {} }) => {
  const {
    rows,
    minRows,
    maxRows,
    maxLength,
    label,
    required,
    placeholder,
    helperText,
    buttonLabels,
    inputProps,
    onSubmit = () => {},
  } = useGlobalContext();
  const [comment, setComment] = useState<string>(data?.message ?? '');

  const _maxLength = maxLength || MAX.COMMENT_LENGTH;
  const sizeComment = comment?.length;
  const disabledActions = !sizeComment;
  const id = data?.id;

  const renderActions = useMemo(() => {
    if (!id)
      return (
        <Button
          variant='primary'
          disabled={disabledActions}
          loading={loading}
          onClick={() => {
            onSubmit({ message: comment });
            setComment('');
          }}
        >
          {buttonLabels?.submitButton ?? LABELS.SUBMIT}
        </Button>
      );

    return (
      <>
        <Button sx={{ marginRight: 2 }} variant='outlined' loading={loading} onClick={onClose}>
          {buttonLabels?.cancelButton ?? LABELS.CANCEL}
        </Button>
        <Button
          variant='primary'
          disabled={disabledActions || data?.message === comment}
          loading={loading}
          onClick={() => {
            onSubmit({ id, message: comment });
            onClose();
          }}
        >
          {buttonLabels?.saveButton ?? LABELS.SAVE}
        </Button>
      </>
    );
  }, [data, loading, comment, disabledActions]);

  return (
    <>
      <TextField
        fullWidth
        multiline
        rows={rows}
        minRows={minRows || 2}
        maxRows={maxRows || 9}
        value={comment}
        label={!id ? label : null}
        required={required}
        disabled={loading}
        inputProps={{ ...inputProps, maxLength: _maxLength }}
        placeholder={placeholder || MESSAGE.PLACEHOLDER}
        helperText={helperText || `${sizeComment}/${_maxLength} characters`}
        onChange={(value) => setComment(value?.target?.value)}
      />
      <Box sx={{ display: 'flex', justifyContent: 'end' }} mt={0.5}>
        {renderActions}
      </Box>
    </>
  );
};

export default memo(InputComment);
