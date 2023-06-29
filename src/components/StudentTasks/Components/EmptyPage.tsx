import { memo } from 'react';

import Typography from '@components/Typography';

import { ReactComponent as AssignedIcon } from '../../../assets/images/empty_assigned.svg';
import { ReactComponent as PlannedIcon } from '../../../assets/images/empty_planned.svg';
import { EMPTY_PAGE } from '../constants';
import { useGlobalContext } from '../GlobalContext';
import { EmptyPage } from '../styles';

export default memo(() => {
  const { emptyContent } = useGlobalContext();

  const { title, subTitle, image, imgType = EMPTY_PAGE.IMG_TYPE } = emptyContent || {};

  const _type = imgType === EMPTY_PAGE.IMG_TYPE;

  return (
    <EmptyPage className='emptyPage' mt={8} mb={8}>
      {image ? image : _type ? <AssignedIcon /> : <PlannedIcon />}
      <Typography
        component='div'
        className={_type ? 'emptyTitle' : 'emptySubTitle'}
        variant={_type ? 'titleMedium' : 'bodyMedium'}
      >
        {title !== undefined ? title : _type ? EMPTY_PAGE.TITLE_ASSIGNED : EMPTY_PAGE.TITLE_PLANNED}
      </Typography>
      <Typography className='emptySubTitle' component='div' variant='bodyMedium'>
        {subTitle !== undefined ? subTitle : _type ? EMPTY_PAGE.SUB_ASSIGNED : EMPTY_PAGE.SUB_PLANNED}
      </Typography>
    </EmptyPage>
  );
});
