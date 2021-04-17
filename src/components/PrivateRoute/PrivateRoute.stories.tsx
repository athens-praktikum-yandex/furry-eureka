import React from 'react';
import { storiesOf } from '@storybook/react';
import { PrivateRoute } from './PrivateRoute';

storiesOf('Basic', module).add('PrivateRoute', () => (
  <PrivateRoute />
));
