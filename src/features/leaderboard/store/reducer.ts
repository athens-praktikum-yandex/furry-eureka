import createReducer from '@store/createReducer';
import type { GetLeaderboardSuccessPayload } from '../types';
import { ACTIONS } from './handlers';

const initialState: GetLeaderboardSuccessPayload[] = [];
export default createReducer(initialState, ACTIONS);
