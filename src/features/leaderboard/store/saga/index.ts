import { fork } from 'redux-saga/effects';
import { changeLeaderboardListener } from '@features/leaderboard/store/saga/changeLeaderboard';
import { getLeaderboardListener } from './getLeaderboard';

export function* leaderboardSaga() {
  yield fork(getLeaderboardListener);
  yield fork(changeLeaderboardListener);
}
