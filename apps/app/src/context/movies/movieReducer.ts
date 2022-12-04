import { MovieState } from './';
import { IMovie } from '../interfaces';

type MovieActionType =
  | { type: '[Movie] - adding movies'; payload: IMovie[] }
  | { type: '[Movie] - adding a movie'; payload: IMovie };

export const movieReducer = (
  state: MovieState,
  action: MovieActionType
): MovieState => {
  switch (action.type) {
    case '[Movie] - adding movies':
      return {
        ...state,
        movies: action.payload,
      };
    case '[Movie] - adding a movie':
      return {
        ...state,
        movies: [...state.movies!, action.payload],
      };
    default:
      return state;
  }
};
