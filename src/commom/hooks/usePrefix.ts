import { useLayout } from './useLayout';

export const usePrefix = (after = '') => {
  const { prefixCls } = useLayout();

  return `${prefixCls}-${after}`;
};
