import createReducer from '@store/createReducer';
import { ACTIONS } from './handlers';
import { LeaderboardState } from '../types';

export const initialState: LeaderboardState = {
  data: [],
};

export default createReducer(initialState, ACTIONS);
