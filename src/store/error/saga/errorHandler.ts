import { call, put, takeLeading } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import { setAuth } from '@store/auth/actions';
import { handleError } from '../actions';
import { ActionTypes } from '../actionTypes';

function* errorHandler({ payload }: ReturnType<typeof handleError>) {
  if (payload.code === 401) {
    yield put(setAuth({ isAuth: false }));
  }
  yield call(toast.error, `${payload.name}: ${payload.message}`);
}

export function* errorHandlerListener() {
  yield takeLeading(ActionTypes.HANDLE_ERROR, errorHandler);
}
