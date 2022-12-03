import { createContext } from 'react';
import { IUser } from '../interfaces';

interface ContextProps {
  user?: IUser;
  registerUser: (
    username: string,
    password: string,
    address: string,
    country: string
  ) => Promise<{
    hasError: boolean;
    message?: string;
  }>;

  loginUser: (username: string, password: string) => Promise<boolean>;

  logoutUser: () => void;
}

export const AuthContext = createContext({} as ContextProps);
