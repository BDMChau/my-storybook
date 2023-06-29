import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import Box from '@components/Box';
type forwardProps = {
  oval?: boolean;
};
const shouldForwardProp = <T extends Record<string, unknown>>(props: Array<keyof T>, prop: PropertyKey): boolean =>
  !props.includes(prop as string);
const StyledTab = styled(Tab)(({ theme }: Record<string, any>) => ({
  ...theme.typography.titleSmall,
  minWidth: 'unset',
  minHeight: 'unset',
  textTransform: 'none',
  height: theme.spacing(4.5),
  color: theme.newColors.gray[400],
  padding: `${theme.spacing(0, 1)} !important`,
  '&.Mui-selected': {
    color: theme.newColors.primary[500],
  },
  ':first-of-type': {
    paddingLeft: `${theme.spacing(0)} !important`,
  },
}));

const StyledTabs = styled(Tabs, {
  shouldForwardProp: (prop) => shouldForwardProp<forwardProps>(['oval'], prop),
})<forwardProps>(({ theme, value, oval }: Record<string, any>) => {
  let justifyContent = 'center';

  if (!value) {
    justifyContent = 'start';
  }

  let indicatorStyle: object = {
    backgroundColor: theme.newColors.primary[500],
    height: theme.spacing(0.25),
    borderRadius: theme.spacing(0.25),
    width: `calc(100% - ${theme.spacing(!value ? 1 : 2)})`,
  };
  const ovalStyle = {};

  if (oval) {
    indicatorStyle = {};
    ovalStyle;
  }

  return {
    minHeight: theme.spacing(4),
    '& .MuiTabScrollButton-root': {
      width: 'unset',
      ':first-of-type': {
        padding: theme.spacing(0, 0.5),
      },
      ':last-of-type': {
        padding: theme.spacing(0, 0.5),
      },
    },
    '& .MuiTabs-scrollButtons.Mui-disabled': {
      opacity: 0.3,
    },
    '& .MuiTabs-indicator': {
      justifyContent,
      display: 'flex',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      ...indicatorStyle,
    },
    ...(oval && {
      '& .MuiTab-root': {
        ...theme.typography.labelMedium,
        color: theme.newColors.gray[600],
        padding: `${theme.spacing(1, 2)} !important`,
        '&.Mui-selected': {
          backgroundColor: theme.newColors.primary[500],
          borderRadius: theme.spacing(3),
          color: 'white',
        },
        ':first-of-type': {
          paddingLeft: `${theme.spacing(2)} !important`,
        },
      },
    }),
  };
});

const TabsGroup = styled(Box)(({ theme }: Record<string, any>) => ({
  position: 'relative',
  '& .Divider': {
    position: 'absolute',
    width: '100%',
    minHeight: theme.spacing(4.5),
    borderBottom: `solid 2px ${theme.newColors.gray[200]} `,
  },
}));

export { StyledTabs, StyledTab, TabsGroup };
