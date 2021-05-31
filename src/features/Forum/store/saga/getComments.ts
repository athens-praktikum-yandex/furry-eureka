import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { GetCommentsResponse } from '@features/Forum/types';
import { AxiosResponse } from 'axios';
import { ActionTypes } from '../actionTypes';
import { getComments as getCommentsAction, getCommentsSetState } from '../actions';

function* getComments({ type }: ReturnType<typeof getCommentsAction>) {
  try {
    yield put(uiActions.request(type));

    const { data: comments }: AxiosResponse<GetCommentsResponse> = yield call(ajax, {
      method: 'GET',
      url: FURRY_EUREKA_URL.comments,
    }, undefined, BASE_URL.furryEureka);

    yield put(getCommentsSetState(comments));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(toast.error, e.message || e);
  }
}

export function* getCommentsListener() {
  yield takeLeading(ActionTypes.GET_COMMENTS, getComments);
}
