import {
  action,
  createRequestTypes,
  FAILURE,
  REQUEST,
  SUCCESS,
} from 'redux/reduxHelpers';

const SET_USER_DATA = createRequestTypes('SET_USER_DATA');
const setUserData = {
  request: data => action(SET_USER_DATA[REQUEST], data),
  success: data => action(SET_USER_DATA[SUCCESS], { data }),
  failure: error => action(SET_USER_DATA[FAILURE], { error }),
};

const SET_USER_IS_AUTH = createRequestTypes('SET_USER_IS_AUTH');
const setUserIsAuth = {
  request: data => action(SET_USER_IS_AUTH[REQUEST], data),
  success: data => action(SET_USER_IS_AUTH[SUCCESS], { data }),
  failure: error => action(SET_USER_IS_AUTH[FAILURE], { error }),
};

const GET_USER_DATA = createRequestTypes('GET_USER_DATA');
const getUserData = {
  request: data => action(GET_USER_DATA[REQUEST], data),
  success: data => action(GET_USER_DATA[SUCCESS], { data }),
  failure: error => action(GET_USER_DATA[FAILURE], { error }),
};

const SET_USER_LOGIN = createRequestTypes('SET_USER_LOGIN');
const setUserLogn = {
  request: data => action(SET_USER_LOGIN[REQUEST], data),
  success: data => action(SET_USER_LOGIN[SUCCESS], { data }),
  failure: error => action(SET_USER_LOGIN[FAILURE], { error }),
};

const SET_USER_REGISTRATION = createRequestTypes('SET_USER_REGISTRATION');
const setUserRegistration = {
  request: data => action(SET_USER_REGISTRATION[REQUEST], data),
  success: data => action(SET_USER_REGISTRATION[SUCCESS], { data }),
  failure: error => action(SET_USER_REGISTRATION[FAILURE], { error }),
};

export {
  setUserData,
  setUserIsAuth,
  getUserData,
  setUserLogn,
  setUserRegistration,
};
