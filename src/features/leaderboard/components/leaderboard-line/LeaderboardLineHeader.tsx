import React, { FC } from 'react';
import { LeaderboardLineHeaderOwnProps } from './types';
import cn from 'classnames';

type Props = FC<LeaderboardLineHeaderOwnProps>;

export const LeaderboardLineHeader: Props = ({ indexHeader, usernameHeader, timeHeader }) => (
  <div
    className={cn('leaderboard-line',
      'leaderboard-line_header')}
  >
    <div
      className={cn('leaderboard-line__data',
        'leaderboard-line__data_type_index')}
    >
      {indexHeader}
    </div>
    <div
      className={cn('leaderboard-line__data',
        'leaderboard-line__data_type_username')}
    >
      {usernameHeader}
    </div>
    <div
      className={cn('leaderboard-line__data',
        'leaderboard-line__data_type_time')}
    >
      {timeHeader}
    </div>
  </div>
);
