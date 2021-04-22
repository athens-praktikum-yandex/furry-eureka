import type { State, AuthState } from './types';

export default {
  getProp: <T extends keyof AuthState>(propKey: T) => (state: State) => state.auth[propKey],
  getAuth: (state: State) => state.auth,
};
