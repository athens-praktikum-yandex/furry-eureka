import { history } from '@libs/history';
import { connectRouter } from 'connected-react-router';
import userProfile from '@features/UserProfileForm/store/reducer';
import leaderboard from '@features/leaderboard/store/reducer';
import forum from '@features/Forum/store/reducer';
import ui from './ui/reducer';
import auth from './auth/reducer';
import theme from './theme/reducer';

export const rootReducer = {
  router: connectRouter(history),
  ui,
  auth,
  userProfile,
  leaderboard,
  forum,
  theme,
};
