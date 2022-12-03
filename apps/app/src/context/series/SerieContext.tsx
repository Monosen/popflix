import { createContext } from 'react';
import { ISerie } from '../interfaces';

interface ContextProps {
  series?: ISerie[];

  getSerieById: (id: string) => Promise<any>;
}
export const SerieContext = createContext({} as ContextProps);
