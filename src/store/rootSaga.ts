import { signInSaga } from '@features/SignInForm/store/saga';
import { signUpSaga } from '@features/SignUpForm/store/saga';
import { userProfileSaga } from '@features/UserProfileForm/store/saga';
import { leaderboardSaga } from '@features/leaderboard/store/saga';
import { forumSaga } from '@features/Forum/store/saga';
import { authSaga } from '@store/auth/saga';
import { fork } from 'redux-saga/effects';
import { themeSaga } from './theme/saga';

export function* rootSaga() {
  yield fork(signUpSaga);
  yield fork(signInSaga);
  yield fork(userProfileSaga);
  yield fork(leaderboardSaga);
  yield fork(authSaga);
  yield fork(forumSaga);
  yield fork(themeSaga);
}
