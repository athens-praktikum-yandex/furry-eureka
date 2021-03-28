import { LeaderboardLineData } from '../../types';

export type LeaderboardLineOwnProps = {
  index: number;
} & LeaderboardLineData;

export type LeaderboardLineHeaderOwnProps = {
  indexHeader: string;
  usernameHeader: string;
  timeHeader: string;
};
