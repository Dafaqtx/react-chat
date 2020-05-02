import { axios } from 'core'

export default {
  getMessages: () => axios.get('/messages'),
}
