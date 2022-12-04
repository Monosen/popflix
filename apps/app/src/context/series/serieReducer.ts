import { SerieState } from './';
import { ISerie } from '../interfaces';

type SerieActionType =
  | { type: '[Serie] - adding series'; payload: ISerie[] }
  | { type: '[Serie] - adding a serie'; payload: ISerie }
  | { type: '[Serie] - removing a serie'; payload: string };
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
    case '[Serie] - removing a serie':
      return {
        ...state,
        series: state.series!.filter((serie) => serie._id !== action.payload),
      };
    default:
      return state;
  }
};
