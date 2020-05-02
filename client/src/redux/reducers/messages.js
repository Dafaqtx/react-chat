const initialState = {
    items: [],
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'MESSAGES:SET_LIST':
        return {
          ...state,
          items: action.payload,
        }
  
      default:
        return state
    }
  }
  