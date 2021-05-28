import React, { useEffect, useState } from 'react';
import './Forum.css';
import { useDispatch } from 'react-redux';
import { Sidebar } from './components/Sidebar';
import { topicList, topicMessageList } from './mocks';
import { Topic } from './components/Topic';
import {
  getComments, getReplies, getTopics, getUsers,
} from './store/actions';

export const Forum = () => {
  const dispatch = useDispatch();
  const [selectedTopicIdx, setSelectedTopicIdx] = useState<number>(0);

  useEffect(() => {
    dispatch(getComments());
    dispatch(getReplies());
    dispatch(getTopics());
    dispatch(getUsers());
  }, []);

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
