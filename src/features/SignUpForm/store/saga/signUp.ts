import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { signUp as signUpAction } from '../actions';
import { actionTypes } from '../actionTypes';

function* signUp({ type, payload: data }: ReturnType<typeof signUpAction>) {
  try {
    yield put(uiActions.request(type));

    yield call(ajax, {
      method: 'POST',
      url: URL.signUp,
      data,
    });

    yield put(uiActions.success(type));
    toast.success('Регистрация прошла успешно');
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(`${e.name}: ${e.message}`);
  }
}

export function* signUpListener() {
  yield takeLeading(actionTypes.SIGN_UP, signUp);
}
