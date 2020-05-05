import store from 'redux/store';

export const TOGGLE = 'TOGGLE';
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// error handler
export const ERROR_ACCEPT = 'ERROR_ACCEPT';
export const ERROR_REJECT = 'ERROR_REJECT';

export const createRequestTypes = base =>
  [TOGGLE, REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

export const action = (type, payload = {}) =>
  store.dispatch({ type, ...payload });

export const acceptError = (e, critical = false) =>
  action(ERROR_ACCEPT, { error: e, critical });
