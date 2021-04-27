import { Action } from '@store/types';
import { ChangeLeaderboardPayload, GetLeaderboardPayload, GetLeaderboardSuccessPayload } from '../types/store';
import { ActionTypes } from './actionTypes';

export const getLeaderboard = (payload: GetLeaderboardPayload) => ({
  type: ActionTypes.GET_LEADERBOARD,
  payload,
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
