import { State } from '@store/types';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileSelector } from '@features/UserProfileForm/store/selectors';
import { useEffect } from 'react';
import { forumSelectors } from '../store/selectors';
import {
  Comment,
  ForumUser,
  Reply,
  Topic as TopicType,
} from '../types';
import { createUser } from '../store/actions';

export const useForum = () => {
  const dispatch = useDispatch();

  const topics = useSelector<State, TopicType[]>(forumSelectors.getTopics);
  const comments = useSelector<State, Comment[]>(forumSelectors.getComments);
  const replies = useSelector<State, Reply[]>(forumSelectors.getReplies);
  const users = useSelector<State, ForumUser[]>(forumSelectors.getUsers);
  const login = useSelector<State, string>(userProfileSelector.getLogin);

  useEffect(() => {
    const userIsExist = users.find((item) => item.name === login);

    if (login && !userIsExist) {
      dispatch(createUser({ name: login }));
    }
  }, [login]);

  return {
    topics,
    comments,
    replies,
    users,
    login,
  };
};
