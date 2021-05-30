/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from '@store/types';
import { siteThemesSetState, userThemeSetState } from './actions';
import { ActionTypes } from './actionTypes';
import { ThemeState } from './types';

type HandlerFn<F extends (...args: any) => any> = Reducer<ThemeState, ReturnType<F>>;

const setSiteThemesState: HandlerFn<typeof siteThemesSetState> = (
  state,
  { payload },
) => ({
  ...state,
  siteThemes: {
    ...payload,
  },
});

const setUserThemeState: HandlerFn<typeof userThemeSetState> = (
  state,
  { payload: userTheme },
) => ({
  ...state,
  userTheme,
});

export const ACTIONS = {
  [ActionTypes.SITE_THEMES_SET_STATE]: setSiteThemesState,
  [ActionTypes.USER_THEME_SET_STATE]: setUserThemeState,
};
