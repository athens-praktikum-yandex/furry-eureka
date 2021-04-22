import { fork } from 'redux-saga/effects';
import { errorHandlerListener } from './errorHandler';

export function* errorSaga() {
  yield fork(errorHandlerListener);
}
