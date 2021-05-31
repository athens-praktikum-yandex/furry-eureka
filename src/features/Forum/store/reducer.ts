import createReducer from '@store/createReducer';
import { ACTIONS } from './handlers';
import { ForumState } from '../types';

export const initialState: ForumState = {
  users: [],
  topics: [],
  comments: [],
  replies: [],
};

export default createReducer(initialState, ACTIONS);
