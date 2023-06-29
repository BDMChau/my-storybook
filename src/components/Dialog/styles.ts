const styles: any = (theme: Record<string, any>) => ({
  paper: {
    padding: theme.spacing(3, 3),
    minWidth: theme.spacing(62.5),
    color: theme.newColors.gray[800],
    borderRadius: theme.spacing(2),
    boxShadow: `${theme.spacing(0, 0, 2, 0)} rgba(0, 0, 0, 0.24)`,
    '& ::-webkit-scrollbar': {
      width: 5,
    },
    '& ::-webkit-scrollbar-thumb': {
      borderRadius: theme.borderRadius.default,
      backgroundColor: theme.newColors.gray[300],
    },
  },
  root: {
    '& .MuiDialogTitle-root': {
      wordBreak: 'break-all',
      padding: theme.spacing(0, 0, 0, 1),
    },
    '& .subtitleDialog': {
      fontSize: theme.fontSize.normal,
      fontWeight: theme.fontWeight.semi,
      color: theme.newColors.gray[800],
    },
    '& .subtitle2Dialog': {
      wordBreak: 'break-all',
      fontSize: theme.fontSize.xSmall,
      fontWeight: theme.fontWeight.semi,
      color: theme.newColors.gray[500],
      lineHeight: theme.spacing(2),
    },
    '& .MuiDialogContent-root': {
      margin: theme.spacing(2, 0),
      padding: theme.spacing(0, 1),
      '& .MuiDialogContentText-root': {
        fontSize: theme.fontSize.small,
        fontWeight: theme.fontWeight.normal,
        color: theme.newColors.gray[800],
      },
    },
    '& .MuiDialogActions-root': {
      marginTop: theme.spacing(3),
      padding: theme.spacing(0, 1),
      '&>:not(:first-of-type)': {
        marginLeft: theme.spacing(2),
      },
    },
    '& button[class*="closeButton"]': {
      backgroundColor: 'unset !important',
    },
  },
  paperWidthSm: {
    width: theme.spacing(62.5),
  },
  paperWidthMd: {
    width: theme.spacing(69.25),
  },
  paperWidthLg: {
    width: theme.spacing(100),
  },
  paperFullScreen: {
    padding: 0,
    borderRadius: 0,
    '& .MuiDialogTitle-root': {
      padding: theme.spacing(0),
    },
    '& .MuiDialogContent-root': {
      padding: theme.spacing(0),
    },
  },
});

export default styles;
