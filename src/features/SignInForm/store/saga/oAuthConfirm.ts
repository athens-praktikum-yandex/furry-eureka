import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { setAuth } from '@store/auth/actions';
import { oAuthConfirm as oAuthConfirmAction } from '../actions';
import { ActionTypes } from '../actionTypes';

function* oAuthConfirm({ type, payload: data }: ReturnType<typeof oAuthConfirmAction>) {
  try {
    yield put(uiActions.request(type));

    yield call(ajax, {
      method: 'POST',
      url: URL.oAuthYandex,
      data,
    });

    yield put(uiActions.success(type));
    yield put(setAuth({ isAuth: true }));
    toast.success('Вы вошли');
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(e.message || e);
  }
}

export function* oAuthConfirmListener() {
  yield takeLeading(ActionTypes.OAUTH_CONFIRM, oAuthConfirm);
}
