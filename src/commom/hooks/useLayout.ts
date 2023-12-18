import { useContext } from 'react';
import { DesignerLayoutContext } from '../context';
import { IDesignerLayoutContext } from '../types';

export const useLayout = (): IDesignerLayoutContext => {
  return (
    useContext(DesignerLayoutContext)
  )
};
