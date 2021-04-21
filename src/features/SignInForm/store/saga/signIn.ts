import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { setAuth } from '@store/auth/actions';
import { signIn as signInAction } from '../actions';
import { actionTypes } from '../actionTypes';

function* signIn({ type, payload: data }: ReturnType<typeof signInAction>) {
  try {
    yield put(uiActions.request(type));

    yield call(ajax, {
      method: 'POST',
      url: URL.signIn,
      data,
    });

    yield put(uiActions.success(type));
    yield put(setAuth({ isAuth: true }));
    toast.success('Вы вошли');
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(`${e.name}: ${e.message}`);
  }
}

export function* signInListener() {
  yield takeLeading(actionTypes.SIGN_IN, signIn);
}
