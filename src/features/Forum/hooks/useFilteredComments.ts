import { useMemo } from 'react';
import { Comment, ForumUser } from '../types';

export const useFilteredComments = (
  users: ForumUser[],
  comments: Comment[],
  selectedTopicId: number,
) => {
  const filteredComments = useMemo(() => (
    comments
      .filter((item) => (
        item.topicId === selectedTopicId
      ))
      .map((item) => ({
        ...item,
        name: users.find((user) => user.id === item.ownerId)?.name || 'Unknown',
      }))
  ), [selectedTopicId, comments]);

  return filteredComments;
};
