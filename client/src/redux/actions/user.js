import { users as api } from 'api';

const Actions = {
  setUserData: data => ({
    type: 'USER:SET_DATA',
    payload: data,
  }),
  setIsAuth: bool => ({
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),
  fetchUserData: () => dispatch => {
    api
      .getMe()
      .then(({ data }) => {
        dispatch(Actions.setUserData(data));
      })
      .catch(err => {
        if (err.response.status === 403) {
          dispatch(Actions.setIsAuth(false));
          delete window.localStorage.token;
        }
      });
  },
  fetchUserLogin: data => () => {
    return api.login(data);
  },
  fetchUserRegister: data => () => {
    return api.registration(data);
  },
};

export default Actions;
