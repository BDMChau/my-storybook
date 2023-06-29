import { useEffect, useRef, useState } from 'react';

import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';

import Box from '@components/Box';
import IconButton from '@components/IconButton';
import Tooltip from '@components/Tooltip';
import Typography from '@components/Typography';

import { lockText } from '../constants';
import { ColumnProps } from '../props';
import { BoxAdornment, FlexBox, Header } from '../styles';

export default ({
  variant,
  isHidden,
  borderRadiusTop,
  colSpan,
  rowSpan,
  header,
  groupHeader,
  enableSort,
  description,
  disabled,
  stickyLeft,
  rowIndex,
  maxWidth = 200,
  isShowTooltip,
  isBlankSpace,
  backgroundColor,
  blankSpaceColor,
  headerWeight,
  deltaWidth = 0,
}: ColumnProps & {
  rowIndex: number;
}) => {
  const [childDisabledTooltip, setChildDisabledTooltip] = useState(!isShowTooltip);
  const [headerDisabledTooltip, setHeaderDisabledTooltip] = useState(!isShowTooltip);
  const [isSortToggle, setIsSortToggle] = useState(false);
  const [isHoveringLock, setIsHoveringLock] = useState(false);
  const [isHoveringHeader, setIsHoveringHeader] = useState(false);

  const headerElementRef = useRef<HTMLTableHeaderCellElement>(null);
  const childElementRef = useRef<HTMLDivElement>(null);

  const compare = (element: HTMLDivElement) =>
    element ? element.offsetWidth < element.scrollWidth || element.offsetHeight < element.scrollHeight : false;

  const compareChildSize = () => {
    const element = childElementRef.current;

    setChildDisabledTooltip(!(element && compare(element)) || !isShowTooltip);
  };

  const compareHeaderSize = () => {
    const element = headerElementRef.current;

    setHeaderDisabledTooltip(!(element && compare(element)) || !isShowTooltip);
  };

  useEffect(() => {
    compareChildSize();
    compareHeaderSize();
  }, []);

  let option = <></>;
  let calcWidth = maxWidth - deltaWidth;

  if (disabled || enableSort || description) {
    calcWidth = calcWidth - 32;
    option = (
      <>
        <BoxAdornment
          mt={0.55}
          ml={2}
          onMouseEnter={() => setIsHoveringLock(true)}
          onMouseLeave={() => setIsHoveringLock(false)}
        >
          {disabled ? (
            <Tooltip arrow title={lockText} disableHoverListener={!isShowTooltip} placement='top'>
              <LockClockOutlinedIcon fontSize='small' />
            </Tooltip>
          ) : (
            <>
              {!!description && <InfoOutlinedIcon fontSize='small' />}
              <IconButton onClick={(e) => setIsSortToggle(!isSortToggle)}>
                {enableSort && isSortToggle ? (
                  <ArrowDownwardRoundedIcon sx={{ ml: 0.5 }} fontSize='small' />
                ) : (
                  <ArrowUpwardRoundedIcon sx={{ ml: 0.5 }} fontSize='small' />
                )}
              </IconButton>
            </>
          )}
        </BoxAdornment>
      </>
    );
  }

  const children = (
    <>
      <Box display='flex'>
        <Box className='ellipsis' ref={childElementRef} style={{ maxWidth: calcWidth }}>
          <Typography component='span' variant={variant || 'bodyMedium'}>
            {header}
          </Typography>
        </Box>
        {headerWeight ? (
          <Box style={{ marginLeft: '5px' }}>
            <Typography component='span' variant={variant || 'bodyMedium'}>
              {`· ${headerWeight}`}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </>
  );

  console.log(childDisabledTooltip || isHoveringLock, childDisabledTooltip, isHoveringLock);

  return (
    <Tooltip
      open={!isHoveringLock && isHoveringHeader && !childDisabledTooltip}
      arrow
      title={header}
      disableHoverListener={childDisabledTooltip}
      placement='bottom'
    >
      <Header
        ref={headerElementRef}
        className={'ellipsis'}
        maxWidth={maxWidth}
        rowIndex={rowIndex}
        stickyLeft={stickyLeft}
        isHidden={isHidden}
        borderRadiusTop={borderRadiusTop}
        groupHeader={groupHeader}
        colSpan={colSpan}
        rowSpan={rowSpan}
        disabled={disabled}
        isBlankSpace={isBlankSpace}
        blankSpaceColor={blankSpaceColor}
        backgroundColor={backgroundColor}
        onMouseEnter={() => setIsHoveringHeader(true)}
        onMouseLeave={() => setIsHoveringHeader(false)}
      >
        <FlexBox>
          {children}

          {option}
        </FlexBox>
      </Header>
    </Tooltip>
  );
};
