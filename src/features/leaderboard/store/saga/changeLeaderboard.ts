import {
  call, put, select, takeLeading,
} from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { errorHandlerSaga } from '@libs/errorHandlerSaga';
import { State } from '@store/types';
import { changeLeaderboard as changeLeaderboardAction } from '../actions';
import { ActionTypes } from '../actionTypes';

function* changeLeaderboard({ type, payload }: ReturnType<typeof changeLeaderboardAction>) {
  try {
    yield put(uiActions.request(type));
    const username = yield select((state: State) => state.userProfile.login);

    yield call(ajax, {
      method: 'POST',
      url: URL.changeLeaderboard,
      data: {
        ...payload,
        data: {
          ...payload.data,
          username,
        },
      },
    });

    yield put(uiActions.success(type));
    yield call(payload.navToLeaderboard);
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(errorHandlerSaga, e);
  }
}

export function* changeLeaderboardListener() {
  yield takeLeading(ActionTypes.CHANGE_LEADERBOARD, changeLeaderboard);
}
