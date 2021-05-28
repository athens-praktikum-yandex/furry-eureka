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

export const createUserSuccess = (payload: CreateUserResponse) => ({
  type: ActionTypes.CREATE_USER_SUCCESS,
  payload,
});

export const getUsers = () => ({
  type: ActionTypes.GET_USERS,
});

export const getUsersSuccess = (payload: GetUsersResponse) => ({
  type: ActionTypes.GET_USERS_SUCCESS,
  payload,
});

// Topic

export const createTopic = (payload: CreateTopicRequest) => ({
  type: ActionTypes.CREATE_TOPIC,
  payload,
});

export const createTopicSuccess = (payload: CreateTopicResponse) => ({
  type: ActionTypes.CREATE_TOPIC_SUCCESS,
  payload,
});

export const getTopics = () => ({
  type: ActionTypes.GET_TOPICS,
});

export const getTopicsSuccess = (payload: GetTopicsResponse) => ({
  type: ActionTypes.GET_TOPICS_SUCCESS,
  payload,
});

// Comment

export const createComment = (payload: CreateCommentRequest) => ({
  type: ActionTypes.CREATE_COMMENT,
  payload,
});

export const createCommentSuccess = (payload: CreateCommentResponse) => ({
  type: ActionTypes.CREATE_COMMENT_SUCCESS,
  payload,
});

export const getComments = () => ({
  type: ActionTypes.GET_COMMENTS,
});

export const getCommentsSuccess = (payload: GetCommentsResponse) => ({
  type: ActionTypes.GET_COMMENTS_SUCCESS,
  payload,
});

// Reply

export const createReply = (payload: CreateReplyRequest) => ({
  type: ActionTypes.CREATE_REPLY,
  payload,
});

export const createReplySuccess = (payload: CreateReplyResponse) => ({
  type: ActionTypes.CREATE_REPLY_SUCCESS,
  payload,
});

export const getReplies = () => ({
  type: ActionTypes.GET_REPLIES,
});

export const getRepliesSuccess = (payload: GetRepliesResponse) => ({
  type: ActionTypes.GET_REPLIES_SUCCESS,
  payload,
});
