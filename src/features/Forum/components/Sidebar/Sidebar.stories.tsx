import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { topicList as topicListMock } from '@features/Forum/mocks';
import { Sidebar } from './Sidebar';

storiesOf('Forum', module).add('Sidebar', () => {
  const topicList = object('topicList', topicListMock);

  return (
    <Sidebar topicList={topicList} />
  );
});
