export type Aligns = 'center' | 'inherit' | 'justify' | 'left' | 'right';

type GenericObject = Record<string, any>;

type HeadOptions = {
  colSpan?: number;
  rowSpan?: number;
};

type Header = {
  key: string;
  header?: string;
  disableFilter?: boolean;
  width?: number | string;
  alignData?: Aligns;
  alignHeader?: Aligns;
  renderHeader?: () => React.ReactNode;
  renderCell?: (cell: string | number | boolean | Date | GenericObject, row: GenericObject) => React.ReactNode;
};

type Column = Header & {
  subHeaders?: Header[];
  options?: HeadOptions;
};

export type TableProps = {
  isLoading?: boolean;
  disablePagination?: boolean;
  editable?: boolean;
  emptyData?: React.ReactNode;
  emptyHeight?: number;
  maxHeight?: number;
  columns: Column[];
  rows: GenericObject[];
  className?: string;
};
