import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { UserThemeState, UserTheme } from '@store/theme/types';
import { AxiosResponse } from 'axios';
import { ActionTypes } from '../actionTypes';
import { putUserTheme as putUserThemeAction, userThemeSetState } from '../actions';

function* putUserTheme({ type, payload }: ReturnType<typeof putUserThemeAction>) {
  const { id, ...body } = payload;

  try {
    yield put(uiActions.request(type));

    let userTheme: UserTheme;

    if (id === 0) {
      const { data }: AxiosResponse<UserThemeState> = yield call(ajax, {
        method: 'POST',
        url: FURRY_EUREKA_URL.userThemes,
        data: body,
      }, undefined, BASE_URL.furryEureka);

      userTheme = data;
    } else {
      const { data }: AxiosResponse<UserThemeState> = yield call(ajax, {
        method: 'PUT',
        url: `${FURRY_EUREKA_URL.userThemes}/${id}`,
        data: body,
      }, undefined, BASE_URL.furryEureka);

      userTheme = data;
    }

    yield put(userThemeSetState(userTheme));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(toast.error, e.message || e);
  }
}

export function* putUserThemeListener() {
  yield takeLeading(ActionTypes.GET_SITE_THEMES, putUserTheme);
}
