import { put, call, fork, take } from 'redux-saga/effects';

import { REQUEST, acceptError } from 'redux/reduxHelpers';

import * as api from 'api';
import * as ActionTypes from '../actions/users';

export function* setUserRegistrationSaga(payload) {
  console.log(payload);
  //   try {
  //     const { data } = yield call(api.registration, payload);
  //     yield put(ActionTypes.setUserRegistration.success(data));
  //   } catch (e) {
  //     yield put(acceptError(e));
  //     yield put(ActionTypes.setUserRegistration.failure());
  //   }
}

export function* setUserRegistrationWatcherSaga() {
  while (true) {
    const payload = yield take(ActionTypes.SET_USER_REGISTRATION[REQUEST]);
    console.log(payload);
    yield call(setUserRegistrationSaga, payload);
  }
}

export default [fork(setUserRegistrationWatcherSaga)];
