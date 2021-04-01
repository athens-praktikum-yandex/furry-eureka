import React from 'react';
import { headers, leaderboardScores } from './constants';
import { LeaderboardLine } from './components/leaderboard-line';
import { LeaderboardLineHeader } from './components/leaderboard-line';
import './leaderboard.css';

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
    <div
      className='leaderboard__content'
    >
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

  </div>
);
