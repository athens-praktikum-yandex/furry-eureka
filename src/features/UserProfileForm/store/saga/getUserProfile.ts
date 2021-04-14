import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { getUserProfile as getUserProfileAction } from '../actions';
import { ActionTypes } from '../actionTypes';

function* getUserProfile({ type }: ReturnType<typeof getUserProfileAction>) {
  try {
    yield put(uiActions.request(type));

    yield call(ajax, {
      method: 'GET',
      url: URL.getProfile,
    });

    yield put(uiActions.success(type));
    toast.success('Данные пользователя получены');
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(`${e.name}: ${e.message}`);
  }
}

export function* getUserProfileListener() {
  yield takeLeading(ActionTypes.GET_USER_PROFILE, getUserProfile);
}
