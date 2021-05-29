import { useMemo } from 'react';
import { ForumUser } from '../types';

export const useOwnerId = (users: ForumUser[], login: string): number => {
  const ownerId = useMemo(() => {
    const currentUser = users.find((item) => item.name === login);
    return currentUser?.id;
  }, [users, login]);

  return ownerId || 0;
};
