import Cookie from 'js-cookie';
import { FC, PropsWithChildren, useEffect, useReducer } from 'react';

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

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      dispatch({ type: '[Auth] - Login', payload: JSON.parse(user) });
    }
  }, []);

  const loginUser = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await popflixApi.post('/user/signIn', {
        username,
        password,
      });
      const { token, user } = data;

      sessionStorage.setItem('user', JSON.stringify(user));

      Cookie.set('token', token);

      dispatch({ type: '[Auth] - Login', payload: user });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

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

      const { token, user } = data;

      sessionStorage.setItem('user', JSON.stringify(user));

      Cookie.set('token', token);

      dispatch({ type: '[Auth] - Register', payload: user });

      return { hasError: false };
    } catch (error) {
      return { hasError: true, message: (error as any).message };
    }
  };

  const logoutUser = () => {
    Cookie.remove('token');
    dispatch({ type: '[Auth] - Logout' });
  };

  const updateUser = async (formData: IUser, password: string) => {
    try {
      await loginUser(formData.username, password);

      dispatch({ type: '[Auth] - Update', payload: formData });
    } catch (error) {
      console.log('🚀 ~ file: AuthProvider.tsx:86 ~ updateUser ~ error', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ ...state, registerUser, loginUser, logoutUser, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
