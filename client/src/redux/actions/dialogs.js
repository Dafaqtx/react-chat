import { dialogs as dialogsApi } from 'api'

const actions = {
  setDialogList: dialogs => ({
    type: 'DIALOGS:SET_LIST',
    payload: dialogs,
  }),
  setCurrentDialog: id => ({
    type: 'DIALOGS:SET_CURRENT_DIALOG',
    payload: id,
  }),
  getDialogList: () => dispatch => {
    dialogsApi.getDialogs().then(({ data }) => {
      dispatch(actions.setDialogList(data))
    })
  },
}

export default actions
