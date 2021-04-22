import { fork } from 'redux-saga/effects';
import { setAuthorizationListener } from './authHandler';

export function* authSaga() {
  yield fork(setAuthorizationListener);
}
