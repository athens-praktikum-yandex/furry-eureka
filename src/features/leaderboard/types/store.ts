export type GetLeaderboardPayload = {
  ratingFieldName: string,
  cursor: number,
  limit: number,
};

export type GetLeaderboardSuccessPayload = {
  data: {
    username: string,
    athens_time: string,
  }
};

export type GetLeaderboardStorePayload = {
  username: string,
  time: string,
};

export type ChangeLeaderboardPayload = {
  ratingFieldName: string,
  data: {
    username: string,
    athens_time: number,
  },
  navToLeaderboard: () => void,
};

export type LeaderboardState = { leaderboard: GetLeaderboardStorePayload[] };
