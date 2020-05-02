const initialState = {
  dialogs: [],
  currentDIalog: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DIALOGS:SET_LIST':
      return {
        ...state,
        dialogs: action.payload,
      }
    case 'DIALOGS:SET_CURRENT_DIALOG':
      return {
        ...state,
        currentDialog: action.payload,
      }

    default:
      return state
  }
}
