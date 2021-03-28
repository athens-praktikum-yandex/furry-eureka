import React from 'react';
import { leaderboardScores } from './constants';
import { LeaderboardLine } from './components/leaderboard-line/LeaderboardLine';
import './leaderboard.css';

export const Leaderboard = () => (
  <div className='leaderboard'>
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

