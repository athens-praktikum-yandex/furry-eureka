import React from 'react';
import { storiesOf } from '@storybook/react';
import { User } from './User';

storiesOf('Chat', module).add('User', () => (
  <User name="User" />
));
