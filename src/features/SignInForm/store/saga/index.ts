import { fork } from 'redux-saga/effects';
import { signInListener } from './signIn';

export function* signInSaga() {
  yield fork(signInListener);
}
