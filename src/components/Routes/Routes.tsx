import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Game } from '@pages/Game';
import { ForumPage } from '@pages/ForumPage';
import { SignInPage } from '@pages/SignIn';
import { UserProfilePage } from '@pages/UserProfile';
import { SignUpPage } from '@pages/SignUp';
import { LeaderboardPage } from '@pages/leaderboard-page';
import { PrivateRoute } from '@components/PrivateRoute';
import { routes } from './constants';

export const Routes = () => (
  <Switch>
    <PrivateRoute path={routes.game} exact component={Game} />
    <PrivateRoute path={routes.forum} exact component={ForumPage} />
    <Route path={routes.signIn} exact component={SignInPage} />
    <Route path={routes.signUp} exact component={SignUpPage} />
    <PrivateRoute path={routes.userProfile} exact component={UserProfilePage} />
    <PrivateRoute path={routes.leaderBoard} exact component={LeaderboardPage} />
  </Switch>
);
