import { type FC, type ReactNode, useState } from 'react';
import { ActiveButtonContext } from '../context/ActiveButtonContext.tsx';
import type { ActiveButtonType } from '../types.ts';

interface ActiveButtonProviderType {
  children: ReactNode;
}

export const ActiveButtonProvider: FC<ActiveButtonProviderType> = ({ children }) => {
  const [activeButton, setActiveButton] = useState<ActiveButtonType>('all');

  return <ActiveButtonContext.Provider value={{ activeButton, setActiveButton }}>{children}</ActiveButtonContext.Provider>;
};
