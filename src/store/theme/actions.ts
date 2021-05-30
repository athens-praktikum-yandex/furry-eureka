import { ActionTypes } from './actionTypes';
import {
  GetUserThemePayload, PutUserThemePayload, SiteThemesState, UserThemeState,
} from './types';

export const getSiteThemes = () => ({
  type: ActionTypes.GET_SITE_THEMES,
});

export const siteThemesSetState = (payload: SiteThemesState) => ({
  type: ActionTypes.SITE_THEMES_SET_STATE,
  payload,
});

export const getUserTheme = (payload: GetUserThemePayload) => ({
  type: ActionTypes.GET_USER_THEME,
  payload,
});

export const userThemeSetState = (payload: UserThemeState) => ({
  type: ActionTypes.USER_THEME_SET_STATE,
  payload,
});

export const putUserTheme = (payload: PutUserThemePayload) => ({
  type: ActionTypes.PUT_USER_THEME,
  payload,
});
