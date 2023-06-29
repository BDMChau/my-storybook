import { styled } from '@mui/material/styles';

import Box from '@components/Box';
import Paper from '@components/Paper';

import { LinearProgress } from '@mui/material';

type customProps = {
  uploading?: boolean;
  error?: boolean;
};

const shouldForwardProp = <T extends Record<string, unknown>>(props: Array<keyof T>, prop: PropertyKey): boolean =>
  !props.includes(prop as string);

const FlexBox = {
  display: 'flex',
  alignItems: 'center',
};

const CardAttachment = styled(Paper)(({ theme }: Record<string, any>) => ({
  ...FlexBox,
  position: 'relative',
  overflow: 'hidden',
  borderStyle: 'solid',
  padding: theme.spacing(0, 2, 0, 3),
  height: theme.spacing(7.5),
  borderRadius: theme.spacing(1),
  borderWidth: theme.spacing(0.125),
  borderColor: theme.newColors.gray[200],
  cursor: 'pointer',
}));

const EllipsisBox = styled(Box)(() => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

const GroupTitle = styled(EllipsisBox)(({ theme }: Record<string, any>) => ({
  margin: theme.spacing(1.5, 0),
  '.title > *': {
    color: theme.newColors.gray[800],
  },
}));

const LeftBox = styled(EllipsisBox, {
  shouldForwardProp: (prop) => shouldForwardProp<customProps>(['uploading', 'error'], prop),
})<customProps>(({ theme, uploading, error }: Record<string, any>) => ({
  ...FlexBox,
  marginRight: 16,
  ...((uploading || error) && {
    cursor: 'default',
    ...(error && {
      '.subTitle > *': {
        fill: 'solid',
        color: `${theme.newColors.red[600]} !important`,
        ':last-child': {
          textDecoration: 'underline',
          cursor: 'pointer',
        },
      },
    }),
    '*': {
      color: `${theme.newColors.gray[400]} !important`,
      fill: `${theme.newColors.gray[400]} !important`,
    },
  }),
  '.MuiDivider-root': {
    borderColor: theme.newColors.gray[200],
  },
  ' svg.MuiSvgIcon-root': {
    fontSize: theme.fontSizeIcon.normal,
    path: {
      fill: theme.newColors.gray[800],
    },
  },
  ' svg[id*="icn"]': {
    width: theme.spacing(4.25),
    path: {
      fill: theme.newColors.gray[800],
    },
  },
  ' .google-icon': {
    margin: theme.spacing(0, 0.25),
  },
}));

const RightBox = styled(Box)(({ theme }: Record<string, any>) => ({
  ...FlexBox,
  marginLeft: 16,
  justifyContent: 'flex-end',
}));

const SubTitleBox = styled(Box)(({ theme }: Record<string, any>) => ({
  ...FlexBox,
  flexWrap: 'wrap',
  '> *': {
    maxWidth: theme.spacing(25),
    color: theme.newColors.gray[400],
  },
}));

const ProgressBar = styled(LinearProgress)(({ theme }: Record<string, any>) => ({
  width: '100%',
  height: 3,
  position: 'absolute',
  left: 0,
  bottom: 0,
  '.MuiLinearProgress-barColorPrimary': {
    backgroundColor: theme.newColors.primary[500],
  },
}));

export { CardAttachment, GroupTitle, LeftBox, RightBox, SubTitleBox, ProgressBar };
