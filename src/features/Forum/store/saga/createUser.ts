import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { CreateUserResponse } from '@features/Forum/types';
import { ActionTypes } from '../actionTypes';
import { createUser as createUserAction, createUserSuccess } from '../actions';

function* createUser({ type, payload: data }: ReturnType<typeof createUserAction>) {
  try {
    yield put(uiActions.request(type));

    const user: CreateUserResponse = yield call(ajax, {
      method: 'POST',
      url: FURRY_EUREKA_URL.users,
      data,
    }, undefined, BASE_URL.furryEureka);

    yield put(createUserSuccess(user));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(e.message || e);
  }
}

export function* createUserListener() {
  yield takeLeading(ActionTypes.CREATE_USER, createUser);
}
