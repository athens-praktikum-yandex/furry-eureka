import { call, put } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import { setAuth } from '@store/auth/actions';
import { ErrorWithCode } from './ajax';

export function* errorHandlerSaga(error: ErrorWithCode) {
  if (error.code === 401) {
    yield put(setAuth({ isAuth: false }));
  }

  yield call(toast.error, `${error.name}: ${error.message}`);
}
