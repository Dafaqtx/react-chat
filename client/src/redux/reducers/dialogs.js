const initialState = {
  items: [],
  currentDialog: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DIALOGS:SET_LIST':
      return {
        ...state,
        items: action.payload,
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
