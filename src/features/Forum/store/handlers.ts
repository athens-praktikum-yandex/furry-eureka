import { Reducer } from '@store/types';
import { ForumState } from '../types';
import {
  createCommentSetState, createReplySetState, createTopicSetState,
  createUserSetState, getCommentsSetState, getRepliesSetState,
  getTopicsSetState, getUsersSetState,
} from './actions';
import { ActionTypes } from './actionTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HandlerFn<F extends (...args: any) => any> = Reducer<ForumState, ReturnType<F>>;

const setUsersState: HandlerFn<typeof getUsersSetState> = (
  state,
  { payload: users },
) => ({
  ...state,
  users,
});

const setTopicsState: HandlerFn<typeof getTopicsSetState> = (
  state,
  { payload },
) => ({
  ...state,
  topics: [...payload],
});

const setCommentsState: HandlerFn<typeof getCommentsSetState> = (
  state,
  { payload },
) => ({
  ...state,
  comments: [...payload],
});

const setRepliesState: HandlerFn<typeof getRepliesSetState> = (
  state,
  { payload },
) => ({
  ...state,
  replies: [...payload],
});

const addUserState: HandlerFn<typeof createUserSetState> = (
  state,
  { payload: user },
) => ({
  ...state,
  users: [
    ...state.users,
    user,
  ],
});

const addTopicState: HandlerFn<typeof createTopicSetState> = (
  state,
  { payload: topic },
) => ({
  ...state,
  topics: [
    ...state.topics,
    topic,
  ],
});

const addCommentState: HandlerFn<typeof createCommentSetState> = (
  state,
  { payload: comment },
) => ({
  ...state,
  comments: [
    ...state.comments,
    comment,
  ],
});

const addReplyState: HandlerFn<typeof createReplySetState> = (
  state,
  { payload: reply },
) => ({
  ...state,
  replies: [
    ...state.replies,
    reply,
  ],
});

export const ACTIONS = {
  [ActionTypes.GET_USERS_SET_STATE]: setUsersState,
  [ActionTypes.GET_TOPICS_SET_STATE]: setTopicsState,
  [ActionTypes.GET_COMMENTS_SET_STATE]: setCommentsState,
  [ActionTypes.GET_REPLIES_SET_STATE]: setRepliesState,
  [ActionTypes.CREATE_USER_SET_STATE]: addUserState,
  [ActionTypes.CREATE_TOPIC_SET_STATE]: addTopicState,
  [ActionTypes.CREATE_COMMENT_SET_STATE]: addCommentState,
  [ActionTypes.CREATE_REPLY_SET_STATE]: addReplyState,
};
