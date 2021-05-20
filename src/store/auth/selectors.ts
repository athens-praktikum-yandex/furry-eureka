import { State } from '@store/types';
import type { AuthState } from './types';

export default {
  getProp: <T extends keyof AuthState>(propKey: T) => (state: State) => state.auth[propKey],
  getAuth: (state: State) => state.auth,
};
