import { ActionTypes as SignUpActionTypes } from '@features/SignUpForm/store/actionTypes';
import { ActionTypes as UserProfileActionTypes } from '@features/UserProfileForm/store/actionTypes';
import { ActionTypes as LeaderboardActionTypes } from '@features/leaderboard/store/actionTypes';
import { ActionTypes as ThemeActionTypes } from '@store/theme/actionTypes';
import {
  error, request, reset, success,
} from './actions';

export enum RequestStatus {
  INIT = 'INIT',
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  RESET = 'RESET',
}

export type Request = ReturnType<typeof request>;
export type Success = ReturnType<typeof success>;
export type Error = ReturnType<typeof error>;
export type Reset = ReturnType<typeof reset>;
export type UIActions = Request | Success | Error | Reset;

type StatusesKeys =
  | SignUpActionTypes.SIGN_UP
  | UserProfileActionTypes.GET_USER_PROFILE
  | UserProfileActionTypes.CHANGE_USER_PROFILE
  | UserProfileActionTypes.CHANGE_PASSWORD
  | LeaderboardActionTypes.GET_LEADERBOARD
  | LeaderboardActionTypes.CHANGE_LEADERBOARD
  | ThemeActionTypes.GET_USER_THEMES;

export type UIState = Record<StatusesKeys, RequestStatus>;
