import React from 'react';
import { Switch } from 'react-router-dom';
import { GamePage } from '@pages/GamePage';
import { ForumPage } from '@pages/ForumPage';
import { MainPage } from '@pages/MainPage';
import { SignInPage } from '@pages/SignIn';
import { UserProfilePage } from '@pages/UserProfile';
import { SignUpPage } from '@pages/SignUp';
import { LeaderboardPage } from '@pages/leaderboard-page';
import { PrivateRoute } from '@components/PrivateRoute';
import { routes } from './constants';

export const Routes = () => (
  <Switch>
    <PrivateRoute path={routes.main} exact component={MainPage} />
    <PrivateRoute path={routes.game} exact component={GamePage} />
    <PrivateRoute path={routes.forum} exact component={ForumPage} />
    <PrivateRoute path={routes.signIn} exact component={SignInPage} />
    <PrivateRoute path={routes.signUp} exact component={SignUpPage} />
    <PrivateRoute path={routes.userProfile} exact component={UserProfilePage} />
    <PrivateRoute path={routes.leaderBoard} exact component={LeaderboardPage} />
  </Switch>
);
