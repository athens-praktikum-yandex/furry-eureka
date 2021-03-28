import type { UIState } from './types';
import type { State } from '../types';

export default {
  getProp: <T extends keyof UIState>(propKey: T) => (state: State) => state.ui[propKey],
  getStatuses: (state: State) => state.ui,
};
