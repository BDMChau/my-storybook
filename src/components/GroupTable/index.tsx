import React, { useEffect, useMemo } from 'react';

import get from 'lodash/get';
import size from 'lodash/size';

import { deepCompareObject } from 'src/utils';

import Cell from './components/Cell';
import EmptyPage from './components/EmptyPage';
import Header from './components/Header';
import { CreateResizableColumn, focusElementById, getTableConfigs, isValidNumber } from './helpers';
import { GroupTableProps, _CellProps } from './props';
import { Container, Row, TBody, THead, Table } from './styles';

const GroupTable = ({
  columns,
  rows,
  emptyContent,
  loading,
  blankSpaceColor,
  backgroundColor,
  handleBlurCell,
  handleChangeCell,
  handleFocusCell,
}: GroupTableProps) => {
  let tabIndex = 0;

  const { accessors, groupHeaders } = useMemo(() => getTableConfigs(columns), [columns, rows]);

  useEffect(() => {
    const table = document.getElementById('table-resize');
    const cols = table?.querySelectorAll('th');

    cols?.forEach((col) => {
      const resizer = document.createElement('div');

      resizer.classList.add('resizer');
      resizer.style.height = `${table?.offsetHeight}px`;

      col?.appendChild(resizer);
      CreateResizableColumn(col, resizer);
    });
  }, []);

  if (!size(rows) || loading) return <EmptyPage emptyContent={emptyContent} loading={loading} />;

  return (
    <Container>
      <Table id='table-resize' className='table'>
        <THead>
          {groupHeaders.map((row, idx) => (
            <Row key={`row-${idx}`}>
              {row.map((header, index) => (
                <Header
                  key={`header-${index}`}
                  rowIndex={idx}
                  {...header}
                  blankSpaceColor={blankSpaceColor}
                  backgroundColor={backgroundColor}
                />
              ))}
            </Row>
          ))}
        </THead>
        <TBody>
          {rows.map((row: Record<string, any>, idx) => (
            <Row key={`row-${idx}`}>
              {accessors.map(({ accessor, renderCell, ...rest }: _CellProps) => {
                const value = get(row, accessor || '');
                const cell = { id: row?.id, value: isValidNumber(value) ? Number(value) : value, row };

                tabIndex++;

                return (
                  <Cell
                    key={`cell-${tabIndex}`}
                    tabIndex={tabIndex}
                    accessor={accessor}
                    cellInOtherRow={accessors.length}
                    handleBlurCell={handleBlurCell}
                    handleChangeCell={handleChangeCell}
                    handleFocusCell={handleFocusCell}
                    cell={cell}
                    {...rest}
                  >
                    {renderCell ? renderCell(cell) : value}
                  </Cell>
                );
              })}
            </Row>
          ))}
        </TBody>
      </Table>
      <div id={`cell-${tabIndex + 1}`} tabIndex={tabIndex + 1} onFocus={() => focusElementById('cell-1')} />
    </Container>
  );
};

export default React.memo(GroupTable, deepCompareObject(['handleBlurCell', 'handleChangeCell', 'handleFocusCell']));
