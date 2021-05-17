import { Action } from '@store/types';
import {
  ChangeLeaderboardPayload,
  GetLeaderboardSuccessPayload,
  GetLeaderboardPayload,
} from '../types/store';
import { ActionTypes } from './actionTypes';

export const getLeaderboard = (payload: GetLeaderboardPayload, cookie?: string) => ({
  type: ActionTypes.GET_LEADERBOARD,
  payload,
  cookie,
});

export const getLeaderboardSuccess = (payload: GetLeaderboardSuccessPayload[]):
Action<ActionTypes.GET_LEADERBOARD_SUCCESS, GetLeaderboardSuccessPayload[]> => ({
  type: ActionTypes.GET_LEADERBOARD_SUCCESS,
  payload,
});

export const changeLeaderboard = (payload: ChangeLeaderboardPayload) => ({
  type: ActionTypes.CHANGE_LEADERBOARD,
  payload,
});
