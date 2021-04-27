import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { handleError } from '@store/error/actions';
import { GetLeaderboardInitialPayload } from '@features/leaderboard/types';
import { getLeaderboard as getLeaderboardAction, getLeaderboardSuccess as getLeaderboardSuccessAction } from '../actions';
import { ActionTypes } from '../actionTypes';

function* getLeaderboard({ type, payload: data }: ReturnType<typeof getLeaderboardAction>) {
  try {
    yield put(uiActions.request(type));

    const response = yield call(ajax, {
      method: 'POST',
      url: URL.getLeaderboard,
      data,
    });

    yield put(uiActions.success(type));
    yield put(getLeaderboardSuccessAction(
      response.data.map((item: GetLeaderboardInitialPayload) => ({
        time: item.data.athens_time,
        username: item.data.username,
      })),
    ));
  } catch (e) {
    yield put(uiActions.error(type));
    yield put(handleError(e));
  }
}

export function* getLeaderboardListener() {
  yield takeLeading(ActionTypes.GET_LEADERBOARD, getLeaderboard);
}
