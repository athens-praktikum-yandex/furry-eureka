import createReducer from '@store/createReducer';
import { ACTIONS } from './handlers';
import { GetLeaderboardStorePayload } from '../types';

const initialState: GetLeaderboardStorePayload[] = [];
export default createReducer(initialState, ACTIONS);
