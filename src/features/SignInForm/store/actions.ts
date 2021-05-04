import { OAuthPayload, SignInPayload } from '../types/store';
import { ActionTypes } from './actionTypes';

export const signIn = (payload: SignInPayload) => ({
  type: ActionTypes.SIGN_IN,
  payload,
});

export const oAuth = (payload: OAuthPayload) => ({
  type: ActionTypes.OAUTH_REDIRECT,
  payload,
});
