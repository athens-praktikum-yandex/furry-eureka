import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { setAuth } from '@store/auth/actions';
import { changePassword as changePasswordAction } from '../actions';
import { ActionTypes } from '../actionTypes';

function* changePassword({ type, payload: data }: ReturnType<typeof changePasswordAction>) {
  try {
    yield put(uiActions.request(type));

    yield call(ajax, {
      method: 'PUT',
      url: URL.changePassword,
      data,
    });

    yield put(uiActions.success(type));
    toast.success('Пароль обновлен');
  } catch (e) {
    yield put(uiActions.error(type));
    if (e.code === 401) {
      yield put(setAuth({ isAuth: false }));
    }
    toast.error(`${e.name}: ${e.message}`);
  }
}

export function* changePasswordListener() {
  yield takeLeading(ActionTypes.CHANGE_PASSWORD, changePassword);
}
