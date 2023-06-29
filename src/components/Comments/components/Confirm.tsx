import { FC, memo, useMemo } from 'react';

import Button from '@components/Button';
import Dialog from '@components/Dialog';
import Typography from '@components/Typography';

import { LABELS, MESSAGE } from '../constants';
import { useGlobalContext } from '../GlobalContext';
import { ConfirmProps, _ID } from '../props';

type DefaultsProps = ConfirmProps & {
  onClose: () => void;
  id?: _ID;
  loading?: boolean;
};

const FormConfirm: FC<DefaultsProps> = ({ id, loading, onClose }) => {
  const { buttonLabels, confirmProps, onRemove = () => {} } = useGlobalContext();

  const renderFooter = useMemo(
    () => (
      <>
        <Button variant='outlined' loading={loading} onClick={onClose}>
          {buttonLabels?.cancelButton ?? LABELS.CANCEL}
        </Button>
        <Button
          variant='danger'
          loading={loading}
          onClick={() => {
            onRemove(id);
            onClose();
          }}
        >
          {buttonLabels?.removeButton ?? LABELS.REMOVE}
        </Button>
      </>
    ),
    [loading, id]
  );

  return (
    <Dialog open={!!id} title={confirmProps?.title ?? MESSAGE.TITLE_CONFIRM} onClose={onClose} footer={renderFooter}>
      <Typography variant='bodyLarge'>{confirmProps?.message ?? MESSAGE.CONFIRM}</Typography>
    </Dialog>
  );
};

export default memo(FormConfirm);
