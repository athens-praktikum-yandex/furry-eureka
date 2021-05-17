import { LeaderboardState } from '@features/leaderboard/types';
import { UserProfileState } from '@features/UserProfileForm';
import { RouterState } from 'connected-react-router';
import { Store } from 'redux';
import { SagaMiddleware } from '@redux-saga/core';
import { AuthState } from './auth/types';
import { UIState } from './ui/types';

export type AppStore = Store & {
  runSaga: SagaMiddleware['run'];
  close: () => void;
};

export type State = {
  router: RouterState,
  auth: AuthState,
  ui: UIState,
  userProfile: UserProfileState,
  leaderboard: LeaderboardState
};

export type Action<T = string, P = unknown> = {
  type: T,
  payload: P,
};
