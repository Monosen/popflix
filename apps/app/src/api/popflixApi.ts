import axios from 'axios';

export const popflixApi = axios.create({
  baseURL: 'http://localhost:3333/api',
});
