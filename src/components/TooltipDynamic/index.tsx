import React, { useCallback, useEffect, useState, Children } from 'react';

import { SxProps } from '@mui/material/styles';

import Box from '@components/Box';
import Tooltip from '@components/Tooltip';

import { TooltipDynamicProps } from './props';

const styles = {
  'text-ellipsis': {
    whiteSpace: 'nowrap',
    overflow: ' hidden !important',
    textOverflow: 'ellipsis',
  },
  'text-ellipsis-2row': {
    overflow: 'hidden',
    wordBreak: 'break-word',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
  },
  'text-ellipsis-3row': {
    overflow: 'hidden',
    wordBreak: 'break-word',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '3',
    '-webkit-box-orient': 'vertical',
  },
};

export default function TooltipDynamic({ children, title, placement, compareLines = false, lines = 0, lineHeightText = 0, ...rest }: TooltipDynamicProps) {
  const textElement = React.createRef<HTMLDivElement>();
  const [isOverflowed, setIsOverflowed] = useState(false);
  const scrollWidth = textElement?.current?.scrollWidth;

  const updateWidth = useCallback(() => {
    if (textElement?.current) {
      setIsOverflowed(
        textElement.current.scrollHeight > textElement.current.offsetHeight ||
          textElement.current.scrollWidth > textElement.current.offsetWidth
      );
    }
  }, [textElement]);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();

    return function cleanup() {
      window.removeEventListener('resize', updateWidth);
    };
  }, [updateWidth]);

  useEffect(() => {
    updateWidth();
  }, [scrollWidth, updateWidth]);

  /////////////
  const maxHeight = compareLines ? lineHeightText * lines : 'unset';

  let styleTextTruncated: SxProps = styles['text-ellipsis'];

  if (compareLines) {
    if (lines === 2) {
      styleTextTruncated = styles['text-ellipsis-2row'];
    }
    else if (lines === 3) {
      styleTextTruncated = styles['text-ellipsis-3row'];
    }
  }

  return (
    <Tooltip title={title} placement={placement} disableHoverListener={!isOverflowed} {...rest}>
     <Box
        component='div'
        ref={textElement}
        sx={{
          ...styleTextTruncated,
          maxHeight
        }}
      >
        {/* first child have to be an inline element */}
        {Children.toArray(children)[0]}
      </Box>
    </Tooltip>
  );
}
