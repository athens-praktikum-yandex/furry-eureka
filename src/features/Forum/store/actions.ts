import {
  CreateCommentRequest, CreateCommentResponse, CreateReplyRequest,
  CreateReplyResponse, CreateTopicRequest, CreateTopicResponse,
  CreateUserRequest, CreateUserResponse, GetCommentsResponse,
  GetRepliesResponse, GetTopicsResponse, GetUsersResponse,
} from '../types';
import { ActionTypes } from './actionTypes';

// User

export const createUser = (payload: CreateUserRequest) => ({
  type: ActionTypes.CREATE_USER,
  payload,
});

export const createUserSetState = (payload: CreateUserResponse) => ({
  type: ActionTypes.CREATE_USER_SET_STATE,
  payload,
});

export const getUsers = () => ({
  type: ActionTypes.GET_USERS,
});

export const getUsersSetState = (payload: GetUsersResponse) => ({
  type: ActionTypes.GET_USERS_SET_STATE,
  payload,
});

// Topic

export const createTopic = (payload: CreateTopicRequest) => ({
  type: ActionTypes.CREATE_TOPIC,
  payload,
});

export const createTopicSetState = (payload: CreateTopicResponse) => ({
  type: ActionTypes.CREATE_TOPIC_SET_STATE,
  payload,
});

export const getTopics = () => ({
  type: ActionTypes.GET_TOPICS,
});

export const getTopicsSetState = (payload: GetTopicsResponse) => ({
  type: ActionTypes.GET_TOPICS_SET_STATE,
  payload,
});

// Comment

export const createComment = (payload: CreateCommentRequest) => ({
  type: ActionTypes.CREATE_COMMENT,
  payload,
});

export const createCommentSetState = (payload: CreateCommentResponse) => ({
  type: ActionTypes.CREATE_COMMENT_SET_STATE,
  payload,
});

export const getComments = () => ({
  type: ActionTypes.GET_COMMENTS,
});

export const getCommentsSetState = (payload: GetCommentsResponse) => ({
  type: ActionTypes.GET_COMMENTS_SET_STATE,
  payload,
});

// Reply

export const createReply = (payload: CreateReplyRequest) => ({
  type: ActionTypes.CREATE_REPLY,
  payload,
});

export const createReplySetState = (payload: CreateReplyResponse) => ({
  type: ActionTypes.CREATE_REPLY_SET_STATE,
  payload,
});

export const getReplies = () => ({
  type: ActionTypes.GET_REPLIES,
});

export const getRepliesSetState = (payload: GetRepliesResponse) => ({
  type: ActionTypes.GET_REPLIES_SET_STATE,
  payload,
});
