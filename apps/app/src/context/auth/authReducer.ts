import { AuthState } from './';
import { IUser } from '../interfaces/IUser';

type AuthActionType =
  | { type: '[Auth] - Login'; payload: IUser }
  | { type: '[Auth] - Logout' }
  | { type: '[Auth] - Register'; payload: IUser };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        user: action.payload,
      };
    case '[Auth] - Logout':
      return {
        ...state,
        user: undefined,
      };
    case '[Auth] - Register':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
