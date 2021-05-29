import React, { useState } from 'react';
import './Forum.css';
import { Sidebar } from './components/Sidebar';
import { Topic } from './components/Topic';
import {
  useAddTopic, useFilteredComments, useForum, useOwnerId, useSending,
} from './hooks';

export const Forum = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<number>(0);

  const {
    users,
    replies,
    comments,
    topics,
    login,
  } = useForum();

  const ownerId = useOwnerId(users, login);

  const {
    replyButtonHandler,
    sendButtonHandler,
    ref,
  } = useSending({ ownerId, selectedTopicId });

  const { addInputValue, addInputHandler, addClickHandler } = useAddTopic(ownerId);

  const filteredComments = useFilteredComments(users, comments, selectedTopicId);

  return (
    <div className="forum">
      <Sidebar
        addClickHandler={addClickHandler}
        addInputValue={addInputValue}
        addInputHandler={addInputHandler}
        topicList={topics}
        selectedTopicId={selectedTopicId}
        setSelectedTopicId={setSelectedTopicId}
      />
      {!!selectedTopicId && (
        <Topic
          ref={ref}
          replyHandler={replyButtonHandler}
          replies={replies}
          topicMessageList={filteredComments}
          sendMessage={sendButtonHandler}
        />
      )}
    </div>
  );
};
