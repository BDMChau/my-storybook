import { TypographyProps } from '@components/Typography/props';

type Aligns = 'center' | 'inherit' | 'justify' | 'left' | 'right';

export type RenderCellProps = {
  id: string | number;
  value?: unknown;
  row: Record<string, any>;
};

export type MappingOptionProps = {
  label?: string;
  disabledMessage?: string;
  isDisabledOption?: (values: RenderCellProps) => boolean;
};

export type _CellProps = {
  inputType?: 'text' | 'number';
  accessor?: string;
  disabled?: boolean;
  isHoverShowAdornment?: boolean;
  disabledEdit?: boolean;
  alignData?: Aligns;
  width?: number;
  status?: number | string;
  hiddenSelectStatus?: boolean;
  stickyLeft?: number;
  maxLength?: number;
  mappingOption?: Record<number, MappingOptionProps>;
  numberProps?: {
    min?: number;
    max?: number;
    decimalScale?: number;
    thousandSeparator?: boolean;
    allowNegative?: boolean;
  };
  validStatusOption?: number[];
  renderCell?: (values: RenderCellProps) => string;
  endAdornment?: (values: RenderCellProps) => React.ReactNode;
};

export type headerProps = {
  blankSpaceColor?: string;
  backgroundColor?: string;
};

export type ColumnProps = _CellProps &
  headerProps & {
    isBlankSpace?: boolean;
    isHidden?: boolean;
    borderRadiusTop?: boolean;
    groupHeader?: boolean;
    header?: string;
    colSpan?: number;
    rowSpan?: number;
    variant?: TypographyProps['variant'];
    description?: string;
    enableSort?: string[];
    alignHeader?: Aligns;
    maxWidth?: number;
    isShowTooltip?: boolean;
    columns?: ColumnProps[];
    headerWeight?: string;
    deltaWidth?: number;
  };

export type CellProps = _CellProps & {
  children?: React.ReactNode;
  tabIndex?: number;
  cellInOtherRow?: number;
  handleBlurCell?: (values: unknown) => void;
  handleChangeCell?: (values: unknown) => void;
  handleFocusCell?: (values: unknown) => void;
};

export type EmptyPageProps = {
  emptyContent?: string;
  loading?: boolean;
};

export type GroupTableProps = EmptyPageProps &
  headerProps & {
    columns: ColumnProps[];
    rows: Record<string, any>[];
    handleBlurCell?: (values: unknown) => void;
    handleChangeCell?: (values: unknown) => void;
    handleFocusCell?: (values: unknown) => void;
  };
