import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { CreateReplyResponse } from '@features/Forum/types';
import { AxiosResponse } from 'axios';
import { ActionTypes } from '../actionTypes';
import { createReply as createReplyAction, createReplySetState } from '../actions';

function* createReply({ type, payload: data }: ReturnType<typeof createReplyAction>) {
  try {
    yield put(uiActions.request(type));

    const { data: reply }: AxiosResponse<CreateReplyResponse> = yield call(ajax, {
      method: 'POST',
      url: FURRY_EUREKA_URL.replies,
      data,
    }, undefined, BASE_URL.furryEureka);

    yield put(createReplySetState(reply));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(e.message || e);
  }
}

export function* createReplyListener() {
  yield takeLeading(ActionTypes.CREATE_REPLY, createReply);
}
