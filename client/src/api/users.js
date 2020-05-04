import { axios } from 'core';

export default {
  login: data => axios.post('/users/login', data),
  registration: data => axios.post('/users/registration', data),
  verifyHash: hash => axios.get('/users/verify?hash=' + hash),
  getMe: () => axios.get('/users/me'),
  findUsers: query => axios.get('/users/find?query=' + query),
};
