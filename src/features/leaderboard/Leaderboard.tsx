import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store/types';
import { getLeaderboardPayload, headers } from './constants';
import { LeaderboardLine, LeaderboardLineHeader } from './components/leaderboard-line';
import './leaderboard.css';
import { getLeaderboard } from './store/actions';

export const Leaderboard = () => {
  const leaderboardScores = useSelector((state: State) => state.leaderboard.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!leaderboardScores.length) {
      dispatch(getLeaderboard(getLeaderboardPayload));
    }
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
