const initialState = {
  data: null,
  token: window.localStorage.token,
  isAuth: !!window.localStorage.token,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER:SET_DATA':
      return {
        ...state,
        data: action.payload,
        isAuth: true,
        token: window.localStorage.token,
      };
    case 'USER:SET_IS_AUTH':
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
