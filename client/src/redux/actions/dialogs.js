import { dialogs as dialogsApi } from 'api'

const actions = {
  setDialogList: dialogs => ({
    type: 'DIALOGS:SET_LIST',
    payload: dialogs,
  }),
  getDialogList: () => dispatch => {
    dialogsApi.getDialogs().then(({ data }) => {
      dispatch(actions.setDialogList(data))
    })
  },
}

export default actions
