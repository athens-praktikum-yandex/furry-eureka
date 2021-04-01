import { fork } from 'redux-saga/effects';
import { signUpListener } from './signUp';

export function* signUpSaga() {
  yield fork(signUpListener);
}
