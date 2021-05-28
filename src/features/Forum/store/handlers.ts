import { Reducer } from '@store/types';
import { ForumState } from '../types';
import {
  createCommentSuccess, createReplySuccess, createTopicSuccess,
  createUserSuccess, getCommentsSuccess, getRepliesSuccess,
  getTopicsSuccess, getUsersSuccess,
} from './actions';
import { ActionTypes } from './actionTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HandlerFn<F extends (...args: any) => any> = Reducer<ForumState, ReturnType<F>>;

export const setUsersState: HandlerFn<typeof getUsersSuccess> = (
  state,
  { payload: users },
) => ({
  ...state,
  users,
});

export const setTopicsState: HandlerFn<typeof getTopicsSuccess> = (
  state,
  { payload: topics },
) => ({
  ...state,
  topics,
});

export const setCommentsState: HandlerFn<typeof getCommentsSuccess> = (
  state,
  { payload: comments },
) => ({
  ...state,
  comments,
});

export const setRepliesState: HandlerFn<typeof getRepliesSuccess> = (
  state,
  { payload: replies },
) => ({
  ...state,
  replies,
});

export const addUserState: HandlerFn<typeof createUserSuccess> = (
  state,
  { payload },
) => ({
  ...state,
  users: [
    ...state.users,
    payload,
  ],
});

export const addTopicState: HandlerFn<typeof createTopicSuccess> = (
  state,
  { payload },
) => ({
  ...state,
  topics: [
    ...state.topics,
    payload,
  ],
});

export const addCommentState: HandlerFn<typeof createCommentSuccess> = (
  state,
  { payload },
) => ({
  ...state,
  comments: [
    ...state.comments,
    payload,
  ],
});

export const addReplyState: HandlerFn<typeof createReplySuccess> = (
  state,
  { payload },
) => ({
  ...state,
  replies: [
    ...state.replies,
    payload,
  ],
});

export const ACTIONS = {
  [ActionTypes.GET_USERS_SUCCESS]: setUsersState,
  [ActionTypes.GET_TOPICS_SUCCESS]: setTopicsState,
  [ActionTypes.GET_COMMENTS_SUCCESS]: setCommentsState,
  [ActionTypes.GET_REPLIES_SUCCESS]: setRepliesState,
  [ActionTypes.CREATE_USER_SUCCESS]: addUserState,
  [ActionTypes.CREATE_TOPIC_SUCCESS]: addTopicState,
  [ActionTypes.CREATE_COMMENT_SUCCESS]: addCommentState,
  [ActionTypes.CREATE_REPLY_SUCCESS]: addReplyState,
};
