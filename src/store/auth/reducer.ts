import createReducer from '@store/createReducer';
import type { AuthState } from './types';
import { ACTIONS } from './handlers';

export const initialState: AuthState = {
  isAuth: true,
};

export default createReducer(initialState, ACTIONS);
