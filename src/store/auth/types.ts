import { UIState } from '@store/ui/types';

export interface AuthState {
  isAuth: boolean,
}

export type State = {
  router: {
    location: Location,
  },
  auth: AuthState,
  ui: UIState,
};
