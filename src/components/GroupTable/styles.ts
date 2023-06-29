import Box from '@components/Box';
import MenuItem from '@components/Menu/MenuItem';
import Typography from '@components/Typography';

import { themes } from '@styles/Themes';
import styled from 'styled-components';

import { renderBackground, renderColor } from './helpers';
import { CellProps, ColumnProps, headerProps } from './props';

const Container = styled.div`
  overflow: auto;
`;

const Table = styled.table`
  width: max-content;
  border-collapse: separate;
  border-spacing: 0px;

  td,
  th {
    border: 1px solid ${themes.newColors.gray[100]};
    border-top-color: transparent;
  }

  thead > tr:first-child > th:nth-child(1) {
    border: none;
  }

  thead > tr:nth-child(2) > th:nth-child(1),
  thead > tr:nth-child(2) > th:nth-child(2) {
    border-top-color: ${themes.newColors.gray[100]};
  }

  th {
    position: relative;
  }

  thead > tr:first-of-type > th {
    border-top-color: ${themes.newColors.gray[100]};
  }

  thead > tr:first-child > th:first-child,
  thead > tr:nth-child(2) > th:nth-child(1),
  thead > tr:nth-child(2) > th:nth-child(2),
  tbody > tr > td:nth-child(1),
  tbody > tr > td:nth-child(2),
  tbody > tr > td:nth-child(3) {
    position: sticky;
    z-index: 2;
  }

  thead > tr:first-child > th:first-child,
  thead > tr:nth-child(2) > th:nth-child(1),
  tbody > tr > td:nth-child(1) {
    left: 0;
  }

  thead > tr:nth-child(2) > th:nth-child(2),
  tbody > tr > td:nth-child(2) {
    left: 200px;
  }

  tbody > tr > td:nth-child(3) {
    left: 280px;
  }

  .resizer:hover,
  .resizing {
    border-right: 1px solid blue;
  }
  .resizer {
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    user-select: none;
    cursor: col-resize;
  }
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Row = styled.tr`
  :hover {
    td,
    th {
      cursor: default;
    }
    td,
    td > div > input {
      background: ${themes.newColors.primary[50]};
    }
  }
`;

const Cell = styled.td<CellProps>(({ width, status, disabled }) => ({
  maxWidth: width || 120,
  width: width || 120,
  padding: '2px 6px',
  backgroundColor: renderBackground({ status, disabled }),
  color: renderColor({ status, disabled }),
  '.endAdornment': {
    visibility: 'hidden',
  },
  ':hover': {
    '.endAdornment': {
      visibility: 'visible',
    },
  },
  ':focus': {
    border: `1px solid ${themes.newColors.primary[500]}`,
  },
  ':focus-within': {
    border: `1px solid ${themes.newColors.primary[500]}`,
  },
  ':focus-visible': {
    outline: `0px solid ${themes.newColors.primary[500]}`,
  },
}));

const Header = styled.th<ColumnProps & headerProps & { rowIndex: number }>(
  ({
    alignHeader,
    maxWidth,
    isHidden,
    borderRadiusTop,
    groupHeader,
    disabled,
    stickyLeft,
    rowIndex,
    isBlankSpace,
    backgroundColor,
    blankSpaceColor,
  }) => ({
    height: 43,
    textAlign: alignHeader || 'left',
    padding: '4px 8px',
    maxWidth: maxWidth || 'unset',
    visibility: isHidden ? 'hidden' : 'visible',
    borderRadius: borderRadiusTop ? '8px 8px 0px 0px' : 'unset',
    backgroundColor: groupHeader
      ? disabled
        ? themes.newColors.gray[200]
        : themes.newColors.gray[800]
      : backgroundColor || themes.newColors.gray[50],
    ...(isBlankSpace && blankSpaceColor ? { backgroundColor: blankSpaceColor } : {}),
    color: groupHeader ? (disabled ? themes.newColors.gray[600] : '#FFF') : themes.newColors.gray[800],
    // position: stickyLeft !== undefined ? 'sticky' : 'initial',
    // top: stickyLeft !== undefined ? `${rowIndex * 43}px` : 'unset',
    // left: stickyLeft !== undefined ? `${stickyLeft}px` : 'unset',
  })
);

const THead = styled.thead``;
const TBody = styled.tbody``;

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoxAdornment = styled(Box)`
  .MuiIconButton-root {
    padding: 0px;
    :hover {
      background-color: unset;
    }
  }
  .MuiSvgIcon-root {
    width: 18px;
  }
`;

const Input = styled.input<CellProps>(({ status, alignData, disabled, disabledEdit }) => ({
  ...themes.typography.bodyMedium,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
  border: 'none',
  height: 30,
  textAlign: alignData || 'left',
  backgroundColor: renderBackground({ status }),
  ':focus': {
    '::placeholder ': {
      color: 'transparent',
    },
  },
  '::placeholder': {
    color: renderColor({ status }),
  },
  ':focus-visible': {
    outline: 'none',
  },
  ':disabled': {
    backgroundColor: renderBackground({ disabled, disabledEdit }),
    color: themes.newColors.gray[800],
  },
  '::-webkit-outer-spin-button': {
    margin: 0,
    '-webkit-appearance': 'none',
  },
  '::-webkit-inner-spin-button': {
    margin: 0,
    '-webkit-appearance': 'none',
  },
}));

const Option = styled(MenuItem)<{ status?: number }>(({ status }) => ({
  // backgroundColor: renderBackground({ status }),
  // color: renderColor({ status }),
  justifyContent: 'space-between',
}));

const HotKey = styled(Typography)(() => ({
  marginLeft: 16,
  marginRight: 4,
  color: themes.newColors.gray[400],
}));

const EmptyPage = styled(Box)(() => ({
  width: '100%',
  height: 350,
  borderRadius: 8,
  border: `1px solid ${themes.newColors.gray[100]}`,
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'stretch',

  '.MuiCircularProgress-root': {
    color: themes.newColors.gray[400],
  },
}));

export { BoxAdornment, Cell, Container, FlexBox, Header, Row, TBody, THead, Table, Input, Option, EmptyPage, HotKey };
