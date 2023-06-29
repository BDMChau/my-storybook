import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: any) => ({
  emptyContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxHeight: 'calc(100% - 50px)',
    height: '100%',
  },
  wrapContent: {
    textAlign: 'center',
    alignItems: 'center',
    '& .title': {
      fontWeight: theme.fontWeight.semi,
      fontSize: theme.fontSize.large,
    },
    '& .subtitle': {
      fontSize: theme.fontSize.normal,
      fontWeight: theme.fontWeight.normal,
    },
  },
  emptyTitle: {
    color: theme.newColors.gray[600],
  },
  emptySubTitle: {
    color: theme.newColors.gray[400],
  },
}));

export default useStyles;
