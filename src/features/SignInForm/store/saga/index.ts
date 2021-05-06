import { fork } from 'redux-saga/effects';
import { signInListener } from './signIn';
import { oAuthRedirectListener } from './oAuthRedirect';
import { oAuthConfirmListener } from './oAuthConfirm';

export function* signInSaga() {
  yield fork(signInListener);
  yield fork(oAuthRedirectListener);
  yield fork(oAuthConfirmListener);
}
