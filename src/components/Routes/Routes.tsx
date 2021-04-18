import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GamePage } from '@pages/GamePage';
import { ForumPage } from '@pages/ForumPage';
import { MainPage } from '@pages/MainPage';
import { SignInPage } from '@pages/SignIn';
import { UserProfilePage } from '@pages/UserProfile';
import { SignUpPage } from '@pages/SignUp';
import { LeaderboardPage } from '@pages/leaderboard-page';
import { routes } from './constants';

export const Routes = () => (
  <Switch>
    <Route path={routes.main} exact component={MainPage} />
    <Route path={routes.game} exact component={GamePage} />
    <Route path={routes.forum} exact component={ForumPage} />
    <Route path={routes.signIn} exact component={SignInPage} />
    <Route path={routes.signUp} exact component={SignUpPage} />
    <Route path={routes.userProfile} exact component={UserProfilePage} />
    <Route path={routes.leaderBoard} exact component={LeaderboardPage} />
  </Switch>
);
