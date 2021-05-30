import { State } from '@store/types';
import type { ThemeState } from './types';

export default {
  getProp: <T extends keyof ThemeState>(propKey: T) => (state: State) => state.theme[propKey],
  getSiteThemes: (state: State) => state.theme.siteThemes,
  getUserTheme: (state: State) => state.theme.userTheme,
};
