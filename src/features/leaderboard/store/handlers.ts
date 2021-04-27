/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from 'redux';
import { GetLeaderboardSuccessPayload } from '../types';
import { getLeaderboardSuccess } from './actions';
import { ActionTypes } from './actionTypes';

type HandlerFn<F extends (...args: any) => any> =
  Reducer<GetLeaderboardSuccessPayload[], ReturnType<F>>;

const setState: HandlerFn<typeof getLeaderboardSuccess> = (
  state,
  { payload },
) => (payload || state);

export const ACTIONS = {
  [ActionTypes.GET_LEADERBOARD_SUCCESS]: setState,
};
