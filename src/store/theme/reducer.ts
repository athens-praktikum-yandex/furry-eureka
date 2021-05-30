import createReducer from '@store/createReducer';
import type { ThemeState } from './types';
import { ACTIONS } from './handlers';

export const initialState: ThemeState = {
  userTheme: {
    id: 0,
    themeId: 0,
    ownerId: 0,
  },
  siteThemes: [],
};

export default createReducer(initialState, ACTIONS);
