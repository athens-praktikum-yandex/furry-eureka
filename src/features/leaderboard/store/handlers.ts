/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from 'redux';
import { GetLeaderboardSuccessPayload, GetLeaderboardStorePayload } from '../types';
import { getLeaderboardSuccess } from './actions';
import { ActionTypes } from './actionTypes';

type HandlerFn<F extends (...args: any) => any> =
  Reducer<GetLeaderboardStorePayload[], ReturnType<F>>;

const setState: HandlerFn<typeof getLeaderboardSuccess> = (
  state,
  { payload },
) => ((!payload) ? state! : payload.map((item: GetLeaderboardSuccessPayload) => ({
  time: item.data.athens_time,
  username: item.data.username,
})));

export const ACTIONS = {
  [ActionTypes.GET_LEADERBOARD_SUCCESS]: setState,
};
