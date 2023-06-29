import CircularProgress from '@mui/material/CircularProgress';

import Typography from '@components/Typography';

import { ReactComponent as NoStudentsAvailable } from '../../../assets/images/no_students_available.svg';
import { EmptyPageProps } from '../props';
import { EmptyPage } from '../styles';

export default ({ emptyContent, loading }: EmptyPageProps) => {
  const content = emptyContent || 'No students available.';

  return (
    <EmptyPage>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <NoStudentsAvailable />
          <Typography component='div' variant='bodyLarge' textAlign='center'>
            {content}
          </Typography>
        </div>
      )}
    </EmptyPage>
  );
};
