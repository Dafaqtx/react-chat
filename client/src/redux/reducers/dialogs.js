const initialState = {
  dialogs: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DIALOGS:SET_ITEMS':
      return {
        ...state,
        dialogs: action.payload,
      }

    default:
      return state
  }
}
