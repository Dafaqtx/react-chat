import axios from 'axios';
const API_PREFIX = 'api';

const api = axios.create({
  baseURL: `http://localhost:3001/${API_PREFIX}`,
  headers: {
    common: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: window.localStorage.token,
    },
  },
  validateStatus: status => status < 300,
});

window.axios = api;

export default api;
