import type { State } from '@store/types';
import { ForumState } from '../types';

export const forumSelectors = {
  getProp: <T extends keyof ForumState>(propKey: T) => (state: State) => state.forum[propKey],
  getComments: (state: State) => state.forum.comments,
  getUsers: (state: State) => state.forum.users,
  getTopics: (state: State) => state.forum.topics,
  getReplies: (state: State) => state.forum.replies,
};
