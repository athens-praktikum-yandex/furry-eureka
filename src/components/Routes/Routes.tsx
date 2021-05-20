import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '@components/PrivateRoute';
import { routesData } from './constants/routesData';

export const Routes = () => (
  <Switch>
    {routesData.map(({ fetchData, ...routeProps }) => (
      <PrivateRoute key={routeProps.path} {...routeProps} />
    ))}
  </Switch>
);
