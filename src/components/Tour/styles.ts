import Tour from 'reactour';

import size from 'lodash/size';

import { styled } from '@mui/material/styles';

const StyledTour = styled(Tour)(({ theme, steps, goToStep }: Record<string, any>) => ({
  padding: `${theme.spacing(2)} !important`,
  maxWidth: `${theme.spacing(50)} !important`,
  ...theme.typography.bodyLarge,

  '&:focus-visible': {
    outline: 'none',
  },

  '& button[data-tour-elem="dot"]:not(.reactour__dot--is-active)': {
    border: 0,
    width: 10,
    height: 10,
    background: theme.newColors.primary[50],
    color: theme.newColors.primary[50],
  },

  '& [data-tour-elem="controls"]': {
    marginTop: theme.spacing(2),
    justifyContent: size(steps) > 1 ? 'space-between' : 'flex-end',

    '& button[data-tour-elem*="left"]': {
      ...(size(steps) === 1 || !goToStep ? { visibility: 'hidden' } : undefined),
      borderColor: `${theme.newColors.gray[200]} !important`,
      background: 'white',
      '& span': {
        color: theme.newColors.gray[800],
      },
      '&:disabled': {
        '& span': {
          color: theme.newColors.gray[200],
        },
      },
    },

    '& button[data-tour-elem*="right"]': {
      borderColor: `${theme.newColors.primary[500]} !important`,
      background: theme.newColors.primary[500],
      '& span': {
        color: 'white',
      },
      '&:disabled': {
        borderColor: `${theme.newColors.gray[200]} !important`,
        background: theme.newColors.gray[200],
      },
    },

    '& button[data-tour-elem*="arrow"]': {
      border: '1.5px solid',
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      borderRadius: theme.spacing(1),
      height: theme.spacing(5),
      '& span': {
        fontStyle: 'normal',
        fontSize: theme.fontSize.button,
        fontWeight: theme.fontWeight.medium,
        letterSpacing: '0.15px',
        lineHeight: theme.spacing(3),
      },
      '&:focus-visible': {
        outline: 'none',
      },
    },
  },
}));

export default StyledTour;
