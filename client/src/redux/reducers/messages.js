const initialState = {
    items: [],
    messagesAreLoaded: false
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'MESSAGES:SET_LIST':
        return {
          ...state,
          messagesAreLoaded: true,
          items: action.payload,
        }
  
      default:
        return state
    }
  }
  