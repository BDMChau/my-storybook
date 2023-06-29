import { styled } from '@mui/material/styles';

import Box from '@components/Box';
import IconButton from '@components/IconButton';
import Typography from '@components/Typography';

import { themes } from '@styles/Themes';
import Styled from 'styled-components';

import { Status } from './constants';

const renderColor = (status: keyof typeof Status) => {
  switch (status) {
    case 'pressing':
      return {
        color: themes.newColors.yellow[600],
        background: themes.newColors.yellow[50],
      };
    case 'extra':
      return {
        color: themes.newColors.primary[500],
        background: themes.newColors.primary[50],
      };
    default:
      return {
        color: themes.newColors.red[600],
        background: themes.newColors.red[50],
      };
  }
};

const checkIconColor = (() => themes.newColors.green[500])();

const Container = styled(Box)<{ maxHeight?: number | string }>(({ theme, maxHeight }: Record<string, any>) => ({
  maxHeight: maxHeight || window.innerHeight - 150,
  paddingRight: theme.spacing(1),
  overflowX: 'hidden',
  overflowY: 'auto',
  '::-webkit-scrollbar': {
    width: 5,
  },
  '::-webkit-scrollbar-thumb': {
    borderRadius: theme.borderRadius.default,
    backgroundColor: theme.newColors.gray[300],
  },
}));

const CardInfo = styled(Box)(({ theme }: Record<string, any>) => ({
  backgroundColor: 'white',
  borderStyle: 'solid',
  cursor: 'pointer',
  borderColor: theme.newColors.gray[200],
  borderRadius: theme.spacing(1),
  borderWidth: theme.spacing(0.125),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(0, 1.75),

  '.last-item': {
    marginLeft: 'auto',
  },
}));

const FlexBox = styled(Box)<{ disabled?: boolean }>(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const TextEndBox = styled(Box)(() => ({
  textAlign: 'end',
}));

const EmptyPage = styled(Box)(({ theme }: Record<string, any>) => ({
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',

  '.emptyTitle': {
    color: theme.newColors.gray[600],
  },

  '.emptySubTitle': {
    color: theme.newColors.gray[400],
  },

  'div:first-of-type': {
    paddingBottom: theme.spacing(0.5),
  },
}));

const Icon = styled(FlexBox)(({ theme }: Record<string, any>) => ({
  backgroundColor: theme.newColors.gray[50],
  borderColor: theme.newColors.gray[100],
  borderWidth: theme.spacing(0.125),
  borderStyle: 'solid',
  padding: theme.spacing(1.625),
  borderRadius: theme.spacing(4),
}));

const ContentTop = styled(FlexBox)(({ theme }: Record<string, any>) => ({
  margin: theme.spacing(1.5, 0),
  hr: {
    borderColor: theme.newColors.gray[200],
  },
}));

const ContentBottom = styled(FlexBox)(({ theme }: Record<string, any>) => ({
  margin: theme.spacing(1.5, 0),
}));

const HeaderCollapse = styled(FlexBox)(({ theme }: Record<string, any>) => ({
  margin: theme.spacing(1, 0),
  justifyContent: 'space-between',
}));

const GroupCalendar = styled(FlexBox)(({ theme, disabled }: Record<string, any>) => ({
  padding: theme.spacing(0.75, 1.5),
  borderRadius: theme.spacing(3),
  marginRight: theme.spacing(1),
  backgroundColor: theme.newColors.gray[disabled ? 50 : 100],
  '.MuiTypography-root': {
    marginLeft: theme.spacing(1),
    color: disabled ? theme.newColors.gray[400] : 'currentColor',
  },
  svg: {
    path: {
      fill: disabled ? theme.newColors.gray[400] : 'currentColor',
    },
  },
}));

const DropdownButton = styled(IconButton)(({ theme }: Record<string, any>) => ({
  marginLeft: theme.spacing(1),
  ':hover': {
    backgroundColor: 'unset',
  },
}));

const StatusTag = Styled.div<{ status: keyof typeof Status }>(({ status }) => ({
  padding: '6px 11px',
  marginLeft: 12,
  borderRadius: 16,
  alignSelf: 'flex-start',
  ...renderColor(status),
  ...themes.typography.labelLarge,
}));

const TitleSmall = Styled(Typography).attrs({ variant: 'titleSmall', component: 'div', noWrap: true })<{
  alert?: number;
  disabled?: boolean;
}>(({ alert, disabled }: Record<string, any>) => ({
  color: alert ? themes.newColors.red[600] : disabled ? themes.newColors.gray[400] : themes.newColors.gray[800],
  height: 24,
}));

// use span if you want to truncate the text with TooltipDynamic (div is block, span is inline)
const TitleSmallTruncate = Styled(Typography).attrs({ variant: 'titleSmall', component: 'span', noWrap: true })<{
  alert?: number;
  disabled?: boolean;
}>(({ alert, disabled }: Record<string, any>) => ({
  color: alert ? themes.newColors.red[600] : disabled ? themes.newColors.gray[400] : themes.newColors.gray[800],
  height: 24,
}));

const BodyMedium = Styled(Typography).attrs({ variant: 'bodyMedium', component: 'div', noWrap: true })<{
  disabled?: boolean;
}>(({ disabled }: Record<string, any>) => ({
  color: themes.newColors.gray[disabled ? 400 : 600],
  height: 20,
}));

const OverallTotal = Styled(Typography).attrs({ variant: 'titleSmall', component: 'span' })(() => ({
  color: themes.newColors.gray[400],
}));

const CollapseSubHeader = Styled(Typography).attrs({ variant: 'bodyMedium', component: 'div' })(() => ({
  color: themes.newColors.gray[600],
  marginBottom: 8,
  marginTop: 8,
}));

const CollapseTotalScore = Styled(Typography).attrs({ variant: 'bodyMedium', component: 'div' })(() => ({
  color: themes.newColors.gray[400],
}));

export {
  CardInfo,
  Container,
  ContentTop,
  ContentBottom,
  GroupCalendar,
  Icon,
  TitleSmall,
  BodyMedium,
  FlexBox,
  OverallTotal,
  HeaderCollapse,
  DropdownButton,
  CollapseSubHeader,
  CollapseTotalScore,
  EmptyPage,
  StatusTag,
  TextEndBox,
  checkIconColor,
  TitleSmallTruncate,
};
