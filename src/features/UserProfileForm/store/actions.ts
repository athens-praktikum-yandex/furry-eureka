import { ChangeUserProfilePayload, ChangePasswordPayload } from '../types/store';
import { ActionTypes } from './actionTypes';

export const getUserProfile = () => ({
  type: ActionTypes.GET_USER_PROFILE,
});

export const changeUserProfile = (payload: ChangeUserProfilePayload) => ({
  type: ActionTypes.CHANGE_USER_PROFILE,
  payload,
});

export const changePassword = (payload: ChangePasswordPayload) => ({
  type: ActionTypes.CHANGE_PASSWORD,
  payload,
});
