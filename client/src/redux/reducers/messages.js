const initialState = {
  items: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MESSAGES:SET_LIST':
      return {
        ...state,
        messagesAreLoaded: true,
        items: action.payload,
      };
    case 'MESSAGES:SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
