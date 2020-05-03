import { axios } from 'core';

export default {
  getMessages: id => axios.get(`/messages?_id=${id}`),
};
