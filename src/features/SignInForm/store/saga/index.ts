import { fork } from 'redux-saga/effects';
import { signInListener } from './signIn';
import { oAuthRedirectListener } from './oAuthRedirect';

export function* signInSaga() {
  yield fork(signInListener);
  yield fork(oAuthRedirectListener);
}
