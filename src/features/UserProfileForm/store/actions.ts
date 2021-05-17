import { Action } from '@store/types';
import { ChangeUserProfilePayload, ChangePasswordPayload, GetUserProfileSuccessPayload } from '../types/store';
import { ActionTypes } from './actionTypes';

export const getUserProfile = (cookie?: string) => ({
  type: ActionTypes.GET_USER_PROFILE,
  cookie,
});

export const getUserProfileSuccess = (payload: GetUserProfileSuccessPayload):
Action<ActionTypes.GET_USER_PROFILE_SUCCESS, GetUserProfileSuccessPayload> => ({
  type: ActionTypes.GET_USER_PROFILE_SUCCESS,
  payload,
});

export const changeUserProfile = (payload: ChangeUserProfilePayload) => ({
  type: ActionTypes.CHANGE_USER_PROFILE,
  payload,
});

export const changePassword = (payload: ChangePasswordPayload) => ({
  type: ActionTypes.CHANGE_PASSWORD,
  payload,
});
