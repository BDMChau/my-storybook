import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: Record<string, any>) => ({
  arrow: {
    color: theme.newColors.gray[800],
    '::before': {
      // transformOrigin: '0 80% !important',
      // borderRadius: theme.spacing(0.375),
      // height: theme.spacing(1.75),
    },
  },
  tooltip: {
    ...theme.typography.bodyLarge,
    borderRadius: theme.borderRadius.default,
    backgroundColor: theme.newColors.gray[800],
    maxWidth: theme.spacing(37.5),
    padding: theme.spacing(1, 1.5),
  },
}));

export default useStyles;
