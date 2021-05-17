import { call, takeLatest } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { errorHandlerSaga } from '@libs/errorHandlerSaga';
import { ActionTypes } from '../actionTypes';
import { checkAuth as checkAuthAction } from '../actions';

function* checkAuth({ cookie }: ReturnType<typeof checkAuthAction>) {
  try {
    yield call(ajax, {
      method: 'GET',
      url: URL.checkAuth,
    }, cookie);
  } catch (e) {
    yield call(errorHandlerSaga, e);
  }
}

export function* checkAuthListener() {
  yield takeLatest(ActionTypes.CHECK_AUTH, checkAuth);
}
