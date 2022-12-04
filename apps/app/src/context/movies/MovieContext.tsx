import { createContext } from 'react';
import { IMovie } from '../interfaces';

interface ContextProps {
  movies?: IMovie[];
  getMovieById: (id: string) => Promise<any>;
  addMovie: (movie: IMovie) => Promise<void>;
  deleteMovie: (id: string) => Promise<void>;
}

export const MovieContext = createContext({} as ContextProps);
