import { ActionTypes } from './actionTypes';
import { PutUserThemePayload, SiteThemesState, UserThemesState } from './types';

export const getSiteThemes = () => ({
  type: ActionTypes.GET_SITE_THEMES,
});

export const siteThemesSetState = (payload: SiteThemesState) => ({
  type: ActionTypes.SITE_THEMES_SET_STATE,
  payload,
});

export const getUserThemes = () => ({
  type: ActionTypes.GET_USER_THEMES,
});

export const userThemesSetState = (payload: UserThemesState) => ({
  type: ActionTypes.USER_THEME_SET_STATE,
  payload,
});

export const putUserTheme = (payload: PutUserThemePayload) => ({
  type: ActionTypes.PUT_USER_THEME,
  payload,
});
