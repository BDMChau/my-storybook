import { useCallback, useEffect, useRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';

import { ScrollbarProps } from './props';

export default ({
  onScroll,
  forwardedRef,
  maxHeightScroll,
  children,
  suppressScrollY = false,
  suppressScrollX = true,
  scrollTo,
}: ScrollbarProps) => {
  const containerRef = useRef<HTMLElement>();

  const refSetter = useCallback(
    (scrollbarsRef) => {
      if (typeof forwardedRef === 'function') {
        if (scrollbarsRef) {
          forwardedRef(scrollbarsRef.view);
        } else {
          forwardedRef(null);
        }
      }
    },
    [forwardedRef]
  );

  useEffect(() => {
    const curr = containerRef.current;

    if (curr && scrollTo) {
      curr.scrollLeft = scrollTo;
    }
  }, [scrollTo]);

  return (
    <PerfectScrollbar
      containerRef={(el) => (containerRef.current = el)}
      ref={refSetter}
      style={{ maxHeight: maxHeightScroll, overflowY: 'hidden', height: '100%', position: 'relative' }}
      onScroll={onScroll}
      options={{
        wheelPropagation: true,
        suppressScrollY,
        suppressScrollX,
      }}
    >
      {children}
    </PerfectScrollbar>
  );
};
