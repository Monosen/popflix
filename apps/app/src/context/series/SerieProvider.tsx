import { FC, PropsWithChildren, useEffect, useReducer } from 'react';

import { popflixApi } from '../../api';
import { ISerie } from '../interfaces';
import { SerieContext, serieReducer } from './';

export interface SerieState {
  series?: ISerie[];
}

const SERIE_INITIAL_STATE: SerieState = {
  series: undefined,
};

export const SerieProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(serieReducer, SERIE_INITIAL_STATE);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const { data } = await popflixApi.get('/serie/all');

      dispatch({ type: '[Serie] - adding movies', payload: data });
    } catch (error) {
      console.log('🚀 ~ file: MovieProvider.tsx:24 ~ getMovies ~ error', error);
    }
  };

  const getSerieById = async (id: string) => {
    try {
      const { data } = await popflixApi.get(`/serie/one/${id}`);

      return data;
    } catch (error) {
      console.log(
        '🚀 ~ file: SerieProvider.tsx:36 ~ getSerieById ~ error',
        error
      );
    }
  };

  return (
    <SerieContext.Provider value={{ ...state, getSerieById }}>
      {children}
    </SerieContext.Provider>
  );
};