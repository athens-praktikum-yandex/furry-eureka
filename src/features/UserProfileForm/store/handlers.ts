/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from 'redux';
import { UserProfileType } from '../types';
import { getUserProfileSuccess } from './actions';
import { ActionTypes } from './actionTypes';

type HandlerFn<F extends (...args: any) => any> = Reducer<UserProfileType, ReturnType<F>>;

const setState: HandlerFn<typeof getUserProfileSuccess> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const ACTIONS = {
  [ActionTypes.GET_USER_PROFILE_SUCCESS]: setState,
};
