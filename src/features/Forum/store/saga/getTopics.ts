import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { GetTopicsResponse } from '@features/Forum/types';
import { AxiosResponse } from 'axios';
import { ActionTypes } from '../actionTypes';
import { getTopics as getTopicsAction, getTopicsSetState } from '../actions';

function* getTopics({ type }: ReturnType<typeof getTopicsAction>) {
  try {
    yield put(uiActions.request(type));

    const { data: topics }: AxiosResponse<GetTopicsResponse> = yield call(ajax, {
      method: 'GET',
      url: FURRY_EUREKA_URL.topics,
    }, undefined, BASE_URL.furryEureka);

    yield put(getTopicsSetState(topics));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(e.message || e);
  }
}

export function* getTopicsListener() {
  yield takeLeading(ActionTypes.GET_TOPICS, getTopics);
}
