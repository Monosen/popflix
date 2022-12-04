import { FC, PropsWithChildren, useEffect, useReducer } from 'react';

import { popflixApi } from '../../api';
import { IMovie } from '../interfaces';
import { MovieContext, movieReducer } from './';

export interface MovieState {
  movies?: IMovie[];
}

const MOVIE_INITIAL_STATE: MovieState = {
  movies: undefined,
};

export const MovieProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, MOVIE_INITIAL_STATE);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const { data } = await popflixApi.get('/movie/all');

      dispatch({ type: '[Movie] - adding movies', payload: data });
    } catch (error) {
      console.log('🚀 ~ file: MovieProvider.tsx:24 ~ getMovies ~ error', error);
    }
  };

  const getMovieById = async (id: string) => {
    try {
      const { data } = await popflixApi.get(`/movie/one/${id}`);

      return data;
    } catch (error) {
      console.log(
        '🚀 ~ file: MovieProvider.tsx:36 ~ getMovieById ~ error',
        error
      );
    }
  };

  const addMovie = async (movie: IMovie) => {
    try {
      dispatch({ type: '[Movie] - adding a movie', payload: movie });
    } catch (error) {
      console.log('🚀 ~ file: MovieProvider.tsx:49 ~ addMovie ~ error', error);
    }
  };

  const deleteMovie = async (id: string) => {
    try {
      await popflixApi.delete(`/movie/delete/${id}`);

      dispatch({ type: '[Movie] - removing a movie', payload: id });
    } catch (error) {
      console.log(
        '🚀 ~ file: MovieProvider.tsx:57 ~ deleteMovie ~ error',
        error
      );
    }
  };

  return (
    <MovieContext.Provider
      value={{ ...state, getMovieById, addMovie, deleteMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};
