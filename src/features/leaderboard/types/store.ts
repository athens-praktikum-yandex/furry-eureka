export type GetLeaderboardPayload = {
  ratingFieldName: string,
  cursor: number,
  limit: number,
};

export type GetLeaderboardInitialPayload = {
  data: {
    athens_time: string,
    username: string,
  }
};

export type GetLeaderboardSuccessPayload = {
  username: string,
  time: string,
};

export type ChangeLeaderboardPayload = {
  data: {
    username: string,
    athens_time: number,
  },
  ratingFieldName: string
};

export type LeaderboardState = { leaderboard: GetLeaderboardSuccessPayload[] };
