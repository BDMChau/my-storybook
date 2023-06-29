import { ReactNode, useCallback, useMemo, useState } from 'react';

import chunk from 'lodash/chunk';
import size from 'lodash/size';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import Loading from '@components/Loading';
import Paper from '@components/Paper';

import { TableProps } from './props';
import { StyledTableBody, StyledTableHead, StyledTablePagination, StyledTableRow } from './styles';

export default ({
  columns,
  rows,
  maxHeight,
  disablePagination,
  isLoading,
  emptyData,
  emptyHeight = 200,
  className,
}: TableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const _data = useMemo(() => chunk(rows, rowsPerPage), [rows, rowsPerPage]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderChildren = useCallback(
    (children: ReactNode) => (
      <TableRow sx={{ height: emptyHeight }}>
        <TableCell colSpan={size(columns)}>{children}</TableCell>
      </TableRow>
    ),
    [columns, emptyHeight]
  );

  const renderBody = useMemo(() => {
    if (!size(rows)) return renderChildren(emptyData);

    return _data[page].map((row, idx) => (
      <StyledTableRow hover key={`row_${idx}`}>
        {columns.map(({ key, alignData, renderCell }) => {
          const value = row?.[key] ?? '';

          return (
            <TableCell align={alignData} key={`row_${key}_${idx}`}>
              {renderCell ? renderCell(value, row) : value}
            </TableCell>
          );
        })}
      </StyledTableRow>
    ));
  }, [columns, emptyData, page, _data]);

  return (
    <Paper className={className} elevation={0} sx={{ borderRadius: 4, overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight }}>
        <Table stickyHeader aria-label='sticky table'>
          <StyledTableHead>
            <TableRow hover>
              {columns.map(({ header, key, alignHeader, width, renderHeader }) => (
                <TableCell key={key} align={alignHeader} width={width}>
                  {renderHeader ? renderHeader() : header}
                </TableCell>
              ))}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody pagination={disablePagination ? 1 : 0} loading={isLoading ? 1 : 0}>
            {isLoading ? renderChildren(<Loading />) : renderBody}
          </StyledTableBody>
        </Table>
      </TableContainer>
      {!disablePagination && (
        <StyledTablePagination
          component='div'
          rowsPerPageOptions={[5, 10, 25, 50]}
          count={size(rows)}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage='Rows per page'
          SelectProps={{
            IconComponent: (props) => <ExpandMoreRoundedIcon {...props} fontSize='small' />,
          }}
        />
      )}
    </Paper>
  );
};
