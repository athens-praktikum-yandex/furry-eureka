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

  const topics = useSelector<State, TopicType[]>((state) => forumSelectors.getTopics(state));
  const comments = useSelector<State, Comment[]>((state) => forumSelectors.getComments(state));
  const replies = useSelector<State, Reply[]>((state) => forumSelectors.getReplies(state));
  const users = useSelector<State, ForumUser[]>((state) => forumSelectors.getUsers(state));
  const login = useSelector<State, string>((state) => userProfileSelector.getLogin(state));

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
