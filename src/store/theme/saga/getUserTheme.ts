import { toast } from 'react-toastify';
import {
  call, put, takeLeading,
} from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { UserThemesState } from '@store/theme/types';
import { AxiosResponse } from 'axios';
import { ActionTypes } from '../actionTypes';
import { getUserThemes as getUserThemesAction, userThemesSetState } from '../actions';

function* getUserTheme({ type }: ReturnType<typeof getUserThemesAction>) {
  try {
    yield put(uiActions.request(type));

    const { data: userThemes }: AxiosResponse<UserThemesState> = yield call(ajax, {
      method: 'GET',
      url: FURRY_EUREKA_URL.userThemes,
    }, undefined, BASE_URL.furryEureka);

    yield put(userThemesSetState(userThemes));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(toast.error, e.message || e);
  }
}

export function* getUserThemeListener() {
  yield takeLeading(ActionTypes.GET_USER_THEMES, getUserTheme);
}
