import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { GetRepliesResponse } from '@features/Forum/types';
import { AxiosResponse } from 'axios';
import { ActionTypes } from '../actionTypes';
import { getReplies as getRepliesAction, getRepliesSetState } from '../actions';

function* getReplies({ type }: ReturnType<typeof getRepliesAction>) {
  try {
    yield put(uiActions.request(type));

    const { data: replies }: AxiosResponse<GetRepliesResponse> = yield call(ajax, {
      method: 'GET',
      url: FURRY_EUREKA_URL.replies,
    }, undefined, BASE_URL.furryEureka);

    yield put(getRepliesSetState(replies));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(toast.error, e.message || e);
  }
}

export function* getRepliesListener() {
  yield takeLeading(ActionTypes.GET_REPLIES, getReplies);
}
