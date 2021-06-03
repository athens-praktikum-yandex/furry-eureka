import createReducer from '@store/createReducer';
import type { ThemeState } from './types';
import { ACTIONS } from './handlers';

export const initialState: ThemeState = {
  userThemes: [],
  siteThemes: [],
};

export default createReducer(initialState, ACTIONS);
