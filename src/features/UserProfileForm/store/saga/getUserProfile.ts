import { call, put, takeLatest } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { errorHandlerSaga } from '@libs/errorHandlerSaga';
import { AxiosResponse } from 'axios';
import { UserProfileState } from '@features/UserProfileForm/types';
import { ActionTypes } from '../actionTypes';
import { getUserProfile as getUserProfileAction, getUserProfileSuccess as getUserProfileSuccessAction } from '../actions';

function* getUserProfile({ type, cookie }: ReturnType<typeof getUserProfileAction>) {
  try {
    yield put(uiActions.request(type));

    const { data }: AxiosResponse<UserProfileState> = yield call(ajax, {
      method: 'GET',
      url: URL.getProfile,
    }, cookie);

    yield put(uiActions.success(type));
    yield put(getUserProfileSuccessAction(data));
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(errorHandlerSaga, e);
  }
}

export function* getUserProfileListener() {
  yield takeLatest(ActionTypes.GET_USER_PROFILE, getUserProfile);
}
