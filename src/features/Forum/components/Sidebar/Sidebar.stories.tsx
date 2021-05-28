import React from 'react';
import { storiesOf } from '@storybook/react';
import { useState } from '@storybook/client-api';
import { object } from '@storybook/addon-knobs';
import { topicList as topicListMock } from '@features/Forum/mocks';
import { Sidebar } from './Sidebar';

storiesOf('Forum', module).add('Sidebar', () => {
  const [selectedTopicIdx, setSelectedTopicIdx] = useState(0);
  const topicList = object('topicList', topicListMock);

  return (
    <Sidebar
      addHandler={() => {}}
      addInputValue=""
      setAddInputValue={() => {}}
      topicList={topicList}
      selectedTopicIdx={selectedTopicIdx}
      setSelectedTopicIdx={setSelectedTopicIdx}
    />
  );
});
