import { fork } from 'redux-saga/effects';
import { getLeaderboardListener } from './getLeaderboard';

export function* leaderboardSaga() {
  yield fork(getLeaderboardListener);
}
