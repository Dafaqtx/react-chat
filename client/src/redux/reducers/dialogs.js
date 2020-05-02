const initialState = {
  dialogs: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DIALOGS:SET_LIST':
      return {
        ...state,
        dialogs: action.payload,
      }

    default:
      return state
  }
}
