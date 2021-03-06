import { LeaderboardState } from '@features/leaderboard/types';
import { UserProfileState } from '@features/UserProfileForm';
import { RouterState } from 'connected-react-router';
import { Store } from 'redux';
import { SagaMiddleware } from '@redux-saga/core';
import { ForumState } from '@features/Forum';
import { AuthState } from './auth/types';
import { UIState } from './ui/types';
import { ThemeState } from './theme/types';

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
  forum: ForumState
  theme: ThemeState
};

export type Action<T = string, P = unknown> = {
  type: T,
  payload: P,
};

export type Reducer<S, A> = (state: S, action: A) => S;
