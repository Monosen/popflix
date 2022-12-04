import { SerieState } from './';
import { ISerie } from '../interfaces';

type SerieActionType =
  | { type: '[Serie] - adding series'; payload: ISerie[] }
  | { type: '[Serie] - adding a serie'; payload: ISerie };

export const serieReducer = (
  state: SerieState,
  action: SerieActionType
): SerieState => {
  switch (action.type) {
    case '[Serie] - adding series':
      return {
        ...state,
        series: action.payload,
      };
    case '[Serie] - adding a serie':
      return {
        ...state,
        series: [...state.series!, action.payload],
      };
    default:
      return state;
  }
};
