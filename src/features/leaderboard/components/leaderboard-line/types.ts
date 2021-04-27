export type LeaderboardLineData = {
  username: string;
  time: string;
};

export type LeaderboardLineOwnProps = {
  index: number;
} & LeaderboardLineData;

export type LeaderboardLineHeaderOwnProps = {
  indexHeader: string;
  usernameHeader: string;
  timeHeader: string;
};
