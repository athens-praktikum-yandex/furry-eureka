import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { GetUsersResponse } from '@features/Forum/types';
import { ActionTypes } from '../actionTypes';
import { getUsers as getUsersAction, getUsersSuccess } from '../actions';

function* getUsers({ type }: ReturnType<typeof getUsersAction>) {
  try {
    yield put(uiActions.request(type));

    const users: GetUsersResponse = yield call(ajax, {
      method: 'GET',
      url: FURRY_EUREKA_URL.users,
    }, undefined, BASE_URL.furryEureka);

    yield put(getUsersSuccess(users));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(e.message || e);
  }
}

export function* getUsersListener() {
  yield takeLeading(ActionTypes.GET_USERS, getUsers);
}
