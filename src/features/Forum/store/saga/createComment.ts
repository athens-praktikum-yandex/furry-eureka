import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { CreateCommentResponse } from '@features/Forum/types';
import { ActionTypes } from '../actionTypes';
import { createComment as createCommentAction, createCommentSuccess } from '../actions';

function* createComment({ type, payload: data }: ReturnType<typeof createCommentAction>) {
  try {
    yield put(uiActions.request(type));

    const comment: CreateCommentResponse = yield call(ajax, {
      method: 'POST',
      url: FURRY_EUREKA_URL.comments,
      data,
    }, undefined, BASE_URL.furryEureka);

    yield put(createCommentSuccess(comment));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    toast.error(e.message || e);
  }
}

export function* createCommentListener() {
  yield takeLeading(ActionTypes.CREATE_COMMENT, createComment);
}
