import { createContext } from 'react';
import type { ActiveButtonContextType } from '../types.ts';

export const ActiveButtonContext = createContext<ActiveButtonContextType | undefined>(undefined);
