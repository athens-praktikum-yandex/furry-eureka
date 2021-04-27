import { GetLeaderboardPayload } from '@features/leaderboard/types';

export const getLeaderboardPayload: GetLeaderboardPayload = {
  ratingFieldName: 'athens_time',
  cursor: 0,
  limit: 20,
};

export const changeLeaderboardPayload = (username: string, score: number) => {
  const FIELD_NAME = 'athens_time';
  return {
    ratingFieldName: FIELD_NAME,
    data: {
      username,
      [FIELD_NAME]: score,
    },
  };
};
