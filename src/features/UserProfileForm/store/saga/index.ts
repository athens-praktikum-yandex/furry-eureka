import { fork } from 'redux-saga/effects';
import { getUserProfileListener } from './getUserProfile';
import { changeUserProfileListener } from './changeUserProfile';
import { changePasswordListener } from './changePassword';

export function* userProfileSaga() {
  yield fork(getUserProfileListener);
  yield fork(changeUserProfileListener);
  yield fork(changePasswordListener);
}
