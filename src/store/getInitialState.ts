import { initialState as leaderboard } from '@features/leaderboard/store/reducer';
import { initialState as userProfile } from '@features/UserProfileForm/store/reducer';
import { initialState as ui } from '@store/ui/reducer';
import { initialState as auth } from './auth/reducer';
import { State } from './types';

export const getInitialState = (): State => ({
  ui,
  router: {
    location: {
      pathname: '/',
      search: '',
      hash: '',
      key: '',
      query: {},
      state: '',
    },
    action: 'POP',
  },
  auth,
  userProfile,
  leaderboard,
});
