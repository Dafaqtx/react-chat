import { axios } from 'core';

export default {
  signIn: data => axios.post('/users/signIn', data),
  signUp: data => axios.post('/users/signUp', data),
  verifyHash: hash => axios.get('/users/verify?hash=' + hash),
  getMe: () => axios.get('/users/me'),
  findUsers: query => axios.get('/users/find?query=' + query),
};
