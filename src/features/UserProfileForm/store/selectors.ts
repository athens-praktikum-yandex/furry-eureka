import type { State } from '@store/types';
import { UserProfileState } from '../types';

export const userProfileSelector = {
  getProp: <T extends keyof UserProfileState>(propKey: T) => (
    state: State,
  ) => state.userProfile[propKey],
  getLogin: (state: State) => state.userProfile.login,
};
