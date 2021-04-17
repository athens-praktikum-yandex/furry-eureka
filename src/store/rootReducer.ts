import { history } from '@libs/history';
import { connectRouter } from 'connected-react-router';
import ui from './ui/reducer';
import auth from './auth/reducer';

export const rootReducer = {
  router: connectRouter(history),
  ui,
  auth,
};
