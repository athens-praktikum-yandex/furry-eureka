import React, { FC } from 'react';
import './PrivateRoute.css';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { routes } from '@components/Routes';
import authSelectors from '@store/auth/selectors';

type Props = FC<RouteProps>;

export const PrivateRoute: Props = (
  {
    location,
    component,
    render,
    path,
    exact,
    sensitive,
    strict,
    children,
  },
) => {
  const isAuth = useSelector(authSelectors.getProp('isAuth'));
  const route = (
    <Route
      location={location}
      component={component}
      path={path}
      exact={exact}
      sensitive={sensitive}
      strict={strict}
      render={render}
    >
      {children}
    </Route>
  );
  if (isAuth && (path === routes.signIn || path === routes.signUp)) {
    return <Redirect to={{ pathname: routes.main }} />;
  }

  if (!isAuth && (path !== routes.signIn || path !== routes.signUp)) {
    return <Redirect to={{ pathname: routes.signIn }} />;
  }
  return route;
};
