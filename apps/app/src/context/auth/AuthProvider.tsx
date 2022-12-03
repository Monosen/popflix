import axios from 'axios';
import Cookie from 'js-cookie';
import { FC, PropsWithChildren, useReducer } from 'react';

import { popflixApi } from '../../api';
import { IUser } from '../interfaces';
import { AuthContext, authReducer } from './';

export interface AuthState {
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  user: undefined,
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const registerUser = async (
    username: string,
    password: string,
    address: string,
    country: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await popflixApi.post('/user/signUp', {
        username,
        password,
        address,
        country,
      });

      Cookie.set('token', data.token);

      return { hasError: false };
    } catch (error) {
      return { hasError: true, message: (error as any).message };
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
