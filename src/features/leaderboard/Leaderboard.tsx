import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeaderboard } from '@features/leaderboard/store/actions';
import { LeaderboardState } from '@features/leaderboard/types';

import { headers, getLeaderboardPayload } from './constants';
import { LeaderboardLine, LeaderboardLineHeader } from './components/leaderboard-line';
import './leaderboard.css';

export const Leaderboard = () => {
  const dispatch = useDispatch();
  const leaderboardScores = useSelector((state: LeaderboardState) => state.leaderboard);
  useEffect(() => {
    dispatch(getLeaderboard(getLeaderboardPayload));
  }, []);

  return (
    <div className="leaderboard">
      <h1
        className="leaderboard__header"
      >
        Leaderboard
      </h1>
      <LeaderboardLineHeader
        {...headers}
      />
      <div
        className="leaderboard__content"
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
};
