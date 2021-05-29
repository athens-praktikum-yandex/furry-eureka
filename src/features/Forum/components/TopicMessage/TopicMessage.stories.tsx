import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { TopicMessage } from './TopicMessage';

storiesOf('Forum', module).add('TopicMessage', () => {
  const name = text('name', 'User');
  const message = text('message', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

  return (
    <TopicMessage
      replies={[]}
      replyHandler={() => {}}
      name={name}
      message={message}
    />
  );
});
