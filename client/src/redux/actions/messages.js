import { messages as api } from 'api'

const actions = {
  setMessagesList: messages => ({
    type: 'MESSAGES:SET_LIST',
    payload: messages,
  }),
  getMessagesList: (dialogId) => dispatch => {
    api.getMessages(dialogId).then(({ data }) => {
      dispatch(actions.setMessagesList(data))
    })
  },
}

export default actions
