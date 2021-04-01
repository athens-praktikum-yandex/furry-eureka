import React, { FC } from 'react';
import { LeaderboardLineOwnProps } from './types';
import './leaderboard-line.css';
import cn from 'classnames';

type Props = FC<LeaderboardLineOwnProps>;

export const LeaderboardLine: Props = ({username, time, index}) => (
  <div className='leaderboard-line'>
    <div
      className={cn('leaderboard-line__data',
        'leaderboard-line__data_type_index'
      )}
    >
      {`№ ${index + 1}`}
    </div>
    <div
      className={cn('leaderboard-line__data',
        'leaderboard-line__data_type_username'
      )}
    >
      {username}
    </div>
    <div
      className={cn('leaderboard-line__data',
        'leaderboard-line__data_type_time'
      )}
    >
      {time}
    </div>
  </div>
);
