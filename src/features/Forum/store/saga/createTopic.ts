import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { CreateTopicResponse } from '@features/Forum/types';
import { AxiosResponse } from 'axios';
import { ActionTypes } from '../actionTypes';
import { createTopic as createTopicAction, createTopicSetState } from '../actions';

function* createTopic({ type, payload: data }: ReturnType<typeof createTopicAction>) {
  try {
    yield put(uiActions.request(type));

    const { data: topic }: AxiosResponse<CreateTopicResponse> = yield call(ajax, {
      method: 'POST',
      url: FURRY_EUREKA_URL.topics,
      data,
    }, undefined, BASE_URL.furryEureka);

    yield put(createTopicSetState(topic));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(e.message || e);
  }
}

export function* createTopicListener() {
  yield takeLeading(ActionTypes.CREATE_TOPIC, createTopic);
}
