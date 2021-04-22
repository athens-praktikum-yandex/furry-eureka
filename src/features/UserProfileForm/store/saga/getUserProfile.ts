import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { handleError } from '@store/error/actions';
import { getUserProfile as getUserProfileAction, getUserProfileSuccess as getUserProfileSuccessAction } from '../actions';
import { ActionTypes } from '../actionTypes';

function* getUserProfile({ type }: ReturnType<typeof getUserProfileAction>) {
  try {
    yield put(uiActions.request(type));

    const response = yield call(ajax, {
      method: 'GET',
      url: URL.getProfile,
    });

    yield put(uiActions.success(type));
    yield put(getUserProfileSuccessAction(response.data));
  } catch (e) {
    yield put(uiActions.error(type));
    yield put(handleError(e));
  }
}

export function* getUserProfileListener() {
  yield takeLeading(ActionTypes.GET_USER_PROFILE, getUserProfile);
}
