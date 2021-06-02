import { toast } from 'react-toastify';
import { call, put, takeLeading } from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { SiteThemesState } from '@store/theme/types';
import { AxiosResponse } from 'axios';
import { ActionTypes } from '../actionTypes';
import { getSiteThemes as getSiteThemesAction, siteThemesSetState } from '../actions';

function* getSiteThemes({ type }: ReturnType<typeof getSiteThemesAction>) {
  try {
    yield put(uiActions.request(type));

    const { data: siteThemes }: AxiosResponse<SiteThemesState> = yield call(ajax, {
      method: 'GET',
      url: FURRY_EUREKA_URL.siteThemes,
    }, undefined, BASE_URL.furryEureka);

    yield put(siteThemesSetState(siteThemes));
    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(toast.error, e.message || e);
  }
}

export function* getSiteThemesListener() {
  yield takeLeading(ActionTypes.GET_SITE_THEMES, getSiteThemes);
}
