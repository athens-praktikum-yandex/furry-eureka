import { put, takeLeading } from '@redux-saga/core/effects';
import { setAuth } from '@store/auth/actions';
import { ActionTypes } from '../actionTypes';

function* setAuthorization({ payload }: ReturnType<typeof setAuth>) {
  yield put(setAuth(payload));
}

export function* setAuthorizationListener() {
  yield takeLeading(ActionTypes.SET_IS_AUTH, setAuthorization);
}
