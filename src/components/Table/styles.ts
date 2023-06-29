import set from 'lodash/set';

import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

type StyledTableBodyProps = {
  pagination?: number;
  loading?: number;
};

const StyledTableHead = styled(TableHead)(({ theme }: Record<string, any>) => ({
  boxShadow: theme.elevations.depth01,
  cursor: 'pointer',
  '& tr th': {
    color: theme.newColors.gray[800],
    fontWeight: theme.fontWeight.semi,
    fontSize: theme.fontSize.xMedium,
    lineHeight: theme.spacing(3),
    borderBottom: `solid 1px ${theme.newColors.gray[100]}`,
    padding: theme.spacing(1.4375, 2),
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }: Record<string, any>) => ({
  cursor: 'pointer',
  '& td': {
    borderBottom: `solid 1px ${theme.newColors.gray[100]}`,
    fontSize: theme.fontSize.xMedium,
    height: theme.spacing(8.125),
  },
}));

const StyledTableBody = styled(TableBody)<StyledTableBodyProps>(
  ({ theme, pagination, loading }: Record<string, any>) => {
    const defaultStyles = {
      '& tr:hover': {
        backgroundColor: !loading ? theme.newColors.gray[100] : 'unset',
      },
    };

    if (pagination) set(defaultStyles, '& tr:last-child td', { borderBottom: 'unset' });

    return defaultStyles;
  }
);

const StyledTablePagination = styled(TablePagination)<{ component?: React.ElementType }>(
  ({ theme }: Record<string, any>) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& .MuiTablePagination-select': {
      backgroundColor: 'white',
      border: `solid 2px ${theme.newColors.gray[100]}`,
      borderRadius: theme.borderRadius.default,
      width: theme.spacing(6.25),
      textAlignLast: 'left !important',
      paddingLeft: theme.spacing(1.25),
      paddingTop: theme.spacing(1.125),
      paddingBottom: theme.spacing(1.125),
      ':focus': {
        borderRadius: theme.borderRadius.default,
        backgroundColor: 'unset',
      },
    },
    '& .MuiTablePagination-actions': {
      marginRight: theme.spacing(1),
    },
    '& .MuiInputBase-root': {
      marginRight: theme.spacing(3),
      marginLeft: theme.spacing(2.5),
    },
  })
);

export { StyledTableBody, StyledTableRow, StyledTableHead, StyledTablePagination };
