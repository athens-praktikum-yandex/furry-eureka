import { AuthState } from '@store/auth/types';
import { Action } from '@store/types';
import { ActionTypes } from './actionTypes';

export const setAuth = (payload: AuthState): Action<ActionTypes.SET_IS_AUTH, AuthState> => ({
  type: ActionTypes.SET_IS_AUTH,
  payload,
});

export const checkAuth = (cookie?: string) => ({
  type: ActionTypes.CHECK_AUTH,
  cookie,
});
