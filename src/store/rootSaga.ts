import { signUpSaga } from '@features/SignUpForm/store/saga';
import { fork } from 'redux-saga/effects';

export function* rootSaga() {
  yield fork(signUpSaga);
}
