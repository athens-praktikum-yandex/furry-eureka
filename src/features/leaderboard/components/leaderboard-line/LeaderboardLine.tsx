import React, { FC } from 'react';
import { OwnProps } from './type';
import './leaderboard-line.css';

type Props = FC<OwnProps>;

export const LeaderboardLine: Props = ({username, time, index}) => {
  return <div className='leaderboard-line'>
    <div
      className='leaderboard-line__index'
    >
      {`№ ${index + 1}`}
    </div>
    <div
      className='leaderboard-line__username'
    >
      {username}
    </div>
    <div
      className='leaderboard-line__time'
    >
      {time}
    </div>
  </div>
};