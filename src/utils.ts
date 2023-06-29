import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';

export const deepCompareObject =
  (ignoreProps: string[] = []) =>
  (object1: Record<string, any>, object2: Record<string, any>) => {
    if ((!object1 || !object2) && [typeof object1, typeof object2].includes('object')) return true;

    return isEqual(omit(object1, ignoreProps), omit(object2, ignoreProps));
  };
