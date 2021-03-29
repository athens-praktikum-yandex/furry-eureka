import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Game } from '@pages/Game';
import { Forum } from '@pages/Forum';
import { SignInPage } from '@pages/SignIn';
import { UserProfilePage } from '@pages/UserProfile';
import { SignUpPage } from '@pages/SignUp';
import { routes } from './constants';

export const Routes = () => (
  <Switch>
    <Route path={routes.game} exact component={Game} />
    <Route path={routes.forum} exact component={Forum} />
    <Route path={routes.signIn} exact component={SignInPage} />
    <Route path={routes.signUp} exact component={SignUpPage} />
    <Route path={routes.userProfile} exact component={UserProfilePage} />
  </Switch>
);
