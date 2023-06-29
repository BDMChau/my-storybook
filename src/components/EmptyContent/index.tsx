import Box from '@components/Box';
import Typography from '@components/Typography';

import EmptyImageDefault from 'assets/images/empty_category.svg';

import { EmptyContentProps } from './props';
import useStyles from './styles';

export default function EmptyContent({ title, subTitle, width, height, emptyImage }: EmptyContentProps) {
  const { classes } = useStyles();

  return (
    <Box className={classes.emptyContent}>
      <Box className={classes.wrapContent}>
        <Box>
          <img src={emptyImage || EmptyImageDefault} width={width} height={height} alt='empty image'  />
        </Box>
        {title && (
          <Typography component='div' className={classes.emptyTitle} variant='titleSmall'>
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography component='div' className={classes.emptySubTitle} variant='bodyMedium'>
            {subTitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
