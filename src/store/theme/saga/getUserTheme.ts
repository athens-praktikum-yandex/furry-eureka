import { toast } from 'react-toastify';
import {
  call, put, select, takeLeading,
} from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { SiteThemesState, UserThemeState } from '@store/theme/types';
import { AxiosResponse } from 'axios';
import { ActionTypes } from '../actionTypes';
import themeSelector from '../selectors';
import { getUserTheme as getUserThemesAction, userThemeSetState } from '../actions';

function* getUserTheme({ type, payload: { userId } }: ReturnType<typeof getUserThemesAction>) {
  try {
    yield put(uiActions.request(type));

    const { data: userThemes }: AxiosResponse<UserThemeState[]> = yield call(ajax, {
      method: 'GET',
      url: FURRY_EUREKA_URL.userThemes,
    }, undefined, BASE_URL.furryEureka);

    const userTheme = userThemes.find((item) => item.ownerId === userId);
    const siteThemes: SiteThemesState = yield select(themeSelector.getSiteThemes);
    const extendedUserTheme = siteThemes.find((item) => item.id === userTheme?.themeId);

    if (extendedUserTheme && userTheme) {
      userTheme.theme = extendedUserTheme.theme;
    }

    yield put(userThemeSetState(userTheme || {
      themeId: siteThemes[0].id,
      ownerId: userId,
      id: 0,
    }));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(toast.error, e.message || e);
  }
}

export function* getUserThemeListener() {
  yield takeLeading(ActionTypes.GET_USER_THEME, getUserTheme);
}
