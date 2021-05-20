import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { errorHandlerSaga } from '@libs/errorHandlerSaga';
import { changeUserProfile as changeUserProfileAction } from '../actions';
import { ActionTypes } from '../actionTypes';

function* changeUserProfile({ type, payload: data }: ReturnType<typeof changeUserProfileAction>) {
  try {
    yield put(uiActions.request(type));

    yield call(ajax, {
      method: 'PUT',
      url: URL.changeProfile,
      data,
    });

    yield put(uiActions.success(type));
    toast.success('Данные пользователя обновлены');
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(errorHandlerSaga, e);
  }
}

export function* changeUserProfileListener() {
  yield takeLeading(ActionTypes.CHANGE_USER_PROFILE, changeUserProfile);
}
