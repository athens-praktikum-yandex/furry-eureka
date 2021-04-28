import { GetLeaderboardPayload } from '@features/leaderboard/types';

export const getLeaderboardPayload: GetLeaderboardPayload = {
  ratingFieldName: 'athens_time',
  cursor: 0,
  limit: 20,
};
