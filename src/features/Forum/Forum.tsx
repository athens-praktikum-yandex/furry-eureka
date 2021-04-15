import React, { FC, useState } from 'react';
import { OwnProps } from './types';
import './Forum.css';
import { Sidebar } from './components/Sidebar';
import { topicList, topicMessageList } from './mocks';
import { Topic } from './components/Topic';

type Props = FC<OwnProps>;

export const Forum: Props = () => {
  const [selectedTopicIdx, setSelectedTopicIdx] = useState<number>(0);

  return (
    <div className="forum">
      <Sidebar
        topicList={topicList}
        selectedTopicIdx={selectedTopicIdx}
        setSelectedTopicIdx={setSelectedTopicIdx}
      />
      <Topic topicMessageList={topicMessageList[selectedTopicIdx]} />
    </div>
  );
};
