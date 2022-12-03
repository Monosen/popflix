import { SerieState } from './';
import { ISerie } from '../interfaces';

type SerieActionType = { type: '[Serie] - adding movies'; payload: ISerie[] };

export const serieReducer = (
  state: SerieState,
  action: SerieActionType
): SerieState => {
  switch (action.type) {
    case '[Serie] - adding movies':
      return {
        ...state,
        series: action.payload,
      };
    default:
      return state;
  }
};
