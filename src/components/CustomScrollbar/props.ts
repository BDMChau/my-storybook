export type ScrollbarProps = {
  onScroll?: React.UIEventHandler<HTMLElement> | undefined;
  forwardedRef?: React.MutableRefObject<HTMLElement> | Function;
  maxHeightScroll: number;
  children: React.ReactNode;
  suppressScrollY?: boolean;
  suppressScrollX?: boolean;
  scrollTo?: number;
};
