import { useEffect, useMemo, useRef, useState } from 'react';

import get from 'lodash/get';
import set from 'lodash/set';

import ArrowDown from '@mui/icons-material/KeyboardArrowDownRounded';
import ArrowUp from '@mui/icons-material/KeyboardArrowUpRounded';
import WarningIcon from '@mui/icons-material/Warning';

import IconButton from '@components/IconButton';
import MenuList from '@components/Menu/MenuList';
import Popover from '@components/Popover';
import Tooltip from '@components/Tooltip';
import Typography from '@components/Typography';

import { EventKeysCell, MappingHotKeys, OPTIONS_STATUS, warningText } from '../constants';
import {
  focusElementById,
  getLabelOption,
  isValidNumber,
  optionStatus,
  formatNumberToString,
  blurElementById,
} from '../helpers';
import { CellProps, RenderCellProps } from '../props';
import { BoxAdornment, Cell, FlexBox, HotKey, Input, Option } from '../styles';

export default ({
  children,
  width,
  status,
  isHoverShowAdornment,
  disabled,
  tabIndex = 0,
  cellInOtherRow = 0,
  cell,
  alignData,
  disabledEdit,
  accessor,
  inputType,
  maxLength,
  numberProps, // To Do: event for number cell
  mappingOption,
  validStatusOption,
  endAdornment,
  hiddenSelectStatus = false,
  handleBlurCell = () => {},
  handleChangeCell = () => {},
  handleFocusCell = () => {},
}: CellProps & { cell: RenderCellProps }) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const [editCell, setEditCell] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [statusSelectedIndex, setStatusSelectedIndex] = useState<number | null>(null);

  const activityKey = (accessor || '').split('.')[0] || '';

  const _value = typeof accessor === 'string' ? get(cell, `row.${accessor}`) : get(cell, 'value');
  const _status = typeof status === 'string' ? get(cell, `row.${status}`) : status;
  const isOptions = !isValidNumber(_value) && _status !== 0 && isValidNumber(_status);
  const _children = isOptions ? getLabelOption(OPTIONS_STATUS?.[_status]?.label, mappingOption?.[_status]) : children;
  const useStatus = !(disabled || disabledEdit) && !hiddenSelectStatus && !isValidNumber(_value);
  const isWarning = !Object.keys(cell.row || {}).includes(activityKey);

  let _optionStatus = [...optionStatus];
  let _MappingHotKeys: { [k: string]: number } = { ...MappingHotKeys };

  if (validStatusOption?.length) {
    _optionStatus = _optionStatus.filter((status) => validStatusOption.includes(status.value));
    _MappingHotKeys = Object.fromEntries(
      Object.entries(_MappingHotKeys).filter(([_, value]) => (validStatusOption || []).includes(value))
    );
  }

  const handleBlur = () => {
    const currentValue = inputEl?.current?.value || '';

    const objActivity = get(cell, `row.${activityKey}`) || {};
    const { originalGrade, overallGrade } = objActivity;

    if (
      currentValue === '' ||
      (isValidNumber(Number(originalGrade) + Number(overallGrade)) &&
        Number(originalGrade) !== Number(overallGrade) &&
        Number(currentValue) === Number(originalGrade))
    ) {
      let result = overallGrade;

      if (currentValue === '') result = _value;

      handleChange(result);
    } else {
      handleBlurCell({
        accessor,
        rowInfo: cell,
        value: inputType === 'number' && isValidNumber(currentValue) ? parseFloat(currentValue) : currentValue,
      });
    }
    if (editCell) setEditCell(false);
  };

  const handleFocus = () => {
    const currentValue = inputEl?.current?.value || '';

    const objActivity = get(cell, `row.${activityKey}`) || {};
    const { originalGrade, overallGrade } = objActivity;

    if (isValidNumber(Number(originalGrade) + Number(overallGrade)) && originalGrade !== overallGrade) {
      handleChange(originalGrade);
    } else
      handleFocusCell({
        accessor,
        rowInfo: cell,
        value: inputType === 'number' && isValidNumber(currentValue) ? parseFloat(currentValue) : currentValue,
      });
  };

  const handleChange = (value: any, path?: string) => {
    handleChangeCell({
      accessor,
      rowInfo: cell,
      value: inputType === 'number' && value ? parseFloat(value) : value,
    });

    const placeHolderPath = ['name', 'overall', 'overallLetter'].includes(`${accessor}`) && 'current.placeholder';

    const _value = inputType === 'number' && !isNaN(value) ? formatNumberToString(`${value}`, numberProps) : value;

    set(inputEl, path || placeHolderPath || 'current.value', _value);

    placeHolderPath && set(inputEl, 'current.disabled', true);
  };

  const handleStatusChange = (selected: number) => handleBlurCell({ value: selected, accessor: status, rowInfo: cell });

  useEffect(() => {
    const isEmpty = !isValidNumber(_value);

    handleChange(
      isOptions || isValidNumber(_children) || _children ? _children : '--',
      isEmpty ? 'current.placeholder' : undefined
    );
  }, [_children, _value, isOptions]);

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (inputType === 'number') {
      switch (e.key) {
        case 'e':
        case '+':
        case '-':
          e.preventDefault();

          break;
      }
    }

    if (EventKeysCell.includes(e.code)) {
      e.preventDefault();
    }

    let cellIdx = tabIndex;

    switch (e.code) {
      case 'ArrowUp':
        cellIdx = cellIdx - cellInOtherRow;
        break;
      case 'ArrowDown':
        cellIdx = cellIdx + cellInOtherRow;
        break;
      case 'ArrowLeft':
        cellIdx = cellIdx - 1;
        break;
      case 'Tab':
      case 'ArrowRight':
        cellIdx = cellIdx + 1;
        break;
      case 'Delete':
        handleChange(null);
        focusElementById(`cell-input-${tabIndex}`);
        break;
      case 'Enter':
        blurElementById(`cell-input-${cellIdx}`);
        break;
      default:
        if (useStatus && Object.keys(_MappingHotKeys).includes(e.code)) {
          const statusValue = get(_MappingHotKeys, e.code);

          handleStatusChange(statusValue);
          inputEl.current?.blur();
          setStatusSelectedIndex(null);
        } else if (!editCell && !(disabled || disabledEdit)) {
          focusElementById(`cell-input-${tabIndex}`);
          setEditCell(true);
        }
        break;
    }

    if (cellIdx !== tabIndex) {
      focusElementById(`cell-${cellIdx}`);
      focusElementById(`cell-input-${cellIdx}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableCellElement>) => {
    let cellIdx = tabIndex;

    switch (e.code) {
      case 'ArrowUp':
        cellIdx = cellIdx - cellInOtherRow;
        break;
      case 'ArrowDown':
        cellIdx = cellIdx + cellInOtherRow;
        break;
      case 'ArrowLeft':
        cellIdx = cellIdx - 1;
        break;
      case 'Tab':
      case 'ArrowRight':
        cellIdx = cellIdx + 1;
        break;
      case 'Delete':
        handleChange(null);
        focusElementById(`cell-input-${tabIndex}`);
        break;
      case 'Enter':
        blurElementById(`cell-input-${cellIdx}`);
        break;
      default:
        if (useStatus && Object.keys(_MappingHotKeys).includes(e.code)) {
          const statusValue = get(_MappingHotKeys, e.code);

          handleStatusChange(statusValue);
          inputEl.current?.blur();
          setStatusSelectedIndex(null);
        } else if (!editCell && !(disabled || disabledEdit)) {
          focusElementById(`cell-input-${tabIndex}`);
          setEditCell(true);
        }
        break;
    }

    if (cellIdx !== tabIndex) {
      focusElementById(`cell-${cellIdx}`);
      focusElementById(`cell-input-${cellIdx}`);
    }
  };

  const renderOptions = useMemo(() => {
    if (!anchorEl) return null;

    return (
      <Popover
        open
        keepMounted
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        sx={{ mt: 1 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuList>
          {_optionStatus.map(({ label, hotKey, value: otp }, index) => {
            const { label: mLabel, disabledMessage, isDisabledOption = () => false } = mappingOption?.[otp] ?? {};
            const initSelected = otp === _status;

            // const _disabled: boolean = otp === _status || isDisabledOption(cell);
            const _disabled: boolean = isDisabledOption(cell);

            return (
              <Tooltip title={disabledMessage} disableHoverListener={!_disabled} placement='left' followCursor>
                <Option
                  disableRipple
                  disabled={_disabled}
                  status={otp}
                  style={_disabled ? { pointerEvents: 'inherit', cursor: 'pointer' } : {}}
                  selected={index === statusSelectedIndex || initSelected}
                  onClick={() => {
                    if (!_disabled) {
                      handleStatusChange(otp);
                      setAnchorEl(null);
                      setStatusSelectedIndex(index);
                    }
                  }}
                >
                  <Typography variant='bodyMedium'>{getLabelOption(label, { label: mLabel })}</Typography>
                  <HotKey component='div' variant='bodyMedium'>
                    {hotKey}
                  </HotKey>
                </Option>
              </Tooltip>
            );
          })}
        </MenuList>
      </Popover>
    );
  }, [anchorEl, _status, mappingOption]);

  const statusBool = !isValidNumber(_value) ? _status : undefined;

  return (
    <>
      {renderOptions}
      <Cell
        className='ellipsis'
        id={`cell-${tabIndex}`}
        tabIndex={tabIndex || 0}
        width={width}
        disabled={disabled || isWarning}
        status={statusBool}
        // onKeyDown={handleKeyDown}
      >
        <FlexBox>
          <Input
            autoComplete='off'
            id={`cell-input-${tabIndex}`}
            ref={inputEl}
            status={statusBool}
            disabled={disabled || disabledEdit || isWarning}
            type={inputType}
            disabledEdit={disabledEdit}
            alignData={alignData}
            maxLength={maxLength}
            onKeyDown={handleKeyDownInput}
            onBlur={() => !disabled && !disabledEdit && handleBlur()}
            onFocus={() => !disabled && !disabledEdit && handleFocus()}
            onChange={(e) => handleChange(e.target.value)}
            onInput={(e) => {
              if (maxLength && inputType === 'number') {
                const _value = get(e, 'target.value', '') as string;

                set(e, 'target.value', _value?.slice(0, maxLength));
              }
            }}
          />
          {endAdornment && !isWarning && (
            <BoxAdornment className={isHoverShowAdornment ? 'endAdornment' : ''} ml={0.75}>
              {endAdornment(cell)}
            </BoxAdornment>
          )}

          {isWarning && (
            <Tooltip arrow title={warningText} placement='top'>
              <IconButton>
                <WarningIcon />
              </IconButton>
            </Tooltip>
          )}

          {useStatus && !isWarning && (
            <BoxAdornment className={isHoverShowAdornment && !anchorEl ? 'endAdornment' : ''} ml={0.75}>
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                {anchorEl ? <ArrowUp fontSize='small' /> : <ArrowDown fontSize='small' />}
              </IconButton>
            </BoxAdornment>
          )}
        </FlexBox>
      </Cell>
    </>
  );
};
