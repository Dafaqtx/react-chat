import { all } from 'redux-saga/effects';

import usersSaga from './usersSaga';

const sagas = [usersSaga];

export default function* rootSaga() {
  yield all(sagas);
}
