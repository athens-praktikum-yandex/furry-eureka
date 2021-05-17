import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { errorHandlerSaga } from '@libs/errorHandlerSaga';
import { getLeaderboard as getLeaderboardAction, getLeaderboardSuccess as getLeaderboardSuccessAction } from '../actions';
import { ActionTypes } from '../actionTypes';

function* getLeaderboard({ type, payload: data, cookie }: ReturnType<typeof getLeaderboardAction>) {
  try {
    yield put(uiActions.request(type));

    const response = yield call(ajax, {
      method: 'POST',
      url: URL.getLeaderboard,
      data,
    }, cookie);

    yield put(uiActions.success(type));
    yield put(getLeaderboardSuccessAction(response.data));
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(errorHandlerSaga, e);
  }
}

export function* getLeaderboardListener() {
  yield takeLeading(ActionTypes.GET_LEADERBOARD, getLeaderboard);
}
