import { messages as api } from 'api';

const actions = {
  setMessagesList: messages => ({
    type: 'MESSAGES:SET_LIST',
    payload: messages,
  }),
  setIsLoading: isLoading => ({
    type: 'MESSAGES:SET_IS_LOADING',
    payload: isLoading,
  }),
  getMessagesList: dialogId => dispatch => {
    dispatch(actions.setIsLoading(true));
    api
      .getMessages(dialogId)
      .then(({ data }) => {
        dispatch(actions.setMessagesList(data));
        dispatch(actions.setIsLoading(false));
      })
      .catch(() => {
        dispatch(actions.setIsLoading(false));
      });
  },
};

export default actions;
