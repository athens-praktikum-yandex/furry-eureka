import { OAuthRedirectPayload, OAuthConfirmPayload, SignInPayload } from '../types/store';
import { ActionTypes } from './actionTypes';

export const signIn = (payload: SignInPayload) => ({
  type: ActionTypes.SIGN_IN,
  payload,
});

export const oAuthRedirect = (payload: OAuthRedirectPayload) => ({
  type: ActionTypes.OAUTH_REDIRECT,
  payload,
});

export const oAuthConfirm = (payload: OAuthConfirmPayload) => ({
  type: ActionTypes.OAUTH_CONFIRM,
  payload,
});
