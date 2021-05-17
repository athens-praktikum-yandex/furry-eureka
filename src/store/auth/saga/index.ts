import { fork } from 'redux-saga/effects';
import { setAuthorizationListener } from './authHandler';
import { checkAuthListener } from './checkAuth';

export function* authSaga() {
  yield fork(setAuthorizationListener);
  yield fork(checkAuthListener);
}
