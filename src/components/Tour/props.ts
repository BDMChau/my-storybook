import { ReactourProps } from 'reactour';

export type TourProps = ReactourProps & {
  onFinish?: () => void;
};
