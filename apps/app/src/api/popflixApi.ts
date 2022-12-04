import axios from 'axios';
import Cookies from 'js-cookie';

export const popflixApi = axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    Authorization: `Bearer ${Cookies.get('token')}`,
  },
});
