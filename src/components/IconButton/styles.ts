const styles = (theme: Record<string, any>) => ({
  root: {
    padding: theme.spacing(0.75), // medium
    backgroundColor: 'transparent',
    '& .MuiSvgIcon-root,span': {
      fontSize: theme.fontSizeIcon.medium,
      color: theme.newColors.gray[800],
    },
    '&:hover': {
      backgroundColor: theme.newColors.gray[200],
    },
    '&:active': {
      backgroundColor: theme.newColors.gray[300],
    },
  },
  sizeLarge: {
    padding: theme.spacing(1),
  },
  sizeSmall: {
    padding: theme.spacing(0.25),
    '& .MuiSvgIcon-root, span': {
      fontSize: theme.fontSizeIcon.normal,
    },
  },
  colorPrimary: {
    '& .MuiSvgIcon-root, span': {
      color: theme.newColors.primary[500],
    },
    '&:hover': {
      backgroundColor: theme.newColors.primary[50],
      '& .MuiSvgIcon-root, span': {
        color: theme.newColors.primary[800],
      },
    },
    '&:active': {
      backgroundColor: theme.newColors.primary[50],
      '& .MuiSvgIcon-root, span': {
        color: theme.newColors.primary[900],
      },
    },
  },
  disabled: {
    backgroundColor: 'white',
    '& .MuiSvgIcon-root, span': {
      color: theme.newColors.gray[400],
    },
  },
});

export default styles;
