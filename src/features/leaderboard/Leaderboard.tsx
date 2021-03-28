import React from 'react';
import { headers, leaderboardScores } from './constants';
import { LeaderboardLine } from './components/leaderboard-line/LeaderboardLine';
import './leaderboard.css';
import { LeaderboardLineHeader } from './components/leaderboard-line/LeaderboardLineHeader';

export const Leaderboard = () => (
  <div className='leaderboard'>
    <h1
      className='leaderboard__header'
    >
      Leaderboard
    </h1>
    <LeaderboardLineHeader
      {...headers}
    />
    {
      leaderboardScores.map((score, index) => (
        <LeaderboardLine
          key={score.username}
          index={index}
          {...score}
        />
      ))
    }
  </div>
);

