import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { handleError } from '@store/error/actions';
import { changeLeaderboard as changeLeaderboardAction } from '../actions';
import { ActionTypes } from '../actionTypes';

function* changeLeaderboard({ type, payload: data }: ReturnType<typeof changeLeaderboardAction>) {
  try {
    yield put(uiActions.request(type));

    yield call(ajax, {
      method: 'POST',
      url: URL.changeLeaderboard,
      data,
    });

    yield put(uiActions.success(type));
    window.location.href = '/leaderboard';
  } catch (e) {
    yield put(uiActions.error(type));
    yield put(handleError(e));
  }
}

export function* changeLeaderboardListener() {
  yield takeLeading(ActionTypes.CHANGE_LEADERBOARD, changeLeaderboard);
}
