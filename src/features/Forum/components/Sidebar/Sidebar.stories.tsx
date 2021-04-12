import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { topics as topicsMock } from '@features/Forum/mocks';
import { Sidebar } from './Sidebar';

storiesOf('Forum', module).add('Sidebar', () => {
  const userName = text('userName', 'User');
  const topics = object('topics', topicsMock);

  return (
    <Sidebar topics={topics} userName={userName} />
  );
});
