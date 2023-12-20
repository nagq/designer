import React from 'react';
import { usePrefix } from '@/commom/hooks/usePrefix';

export const Placeholder = (props) => {
  const cls = usePrefix('drag-tree-placeholder');

  const left = props.depth * 24;
  return <div className={cls} style={{ left }}></div>;
};
