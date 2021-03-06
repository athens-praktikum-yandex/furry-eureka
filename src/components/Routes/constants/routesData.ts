import {
  getComments, getReplies, getTopics, getUsers,
} from '@features/Forum/store/actions';
import { getLeaderboardPayload } from '@features/leaderboard/constants';
import { getLeaderboard } from '@features/leaderboard/store/actions';
import { getUserProfile } from '@features/UserProfileForm/store/actions';
import { ForumPage } from '@pages/ForumPage';
import { GamePage } from '@pages/GamePage';
import { LeaderboardPage } from '@pages/leaderboard-page';
import { MainPage } from '@pages/MainPage';
import { SignInPage } from '@pages/SignIn';
import { SignUpPage } from '@pages/SignUp';
import { UserProfilePage } from '@pages/UserProfile';
import { getSiteThemes, getUserThemes } from '@store/theme/actions';
import { RouterFetchDataArgs } from '../types';
import { routes } from './routes';

export const routesData = [
  {
    path: routes.main,
    component: MainPage,
    exact: true,
  },
  {
    path: routes.game,
    component: GamePage,
    exact: true,
  },
  {
    path: routes.forum,
    component: ForumPage,
    exact: true,
    fetchData({ dispatch, cookie }: RouterFetchDataArgs) {
      dispatch(getUserProfile(cookie));
      dispatch(getSiteThemes());
      dispatch(getUserThemes());
      dispatch(getComments());
      dispatch(getReplies());
      dispatch(getTopics());
      dispatch(getUsers());
    },
  },
  {
    path: routes.signIn,
    component: SignInPage,
    exact: true,
  },
  {
    path: routes.signUp,
    component: SignUpPage,
    exact: true,
  },
  {
    path: routes.userProfile,
    component: UserProfilePage,
    exact: true,
    fetchData({ dispatch, cookie }: RouterFetchDataArgs) {
      dispatch(getUserProfile(cookie));
    },
  },
  {
    path: routes.leaderBoard,
    component: LeaderboardPage,
    exact: true,
    fetchData({ dispatch, cookie }: RouterFetchDataArgs) {
      dispatch(getLeaderboard(getLeaderboardPayload, cookie));
    },
  },
];
