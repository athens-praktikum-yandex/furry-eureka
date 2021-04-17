import { history } from '@libs/history';
import { connectRouter } from 'connected-react-router';
import userProfile from '@features/UserProfileForm/store/reducer';
import ui from './ui/reducer';

export const rootReducer = {
  router: connectRouter(history),
  ui,
  userProfile,
};
