import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Game } from '@pages/Game';
import { Forum } from '@pages/Forum';
import { SignIn } from '@pages/SignIn';
import { UserPage } from '@pages/UserPage';
import { SignUp } from '@pages/SignUp';
import { routes } from './constants';

export const Routes = () => (
  <Switch>
    <Route path={routes.game} exact component={Game} />
    <Route path={routes.forum} exact component={Forum} />
    <Route path={routes.signIn} exact component={SignIn} />
    <Route path={routes.signUp} exact component={SignUp} />
    <Route path={routes.userPage} exact component={UserPage} />
  </Switch>
);