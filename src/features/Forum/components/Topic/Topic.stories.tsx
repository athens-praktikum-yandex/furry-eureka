import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { topicMessageList } from '@features/Forum/mocks';
import { Topic } from './Topic';

storiesOf('Forum', module).add('Topic', () => {
  const topicListMessage = object('topicMessageList', topicMessageList[0]);

  return (
    <Topic topicMessageList={topicListMessage} />
  );
});
