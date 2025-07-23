import { useContext } from 'react';
import { ActiveButtonContext } from '../context/ActiveButtonContext.tsx';
import type { ActiveButtonContextType } from '../types.ts';

export const useActiveButton = (): ActiveButtonContextType => {
  const context = useContext(ActiveButtonContext);
  if (!context) {
    throw new Error('useActiveButton must be used within an ActiveButtonProvider');
  }
  return context;
};
