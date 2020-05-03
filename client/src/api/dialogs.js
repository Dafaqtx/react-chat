import { axios } from 'core';

export default {
  getDialogs: () => axios.get('/dialogs'),
};
