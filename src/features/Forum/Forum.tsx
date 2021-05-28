import React, {
  useEffect, useMemo, useState, useCallback,
} from 'react';
import './Forum.css';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store/types';
import { getUserProfile } from '@features/UserProfileForm/store/actions';
import { userProfileSelector } from '@features/UserProfileForm/store/selectors';
import { Sidebar } from './components/Sidebar';
import { topicMessageList } from './mocks';
import {
  createTopic, createUser, getComments,
  getReplies, getTopics, getUsers,
} from './store/actions';
import { forumSelectors } from './store/selectors';
import { ForumUser, Topic as TopicType } from './types';
import { Topic } from './components/Topic';

export const Forum = () => {
  const dispatch = useDispatch();

  const topics = useSelector<State, TopicType[]>((state) => forumSelectors.getTopics(state));
  const users = useSelector<State, ForumUser[]>((state) => forumSelectors.getUsers(state));
  const login = useSelector<State, string>((state) => userProfileSelector.getLogin(state));
  const ownerId = useMemo(() => {
    const currentUser = users.find((item) => item.name === login);
    return currentUser?.id;
  }, [users, login]);

  const [addInputValue, setAddInputValue] = useState<string>('');
  const [selectedTopicIdx, setSelectedTopicIdx] = useState<number>(0);

  useEffect(() => {
    dispatch(getComments());
    dispatch(getReplies());
    dispatch(getTopics());
    dispatch(getUsers());
    dispatch(getUserProfile());
  }, []);

  useEffect(() => {
    const userIsExist = users.find((item) => item.name === login);

    if (login && !userIsExist) {
      dispatch(createUser({ name: login }));
    }
  }, [login]);

  const addHandler = useCallback(() => {
    if (addInputValue && ownerId) {
      dispatch(createTopic({ name: addInputValue, ownerId }));
    }
  }, [addInputValue, ownerId]);

  return (
    <div className="forum">
      <Sidebar
        addHandler={addHandler}
        addInputValue={addInputValue}
        setAddInputValue={setAddInputValue}
        topicList={topics}
        selectedTopicIdx={selectedTopicIdx}
        setSelectedTopicIdx={setSelectedTopicIdx}
      />
      <Topic topicMessageList={topicMessageList[selectedTopicIdx]} />
    </div>
  );
};
