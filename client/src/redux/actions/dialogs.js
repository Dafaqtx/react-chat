import { dialogs as api } from 'api'

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
    api.getDialogs().then(({ data }) => {
      dispatch(actions.setDialogList(data))
    })
  },
}

export default actions
