import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { oAuth as oAuthAction } from '../actions';
import { ActionTypes } from '../actionTypes';

function* oAuthRedirect({ type, payload }: ReturnType<typeof oAuthAction>) {
  try {
    const { redirectCallback, ...params } = payload;

    yield put(uiActions.request(type));

    const { data: { service_id: serviceId } } = yield call(ajax, {
      method: 'GET',
      url: URL.oAuthServiceId,
      params,
    });

    yield call(redirectCallback, serviceId);

    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(e.message || e);
  }
}

export function* oAuthRedirectListener() {
  yield takeLeading(ActionTypes.OAUTH_REDIRECT, oAuthRedirect);
}
