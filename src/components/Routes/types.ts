import { Dispatch } from 'react';
import { Action } from 'redux';

export enum Routes {
  FORUM = 'forum',
  MAIN = 'main',
  SIGN_IN = 'signIn',
  SIGN_UP = 'signUp',
  USER_PROFILE = 'userProfile',
  LEADERBOARD = 'leaderBoard',
  GAME = 'game',
}

export type RouterFetchDataArgs = {
  dispatch: Dispatch<Action>;
  cookie?: string,
};
