const styles: any = (theme: Record<string, any>) => ({
  root: {
    '& .MuiRadio-root': {
      padding: theme.spacing(0.25),
      marginLeft: theme.spacing(1),
      background: 'transparent',
      '&:hover': {
        background: theme.newColors.primary[50],
      },
    },
    '& .MuiSvgIcon-root': {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
    '& .MuiFormLabel-root': {
      color: theme.newColors.gray[600],
      fontWeight: theme.fontWeight.semi,
      lineHeight: theme.spacing(2.5),
      '.Mui-disabled': {
        color: theme.newColors.gray[600],
      },
    },
    '& .MuiFormControlLabel-label': {
      ...theme.typography.bodyLarge,
      marginLeft: theme.spacing(1),
    },
    '& .MuiFormGroup-root': {
      padding: theme.spacing(1, 0),
    },
    '& .MuiFormGroup-root:not(.MuiFormGroup-row) label[class*="MuiFormControlLabel-root"]:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
});

export default styles;
