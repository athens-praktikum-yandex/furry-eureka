/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from 'redux';
import { AuthState } from './types';
import { setAuth } from './actions';
import { ActionTypes } from './actionTypes';

type HandlerFn<F extends (...args: any) => any> = Reducer<AuthState, ReturnType<F>>;

const setState: HandlerFn<typeof setAuth> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const ACTIONS = {
  [ActionTypes.SET_IS_AUTH]: setState,
};
