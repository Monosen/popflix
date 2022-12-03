import { createContext } from 'react';
import { IMovie } from '../interfaces';

interface ContextProps {
  movies?: IMovie[];
  getMovieById: (id: string) => Promise<any>;
}

export const MovieContext = createContext({} as ContextProps);
