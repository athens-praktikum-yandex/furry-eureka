import { toast } from 'react-toastify';
import {
  call, put, select, takeLeading,
} from '@redux-saga/core/effects';
import { FURRY_EUREKA_URL } from '@constants/url';
import { ajax } from '@libs/ajax';
import { uiActions } from '@store/ui/actions';
import { BASE_URL } from '@constants/baseUrl';
import { UserTheme } from '@store/theme/types';
import { AxiosResponse } from 'axios';
import { ActionTypes } from '../actionTypes';
import { putUserTheme as putUserThemeAction, userThemesSetState } from '../actions';
import themesSelector from '../selectors';

function* putUserTheme({ type, payload }: ReturnType<typeof putUserThemeAction>) {
  const { id, theme, ...body } = payload;

  try {
    yield put(uiActions.request(type));

    const userThemes: UserTheme[] = yield select(themesSelector.getUserThemes);

    if (id !== 0) {
      yield call(ajax, {
        method: 'PUT',
        url: `${FURRY_EUREKA_URL.userThemes}/${id}`,
        data: body,
      }, undefined, BASE_URL.furryEureka);

      yield put(userThemesSetState(userThemes.map((item) => {
        if (item.id === id) {
          return {
            ownerId: body.ownerId,
            themeId: body.themeId,
            id,
            theme,
          };
        }

        return item;
      })));
    } else {
      const { data: userTheme }: AxiosResponse<UserTheme> = yield call(ajax, {
        method: 'POST',
        url: FURRY_EUREKA_URL.userThemes,
        data: body,
      }, undefined, BASE_URL.furryEureka);

      yield put(userThemesSetState([
        ...userThemes,
        userTheme,
      ]));
    }

    yield put(uiActions.success(type));
  } catch (e) {
    yield put(uiActions.error(type));
    yield call(toast.error, e.message || e);
  }
}

export function* putUserThemeListener() {
  yield takeLeading(ActionTypes.PUT_USER_THEME, putUserTheme);
}
