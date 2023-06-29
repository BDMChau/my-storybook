const styles = (theme: Record<string, any>) => ({
  root: {
    borderRadius: theme.borderRadius.default,
    padding: theme.spacing(1, 2),
    alignItems: 'center',
  },
  icon: {
    padding: 0,
  },
  message: {
    padding: 0,
    ...theme.typography.bodyLarge,
  },
  standardSuccess: {
    border: `solid 1px ${theme.newColors.green[100]}`,
    backgroundColor: theme.newColors.green[50],
    color: theme.newColors.green[900],
    '& .MuiAlert-icon': {
      color: theme.newColors.green[600],
    },
  },
  standardWarning: {
    border: `solid 1px ${theme.newColors.yellow[100]}`,
    backgroundColor: theme.newColors.yellow[50],
    color: theme.newColors.yellow[900],
    '& .MuiAlert-icon': {
      color: theme.newColors.yellow[600],
    },
  },
  standardError: {
    border: `solid 1px ${theme.newColors.red[100]}`,
    backgroundColor: theme.newColors.red[50],
    color: theme.newColors.red[900],
    '& .MuiAlert-icon': {
      color: theme.newColors.red[600],
    },
  },
  standardInfo: {
    border: `solid 1px ${theme.newColors.blue[100]}`,
    backgroundColor: theme.newColors.blue[50],
    color: theme.newColors.blue[900],
    '& .MuiAlert-icon': {
      color: theme.newColors.blue[600],
    },
  },
});

export default styles;
