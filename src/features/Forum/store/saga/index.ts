import { fork } from 'redux-saga/effects';
import { createCommentListener } from './createComment';
import { createReplyListener } from './createReply';
import { createTopicListener } from './createTopic';
import { createUserListener } from './createUser';
import { getCommentsListener } from './getComments';
import { getRepliesListener } from './getReplies';
import { getTopicsListener } from './getTopics';
import { getUsersListener } from './getUsers';

export function* forumSaga() {
  yield fork(createCommentListener);
  yield fork(createReplyListener);
  yield fork(createTopicListener);
  yield fork(createUserListener);
  yield fork(getCommentsListener);
  yield fork(getRepliesListener);
  yield fork(getTopicsListener);
  yield fork(getUsersListener);
}
