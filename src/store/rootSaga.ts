import { signInSaga } from '@features/SignInForm/store/saga';
import { signUpSaga } from '@features/SignUpForm/store/saga';
import { userProfileSaga } from '@features/UserProfileForm/store/saga';
import { fork } from 'redux-saga/effects';

export function* rootSaga() {
  yield fork(signUpSaga);
  yield fork(signInSaga);
  yield fork(userProfileSaga);
}
